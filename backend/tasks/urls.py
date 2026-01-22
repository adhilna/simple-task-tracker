from django.urls import path
from .views import TaskListCreateView, TaskStatusUpdateView, TaskDeleteView

urlpatterns = [
    path('tasks/', TaskListCreateView.as_view()),
    path('tasks/<int:id>/status/', TaskStatusUpdateView.as_view()),
    path("tasks/<int:id>/", TaskDeleteView.as_view()),

]