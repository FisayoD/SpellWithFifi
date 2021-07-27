from django.urls import path
from django.urls.conf import include
from . import views

# {% url 'login' %}

urlpatterns = [
    path('', views.home, name='home'),
    path('login/', views.login, name='login'),
    path('logout/', views.logoutuser, name='logout'),
    path('signUp/', views.signUp, name='signUp'),
    path('signUpSuccess/', views.signUpSuccess, name='signUpSuccess'),
    path('errorpage/', views.errorpage, name='errorpage'),
    path('accessdenied/', views.accessdenied, name='accessdenied'),
    path('level1/', views.level1, name='level1'),
    path('level2/', views.level2, name='level2'),
    path('level3/', views.level3, name='level3'),
    path('adult/', views.adult, name='adult'),
    path('chooseLevel/', views.chooseLevel, name='chooseLevel'),
    path('createChild/', views.createChild, name='createChild'),
    path('deleteChild/', views.deleteChild, name='deleteChild'),
    path('Addword/', views.addWord, name='addword'),
    path('Deleteword/', views.deleteWord, name='deleteword'),
    path('setlimit/', views.setlimit, name='setlimit'),
    path('search/', views.search, name='search'),
    path('child/', views.child, name='child'),
    path('child/save/', views.save, name='save')
]
