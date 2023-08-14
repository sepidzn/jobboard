# Generated by Django 4.2.3 on 2023-08-05 13:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_employee_cv_alter_apply_status_alter_job_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='join_at',
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='company_name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='from_date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='to_date',
            field=models.DateField(),
        ),
    ]