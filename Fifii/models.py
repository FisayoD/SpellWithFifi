from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Adult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    email = models.CharField(max_length=30)

    def __str__(self):
        return str(self.user)


class Child(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    adult = models.ForeignKey(Adult, on_delete=models.CASCADE, null=False)
    wordlimit = models.IntegerField(default=5)

    def __str__(self):
        return str(self.user)


class Reports(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, null=False)
    accuracyRate = models.CharField(max_length=200)
    difficultWords = models.CharField(max_length=200)
    wordCount = models.CharField(max_length=200)
    time = models.CharField(max_length=200)

    def __str__(self):
        return 'accuracy score = ' + str(self.accuracyRate) + 'Difficult words = ' + str(self.difficultWords)


class SetQuiz(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE, null=False)
    word = models.CharField(max_length=30)

    def __str__(self):
        return str(self.word)
