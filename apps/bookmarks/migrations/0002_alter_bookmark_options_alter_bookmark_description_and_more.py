# Generated by Django 5.0 on 2024-01-04 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bookmarks', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='bookmark',
            options={'verbose_name': 'Bookmark', 'verbose_name_plural': 'Bookmarks'},
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='description',
            field=models.TextField(blank=True, verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='image',
            field=models.ImageField(upload_to='bookmarks/', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='name',
            field=models.CharField(max_length=100, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='status',
            field=models.BooleanField(default=True, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='website',
            field=models.URLField(verbose_name='Website'),
        ),
    ]