# Generated by Django 5.0 on 2024-01-18 16:05

import apps.base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_remove_contact_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portfolio',
            name='image_file',
            field=models.ImageField(upload_to='portfolio/', validators=[apps.base.models.validate_image_extension], verbose_name='Image File'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='resume_file',
            field=models.FileField(blank=True, null=True, upload_to='portfolio/', validators=[apps.base.models.validate_image_extension], verbose_name='Resume File'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FileField(upload_to='project/', validators=[apps.base.models.validate_image_extension], verbose_name='Image'),
        ),
    ]