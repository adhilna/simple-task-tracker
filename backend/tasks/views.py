from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Task
from .serialiazers import TaskSerializer

class TaskListCreateView(APIView):

    def get(self, request):
        tasks = Task.objects.all().order_by('-created_at')
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self ,request):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskStatusUpdateView(APIView):

    def patch(self, request, id):
        try:
            task = Task.objects.get(id=id)
        except Task.DoesNotExist:
            return Response(
                {"error": "Task not found"},
                status=status.HTTP_400_BAD_REQUEST
            )

        new_status = request.data.get("status")

        valid_statuses = ["TODO", "IN_PROGRESS", "DONE"]

        if not new_status:
            return Response(
                {"error": "Status is required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if new_status not in valid_statuses:
            return Response(
                {"error": "Invaild status"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if task.status == "TODO" and new_status == "DONE":
            return Response(
                {"error": "cannot move directly from TODO to DONE" },
                status=status.HTTP_400_BAD_REQUEST
            )

        task.status = new_status
        task.save()

        serializer = TaskSerializer(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

class TaskDeleteView(APIView):

    def delete(self, request, id):
        try:
            task = Task.objects.get(id=id)
        except Task.DoesNotExist:
            return Response(
                {"error": "Task not found"},
                status=status.HTTP_400_BAD_REQUEST
            )

        task.delete()
        return Response(
            {"Message": "Task deleted successfully"},
            status=status.HTTP_200_OK
        )