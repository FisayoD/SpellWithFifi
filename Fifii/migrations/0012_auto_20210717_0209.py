# Generated by Django 3.2.5 on 2021-07-17 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Fifii', '0011_alter_reports_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reports',
            name='accuracyRate',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='reports',
            name='time',
            field=models.CharField(max_length=200),
        ),
        migrations.AlterField(
            model_name='reports',
            name='wordCount',
            field=models.CharField(max_length=200),
        ),
    ]
