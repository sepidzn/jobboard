# Generated by Django 4.2.3 on 2023-08-04 09:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_rename_country_state'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='join_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.city'),
        ),
    ]