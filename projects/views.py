from django.shortcuts import render

# Create your views here.
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer