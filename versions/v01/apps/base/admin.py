"""Admin configs for Base App."""

from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin

from apps.base.models import (
    Portfolio,
    Project,
    Skill,
    WorkExperience,
    Contact
)


# Import-Export
class PortfolioResource(resources.ModelResource):
    """Class for importing and exporting data for the Portfolio model."""
    class Meta:
        """Meta definition for PortfolioResource."""
        model = Portfolio


class ProjectResource(resources.ModelResource):
    """Class for importing and exporting data for the Project model."""
    class Meta:
        """Meta definition for ProjectResource."""
        model = Project


class SkillResource(resources.ModelResource):
    """Class for importing and exporting data for the Skill model."""
    class Meta:
        """Meta definition for SkillResource."""
        model = Skill


class WorkExperienceResource(resources.ModelResource):
    """Class for importing and exporting data for the WorkExperience model."""
    class Meta:
        """Meta definition for WorkExperienceResource."""
        model = WorkExperience


# Models
@admin.register(Portfolio)
class PortfolioAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the Portfolio model."""
    list_display = ("full_name", "specialization",)
    ordering = ("pk",)
    resource_class = PortfolioResource


@admin.register(Project)
class ProjectAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the Project model."""
    list_display = ("title", "repository", "status",)
    ordering = ("pk",)
    resource_class = ProjectResource


@admin.register(Skill)
class SkillAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the Skill model."""
    list_display = ("name", "status",)
    ordering = ("pk",)
    resource_class = SkillResource


@admin.register(WorkExperience)
class WorkExperienceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    """Admin config for the WorkExperience model."""
    list_display = ("job_title", "company", "status",)
    ordering = ("pk",)
    resource_class = WorkExperienceResource


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    """Admin config for the Contact model."""
    list_display = ("name", "email",)
    ordering = ("pk",)
