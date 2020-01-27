from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf.urls import url
from .api.views import index_view, MessageViewSet
from time import sleep
from django.http import HttpResponse, JsonResponse

import os
import json

PROJECT_PATH = os.path.realpath(os.path.dirname(__file__))

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)

def get_articles(request):
    articles_api_file = os.path.join(PROJECT_PATH + '/api_data/', 'articles.json')
    with open(articles_api_file, "r") as f:
        articles = json.load(f)
    sleep(1.75)
    return JsonResponse(data=articles)


def get_instruments(request):
    instruments_api_file = os.path.join(PROJECT_PATH + '/api_data/', 'instruments.json')
    with open(instruments_api_file, "r") as f:
        instruments = json.load(f)
    sleep(1.75)
    return JsonResponse(data=instruments, safe=False)


urlpatterns = [

    # http://localhost:8000/
    path('', index_view, name='index'),

    # http://localhost:8000/api/<router-viewsets>
    path('api/', include(router.urls)),

    # http://localhost:8000/api/admin/
    path('api/admin/', admin.site.urls),

    # http://localhost:8000/api/articles/
    url(r'api/articles', get_articles),

    # http://localhost:8000/api/instruments/
    url(r'api/instruments', get_instruments),
]


