"""Admin configs for Base App."""

from django.contrib import admin

from apps.base.models import (
    Portfolio,
    Project,
    Skill,
    WorkExperience,
    Contact
)


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    """Admin config for the Portfolio model."""
    list_display = ("full_name", "specialization",)
    ordering = ("pk",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    """Admin config for the Project model."""
    list_display = ("title", "repository", "status",)
    ordering = ("pk",)


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    """Admin config for the Skill model."""
    list_display = ("name", "status",)
    ordering = ("pk",)


@admin.register(WorkExperience)
class WorkExperienceAdmin(admin.ModelAdmin):
    """Admin config for the WorkExperience model."""
    list_display = ("job_title", "company", "status",)
    ordering = ("pk",)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    """Admin config for the Contact model."""
    list_display = ("name", "email", "phone_number",)
    ordering = ("pk",)
