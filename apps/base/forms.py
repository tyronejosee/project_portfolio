"""Forms for Base App."""

from django import forms
from apps.base.models import Contact


class ContactForm(forms.ModelForm):
    """Base form for contact."""

    class Meta:
        """Meta definition for ContactForm."""
        model = Contact
        fields = ['name', 'email', 'phone_number', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form__input form__input--text'}),
            'email': forms.EmailInput(attrs={'class': 'form__input form__input--text'}),
            'phone_number': forms.TextInput(attrs={'class': 'form__input form__input--text'}),
            'message': forms.Textarea(attrs={'class': 'form__input form__input--textarea'}),
        }
