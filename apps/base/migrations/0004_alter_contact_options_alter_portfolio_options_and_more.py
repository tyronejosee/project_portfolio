# Generated by Django 5.0 on 2024-01-04 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_project_title_alter_skill_name'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='contact',
            options={'verbose_name': 'Contact', 'verbose_name_plural': 'Contacts'},
        ),
        migrations.AlterModelOptions(
            name='portfolio',
            options={'verbose_name': 'Portfolio', 'verbose_name_plural': 'Portfolio'},
        ),
        migrations.AlterModelOptions(
            name='project',
            options={'verbose_name': 'Project', 'verbose_name_plural': 'Projects'},
        ),
        migrations.AlterModelOptions(
            name='skill',
            options={'verbose_name': 'Skill', 'verbose_name_plural': 'Skills'},
        ),
        migrations.AlterModelOptions(
            name='workexperience',
            options={'verbose_name': 'WorkExperience', 'verbose_name_plural': 'WorkExperiences'},
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(max_length=254, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='message',
            field=models.TextField(verbose_name='Message'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='contact',
            name='phone_number',
            field=models.CharField(blank=True, max_length=20, null=True, verbose_name='Phone Number'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='about_me',
            field=models.TextField(verbose_name='About Me'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='bio',
            field=models.TextField(verbose_name='Bio'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='full_name',
            field=models.CharField(max_length=100, verbose_name='Full Name'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='github',
            field=models.URLField(blank=True, verbose_name='GitHub'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='gmail',
            field=models.URLField(blank=True, verbose_name='Gmail'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='image_file',
            field=models.ImageField(upload_to='portfolio/', verbose_name='Image File'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='linkedin',
            field=models.URLField(blank=True, verbose_name='LinkedIn'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='resume_file',
            field=models.FileField(blank=True, null=True, upload_to='portfolio/', verbose_name='Resume File'),
        ),
        migrations.AlterField(
            model_name='portfolio',
            name='specialization',
            field=models.CharField(max_length=255, verbose_name='Specialization'),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.FileField(upload_to='project/', verbose_name='Image'),
        ),
        migrations.AlterField(
            model_name='project',
            name='repository',
            field=models.URLField(verbose_name='Repository'),
        ),
        migrations.AlterField(
            model_name='project',
            name='status',
            field=models.BooleanField(default=True, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(max_length=100, unique=True, verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='project',
            name='website',
            field=models.URLField(blank=True, null=True, verbose_name='Website'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='icon',
            field=models.TextField(verbose_name='Icon'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='name',
            field=models.CharField(max_length=50, unique=True, verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='skill',
            name='status',
            field=models.BooleanField(default=True, verbose_name='Status'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='company',
            field=models.CharField(max_length=100, verbose_name='Company'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='description',
            field=models.TextField(verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='end_date',
            field=models.DateField(blank=True, null=True, verbose_name='End Date'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='job_title',
            field=models.CharField(max_length=100, verbose_name='Job Title'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='skill_id',
            field=models.ManyToManyField(related_name='skills', to='base.skill', verbose_name='Skills'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='start_date',
            field=models.DateField(verbose_name='Start Date'),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='status',
            field=models.BooleanField(default=True, verbose_name='Status'),
        ),
    ]
