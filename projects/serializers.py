from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    status = serializers.StringRelatedField()

    class Meta:
        model = Project
        fields = ('id', 'name', 'client', 'start_date', 'end_date', 'status')