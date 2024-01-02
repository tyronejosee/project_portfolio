"""Models for Base App."""

from django.db import models
from apps.base.mixins import TimestampMixin


class Portfolio(models.Model):
    """Entity type model for Portfolio."""

    full_name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=255)
    bio = models.TextField()
    about_me = models.TextField()
    gmail = models.URLField(blank=True)
    github = models.URLField(blank=True)
    linkedin = models.URLField(blank=True)
    image_file = models.ImageField(upload_to='portfolio/')
    resume_file = models.FileField(upload_to='portfolio/', null=True, blank=True)

    def __str__(self):
        return str(self.full_name)


class Project(TimestampMixin, models.Model):
    """Entity type model for Project."""

    title = models.CharField(max_length=100, unique=True)
    description = models.TextField()
    repository = models.URLField()
    website = models.URLField(null=True, blank=True)
    image = models.FileField(upload_to='project/')
    status = models.BooleanField(default=True)

    def __str__(self):
        return str(self.title)


class Skill(TimestampMixin, models.Model):
    """Entity type model for Skill."""

    name = models.CharField(max_length=50, unique=True)
    icon = models.TextField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return str(self.name)


class WorkExperience(TimestampMixin, models.Model):
    """Entity type model for WorkExperience."""

    job_title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    description = models.TextField()
    skill_id = models.ManyToManyField(Skill, related_name='skills')
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    status = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.job_title} at {self.company}'


class Contact(models.Model):
    """Entity type model for Contact."""

    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()

    def __str__(self):
        return f'{self.name} - {self.email}'
