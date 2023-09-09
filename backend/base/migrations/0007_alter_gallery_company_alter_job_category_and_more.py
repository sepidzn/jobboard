# Generated by Django 4.2.3 on 2023-09-08 02:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_employee_linkdin_employee_manual_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gallery',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.company'),
        ),
        migrations.AlterField(
            model_name='job',
            name='category',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.category'),
        ),
        migrations.AlterField(
            model_name='payment',
            name='company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.company'),
        ),
        migrations.AlterField(
            model_name='review',
            name='Company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.company'),
        ),
        migrations.AlterField(
            model_name='verification',
            name='Company',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.company'),
        ),
    ]