"""Models for Base App."""

from django.db import models
from django.utils.translation import gettext as _
from apps.base.mixins import TimestampMixin


class Portfolio(models.Model):
    """Entity type model for Portfolio."""
    full_name = models.CharField(_("Full Name"), max_length=100)
    specialization = models.CharField(_("Specialization"), max_length=255)
    bio = models.TextField(_("Bio"))
    about_me = models.TextField(_("About Me"))
    gmail = models.URLField(_("Gmail"), blank=True)
    github = models.URLField(_("GitHub"), blank=True)
    linkedin = models.URLField(_("LinkedIn"), blank=True)
    image_file = models.ImageField(_("Image File"), upload_to='portfolio/')
    resume_file = models.FileField(_("Resume File"), upload_to='portfolio/', null=True, blank=True)

    class Meta:
        """Meta definition for Portfolio."""
        verbose_name = _("Portfolio")
        verbose_name_plural = _("Portfolio")

    def __str__(self):
        return str(self.full_name)


class Project(TimestampMixin, models.Model):
    """Entity type model for Project."""
    title = models.CharField(_("Title"), max_length=100, unique=True)
    description = models.TextField(_("Description"))
    repository = models.URLField(_("Repository"))
    website = models.URLField(_("Website"), null=True, blank=True)
    image = models.FileField(_("Image"), upload_to='project/')
    status = models.BooleanField(_("Status"), default=True)

    class Meta:
        """Meta definition for Project."""
        verbose_name = _("Project")
        verbose_name_plural = _("Projects")

    def __str__(self):
        return str(self.title)


class Skill(TimestampMixin, models.Model):
    """Entity type model for Skill."""
    name = models.CharField(_("Name"), max_length=50, unique=True)
    icon = models.TextField(_("Icon"))
    status = models.BooleanField(_("Status"), default=True)

    class Meta:
        """Meta definition for Skill."""
        verbose_name = _("Skill")
        verbose_name_plural = _("Skills")

    def __str__(self):
        return str(self.name)


class WorkExperience(TimestampMixin, models.Model):
    """Entity type model for WorkExperience."""
    job_title = models.CharField(_("Job Title"), max_length=100)
    company = models.CharField(_("Company"), max_length=100)
    description = models.TextField(_("Description"))
    skill_id = models.ManyToManyField(Skill, verbose_name=_("Skills"))
    start_date = models.DateField(_("Start Date"))
    end_date = models.DateField(_("End Date"), null=True, blank=True)
    status = models.BooleanField(_("Status"), default=True)

    class Meta:
        """Meta definition for WorkExperience."""
        verbose_name = _("WorkExperience")
        verbose_name_plural = _("WorkExperiences")

    def __str__(self):
        return f'{self.job_title} at {self.company}'


class Contact(models.Model):
    """Entity type model for Contact."""
    name = models.CharField(_("Name"), max_length=255)
    email = models.EmailField(_("Email"))
    phone_number = models.CharField(_("Phone Number"), max_length=20, blank=True, null=True)
    message = models.TextField(_("Message"))

    class Meta:
        """Meta definition for Contact."""
        verbose_name = _("Contact")
        verbose_name_plural = _("Contacts")

    def __str__(self):
        return f'{self.name} - {self.email}'
