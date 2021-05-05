from django.shortcuts import render

# Create your views here.
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

class ProjectListCreate(generics.ListCreateAPIView):
    queryset = Project.objects.select_related('status')
    serializer_class = ProjectSerializer