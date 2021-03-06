# Generated by Django 3.2.5 on 2021-07-06 10:35

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Adult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=30)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Child',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('adult', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Fifii.adult')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SetQuiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=30)),
                ('duration', models.TimeField()),
                ('child', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Fifii.child')),
            ],
        ),
        migrations.CreateModel(
            name='Report',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
                ('timeTaken', models.TimeField()),
                ('accuracyRate', models.CharField(max_length=30)),
                ('averageScore', models.IntegerField()),
                ('difficultWords', models.CharField(max_length=30)),
                ('child', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Fifii.child')),
            ],
        ),
    ]
