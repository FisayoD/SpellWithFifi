# Generated by Django 3.2.5 on 2021-07-07 15:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Fifii', '0007_remove_setquiz_limit'),
    ]

    operations = [
        migrations.AddField(
            model_name='child',
            name='wordlimit',
            field=models.IntegerField(default=5),
        ),
    ]