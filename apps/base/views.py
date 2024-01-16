"""Views for Base App."""

from django.views.generic import TemplateView
from django.shortcuts import render, redirect
from django.urls import reverse
from django.utils.translation import gettext as _
from apps.base.forms import ContactForm, ThemePreferenceForm
from apps.base.models import Project, WorkExperience, Skill


class LandingTemplateView(TemplateView):
    """View for rendering the site landing."""
    template_name = "base/landing.html"

    def get_context_data(self, **kwargs):
        """Override to provide additional context data."""
        context = super().get_context_data(**kwargs)
        context['projects'] = Project.objects.filter(status=True)
        context['experiences'] = WorkExperience.objects.filter(status=True)
        context['skills'] = Skill.objects.filter(status=True)
        context['contact_form'] = ContactForm()

        return context

    def post(self, request, *args, **kwargs):
        """Overrides to handle POST requests."""
        projects = Project.objects.filter(status=True)
        experiences = WorkExperience.objects.filter(status=True)
        skills = Skill.objects.filter(status=True)

        # Forms
        contact_form = ContactForm(request.POST)
        theme_form = ThemePreferenceForm(request.POST)

        # Save the contact form data, return message
        if contact_form.is_valid():
            contact_form.save()
            success_message = _("Message sent successfully!")

            return redirect(reverse('home:landing_view') + '?success_message=' + success_message)

        # Handle ThemePreferenceForm submission
        if theme_form.is_valid():
            theme_preference = theme_form.cleaned_data['theme_preference']
            request.session['theme_preference'] = theme_preference

        return render(request, self.template_name, {
            "projects": projects,
            "experiences": experiences,
            "skills": skills,
            "contact_form": contact_form,
            "theme_form": theme_form,
            }
        )
