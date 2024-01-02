"""Views for Base App."""

from django.views.generic import TemplateView
from django.shortcuts import render

from apps.base.forms import ContactForm


class LandingTemplateView(TemplateView):
    """View for rendering the site landing."""

    template_name = 'base/landing.html'

    def get(self, request, *args, **kwargs):
        # Create an instance of the form
        form = ContactForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        """Handle POST requests for processing the submitted form."""
        # Process the form submitted via the POST method
        form = ContactForm(request.POST)

        # If the form is valid, save it and provide feedback to the user
        if form.is_valid():
            form.save()
            success_message = "Message sent successfully!"

            return render(request, self.template_name, {
                'form': ContactForm(),
                'success_message': success_message
                }
            )

        # If the form is not valid, render the template with the form
        return render(request, self.template_name, {'form': form})
