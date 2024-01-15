"""Views for Base App."""

from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.translation import gettext as _
from apps.base.forms import ContactForm
from apps.base.models import Project, WorkExperience, Skill


class LandingTemplateView(TemplateView):
    """View for rendering the site landing."""
    template_name = "base/landing.html"

    def get(self, request, *args, **kwargs):
        # Create an instance of the form
        form = ContactForm()

        # Retrieve all contexts with a status set to True
        projects = Project.objects.filter(status=True)
        experiences = WorkExperience.objects.filter(status=True)
        skills = Skill.objects.filter(status=True)

        return render(request, self.template_name, {
            "projects": projects,
            "experiences": experiences,
            "skills": skills,
            "form": form
            }
        )

    def post(self, request, *args, **kwargs):
        """Pending."""
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            success_message = _("Message sent successfully!")

            return redirect(reverse('home:landing_view') + '?success_message=' + success_message)

        projects = Project.objects.filter(status=True)
        experiences = WorkExperience.objects.filter(status=True)
        skills = Skill.objects.filter(status=True)

        return render(request, self.template_name, {
            "projects": projects,
            "experiences": experiences,
            "skills": skills,
            "form": form
        })
