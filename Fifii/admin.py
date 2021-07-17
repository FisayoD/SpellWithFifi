from django.contrib import admin
from .models import Adult, Child, Reports, SetQuiz

# Register your models here.


class AdultAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "email")  # show columns in database
    search_fields = ("user", )  # add search bar to database table


class ChildAdmin(admin.ModelAdmin):
    # show columns in database
    list_display = ("id", "user", "adult", "wordlimit")
    search_fields = ("user", )  # add search bar to database table
    list_filter = ("adult",)


class ReportsAdmin(admin.ModelAdmin):
    list_display = ("child", "accuracyRate", "difficultWords",
                    "wordCount", "time")  # show columns in database
    search_fields = ("child", )  # add search bar to database table


class SetQuizAdmin(admin.ModelAdmin):
    list_display = ("id", "child", "word")  # show columns in database
    search_fields = ("child", )  # add search bar to database table
    list_filter = ("child",)


admin.site.register(Adult, AdultAdmin)
admin.site.register(Child, ChildAdmin)
admin.site.register(Reports, ReportsAdmin)
admin.site.register(SetQuiz, SetQuizAdmin)
