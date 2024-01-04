"""Models for Base App."""

from django.db import models
from django.utils.translation import gettext as _
from apps.base.mixins import TimestampMixin


class Portfolio(models.Model):
    """Entity type model for Portfolio."""
    full_name = models.CharField(max_length=100, verbose_name=_('Full Name'))
    specialization = models.CharField(max_length=255, verbose_name=_('Specialization'))
    bio = models.TextField(verbose_name=_('Bio'))
    about_me = models.TextField(verbose_name=_('About Me'))
    gmail = models.URLField(blank=True, verbose_name=_('Gmail'))
    github = models.URLField(blank=True, verbose_name=_('GitHub'))
    linkedin = models.URLField(blank=True, verbose_name=_('LinkedIn'))
    image_file = models.ImageField(upload_to='portfolio/', verbose_name=_('Image File'))
    resume_file = models.FileField(
        upload_to='portfolio/', null=True, blank=True, verbose_name=_('Resume File')
    )

    class Meta:
        """Meta definition for Portfolio."""
        verbose_name = _("Portfolio")
        verbose_name_plural = _("Portfolio")

    def __str__(self):
        return str(self.full_name)


class Project(TimestampMixin, models.Model):
    """Entity type model for Project."""
    title = models.CharField(max_length=100, unique=True, verbose_name=_('Title'))
    description = models.TextField(verbose_name=_('Description'))
    repository = models.URLField(verbose_name=_('Repository'))
    website = models.URLField(null=True, blank=True, verbose_name=_('Website'))
    image = models.FileField(upload_to='project/', verbose_name=_('Image'))
    status = models.BooleanField(default=True, verbose_name=_('Status'))

    class Meta:
        """Meta definition for Project."""
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")

    def __str__(self):
        return str(self.title)


class Skill(TimestampMixin, models.Model):
    """Entity type model for Skill."""
    name = models.CharField(max_length=50, unique=True, verbose_name=_('Name'))
    icon = models.TextField(verbose_name=_('Icon'))
    status = models.BooleanField(default=True, verbose_name=_('Status'))

    class Meta:
        """Meta definition for Skill."""
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")

    def __str__(self):
        return str(self.name)


class WorkExperience(TimestampMixin, models.Model):
    """Entity type model for WorkExperience."""
    job_title = models.CharField(max_length=100, verbose_name=_('Job Title'))
    company = models.CharField(max_length=100, verbose_name=_('Company'))
    description = models.TextField(verbose_name=_('Description'))
    skill_id = models.ManyToManyField(Skill, related_name='skills', verbose_name=_('Skills'))
    start_date = models.DateField(verbose_name=_('Start Date'))
    end_date = models.DateField(null=True, blank=True, verbose_name=_('End Date'))
    status = models.BooleanField(default=True, verbose_name=_('Status'))

    class Meta:
        """Meta definition for WorkExperience."""
        verbose_name = _("WorkExperience")
        verbose_name_plural = _("WorkExperiences")

    def __str__(self):
        return f'{self.job_title} at {self.company}'


class Contact(models.Model):
    """Entity type model for Contact."""
    name = models.CharField(max_length=255, verbose_name=_('Name'))
    email = models.EmailField(verbose_name=_('Email'))
    phone_number = models.CharField(
        max_length=20, blank=True, null=True, verbose_name=_('Phone Number')
    )
    message = models.TextField(verbose_name=_('Message'))

    class Meta:
        """Meta definition for Contact."""
        verbose_name = _("Contact")
        verbose_name_plural = _("Contacts")

    def __str__(self):
        return f'{self.name} - {self.email}'
