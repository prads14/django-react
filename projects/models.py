from django.db import models

# Create your models here.

class Project(models.Model):
    name = models.CharField(max_length=100)
    client = models.CharField(max_length=100)
    start_date = models.DateField(blank=True, null=True)
    end_date = models.DateField(blank=True, null=True)


class ProjectStatus(models.Model):
    name = models.CharField(max_length=40, unique=True)
    default = models.BooleanField(default=False)
    locked = models.BooleanField(default=False) 

    def __str__(self):
        return self.name