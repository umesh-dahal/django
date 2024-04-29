from django.urls import path
from home import views

urlpatterns = [
    path('', views.index, name='home'),
    path('market/', views.market, name='market'),
    path('resource', views.resource, name='resource')
]
