from django.contrib import admin
from .models import Project, ProjectStatus
# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')

class ProjectStatusAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')


admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectStatus, ProjectStatusAdmin)