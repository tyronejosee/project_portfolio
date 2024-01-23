"""Forms for Base App."""

from django import forms
from django.utils.translation import gettext as _
from apps.base.models import Contact


class ContactForm(forms.ModelForm):
    """Base form for contact."""

    class Meta:
        """Meta definition for ContactForm."""
        model = Contact
        fields = ["name", "email", "message"]
        widgets = {
            "name": forms.TextInput(attrs={"class": "form__input form__input--text"}),
            "email": forms.EmailInput(attrs={"class": "form__input form__input--text"}),
            "message": forms.Textarea(attrs={"class": "form__input form__input--textarea"}),
        }


class ThemePreferenceForm(forms.Form):
    """Base form for Theme Preference."""
    THEME_CHOICES = [
        ('dark', _('Dark Theme')),
        ('light', _('Light Theme')),
    ]
    theme_preference = forms.ChoiceField(
        choices=THEME_CHOICES,
        widget=forms.Select(attrs={"class": "btn btn--secondary block w-full", "onchange": "submit()"}),
        label=False
    )
