from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    """"
    The serializer converts Task model instances into JSON for API responses
    and validates incoming request data before saving it to the database.
    """
    def validate_title(self, value):
        if not value.strip():
            raise serializers.ValidationError("Title cannot be empty")
        return value
    class Meta:
        model = Task
        fields = ['id', 'title', 'status', 'created_at', 'updated_at']
