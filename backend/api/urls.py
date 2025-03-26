from django.urls import path
from .views import CreateUserView, ItemListCreateView, ItemRetrieveUpdateDestroyView

urlpatterns = [
    path("user/register/", CreateUserView.as_view(), name="register"),
    path("items/", ItemListCreateView.as_view(), name="item-list-create"),
    path("items/<int:pk>/", ItemRetrieveUpdateDestroyView.as_view(), name="item-detail"),
]
