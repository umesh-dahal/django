from django.shortcuts import render, HttpResponse
from django.core.mail import send_mail
from django.http import JsonResponse
# Create your views here.

def index(request):
    return render(request, 'home.html')




