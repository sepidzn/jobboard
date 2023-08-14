# Generated by Django 4.2.3 on 2023-08-04 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_verification_company'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='job',
            name='skills_required',
        ),
        migrations.AddField(
            model_name='job',
            name='skills_required',
            field=models.ManyToManyField(to='base.skills'),
        ),
    ]