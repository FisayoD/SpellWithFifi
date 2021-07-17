from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from django.contrib.auth import logout
from datetime import datetime
from .models import Adult, Child, Reports, SetQuiz
from django.contrib.auth.decorators import login_required
import json
from json import dumps
# Create your views here.

# date = datetime.now()
# rep = report(...., date=datetime.now())
# rep.save()


def home(request):
    return render(request, 'Fifii/home.html')


def login(request):
    if request.method == 'POST':
        user = auth.authenticate(
            username=request.POST['username'], password=request.POST['password'])
        if user is not None and Adult.objects.filter(user=user):
            auth.login(request, user)
            return redirect('adult')
        elif user is not None and Child.objects.filter(user=user):
            auth.login(request, user)
            return redirect('child')
        else:
            mg = 'username or password is incorrect'
            return render(request, 'Fifii/login.html', {'mg': mg})
    else:
        return render(request, 'Fifii/login.html')


def logoutuser(request):
    logout(request)
    return redirect('home')


def signUp(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        user = User.objects.create_user(
            username=username, email=email, password=password)
        user.save()
        person = User.objects.get(username=username)
        adult = Adult(user=person, email=email)
        adult.save()
        mg = 'Sign up successful!'
        return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
    else:
        return render(request, 'Fifii/signUp.html')


def signUpSuccess(request):
    return render(request, 'Fifii/signUpSuccess.html')


def level1(request):
    return render(request, 'Fifii/level1.html')


def level2(request):
    return render(request, 'Fifii/level2.html')


def level3(request):
    return render(request, 'Fifii/level3.html')


def adult(request):
    try:
        user = Adult.objects.get(user=request.user)
        parent = user
        children = Child.objects.all()
        mychild = children.get(adult=parent)
        report = Reports.objects.all()
        childreport = report.get(child=mychild)
        print(childreport)
        context = {
            'mychild': mychild,
            'childreport': childreport
        }
        return render(request, 'Fifii/adult.html')
    except Adult.DoesNotExist:
        mg = "You are not allowed to view this page!"
        return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})


def chooseLevel(request):
    return render(request, 'Fifii/chooseLevel.html')


@login_required(login_url='login')
def child(request):
    try:
        child_user = Child.objects.get(user=request.user)
        print(child_user)
        quiz_words = SetQuiz.objects.filter(child=child_user)
        wordlimit = int(child_user.wordlimit)
        wordList = []
        for items in quiz_words:
            wordList.append(str(items))

        context = {
            'newuser': child_user,
            'word': quiz_words,
            'data': wordList,
            'wordlimit': wordlimit,
        }
        return render(request, 'Fifii/child.html', context)
    except Child.DoesNotExist:
        mg = "You are not allowed to view this page!"
        return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})


def save(request):
    if request.method == 'POST':
        myuser = request.user
        mychild = Child.objects.get(id=6)
        #temp = request.POST.get('test')
        accuracy = request.POST.get('accuracy')
        WCPM2DP = request.POST.get('WCPM2DP')
        decimalseconds2DP = request.POST.get('decimalseconds2DP')
        difficult_words = request.POST.get('difficultWords')

        myreports = Reports.objects.all()
        myreports = Reports(child=mychild, accuracyRate=accuracy, difficultWords=difficult_words,
                            wordCount=WCPM2DP, time=decimalseconds2DP)
        myreports.save()

        print(myreports)
        return JsonResponse({'status': 'success'})
    else:
        print(request)

    return redirect(request, 'child')


def createChild(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        adult = request.POST['adult_username']
        user = User.objects.create_user(username=username, password=password)
        user.save()
        person = User.objects.get(username=username)
        parent = User.objects.get(username=adult)
        pa = Adult.objects.get(user=parent)
        kid = Child(user=person, adult=pa)
        kid.save()
        mg = 'Child account created!'
        return render(request, 'Fifii/adult.html', {'mg': mg})
    else:
        return redirect('adult')


def search(request):
    if request.method == 'POST':
        child = request.POST['child']
        if User.objects.filter(username=child):
            kid = User.objects.get(username=child)
            if kid is not None:
                ch = Child.objects.get(user=kid)
                reports = Reports.objects.filter(child=ch)
                return render(request, 'Fifii/adult.html', {'reports': reports})
            else:
                mg = 'Child doesnt exist!'
                return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
        else:
            mg = 'Child doesnt exist!'
            return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
    else:
        return render(request, 'Fifii/adult.html')


def deleteChild(request):
    if request.method == 'POST':
        child = request.POST['deletechild']
        User.objects.filter(username=child).delete()
        mg = 'child deleted'
        return render(request, 'Fifii/adult.html', {'mg': mg})
    else:
        return render(request, 'Fifii/adult.html')


def addWord(request):
    if request.method == 'POST':
        try:
            child = User.objects.get(username=request.POST['childname'])
            try:
                par = User.objects.get(username=request.user.get_username())
                parent = Adult.objects.get(user=par)
                ch = Child.objects.get(user=child, adult=parent)
                word = request.POST['aword']
                addedword = SetQuiz(child=ch, word=word)
                addedword.save()
            except ch.DoesNotExist:
                mg = "child does not exist!"
                return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
        except User.DoesNotExist:
            mg = "child does not exist!"
            return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
    else:
        return render(request, 'Fifii/adult.html')


def setlimit(request):
    if request.method == 'POST':
        try:
            child = User.objects.get(username=request.POST['childname2'])
            try:
                limit = request.POST['limit']
                Child.objects.filter(user=child).update(wordlimit=limit)
                mg = 'word limit recorded!'
                return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
            except child.DoesNotExist:
                mg = 'child does not exist!'
                return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
        except User.DoesNotExist:
            mg = "child does not exist!"
            return render(request, 'Fifii/signUpSuccess.html', {'mg': mg})
    else:
        return render(request, 'Fifii/adult.html')


def deleteWord(request):
    if request.method == 'POST':
        SetQuiz.objects.filter(word=request.POST['dword']).delete()
        mg = 'word deleted'
        return render(request, 'Fifii/adult.html', {'mg': mg})
    else:
        return render(request, 'Fifii/adult.html')


def quiz(request):
    child = User.objects.get(username=request.user.username)
    limit = child.wordlimit
    words = SetQuiz.objects.filter(child=child)
    wordlist = words.order_by('-id')[:limit]


def generate_words(request):
    child = SetQuiz.objects.filter(child=request.user)
    practice_words = {}
    for c in child:
        practice_words[child] = c.words

    return JsonResponse(practice_words, safe=False)
