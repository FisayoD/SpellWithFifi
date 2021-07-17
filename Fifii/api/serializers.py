from rest_framework import serializers
from Fifii.models import SetQuiz


class SetQuizSerializers(serializers.ModelSerializer):
    class Meta:
        model = SetQuiz
        fields = ['word']
