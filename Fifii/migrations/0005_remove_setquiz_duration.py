# Generated by Django 3.2.5 on 2021-07-07 15:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Fifii', '0004_alter_report_accuracyrate'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='setquiz',
            name='duration',
        ),
    ]