# Generated by Django 4.2.3 on 2023-08-25 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_job_description_alter_request_message_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='request',
            name='status',
            field=models.CharField(choices=[('در انتظار بررسی', 'در انتظار بررسی'), ('بررسی شده', 'بررسی شده'), ('رد شده', 'رد شده'), ('رد شده', 'رد شده')], default='درانتظار بررسی', max_length=15),
        ),
    ]