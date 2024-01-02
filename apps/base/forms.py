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
            'name': forms.TextInput(attrs={'class': 'bg-chartreuse-400'}),
            'email': forms.EmailInput(attrs={'class': 'bg-chartreuse-400'}),
            'phone_number': forms.TextInput(attrs={'class': 'bg-chartreuse-400'}),
            'message': forms.Textarea(attrs={'class': 'bg-chartreuse-400'}),
        }
