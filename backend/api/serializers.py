from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Item

# Serializer for User registration
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

# Serializer for Items
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ["id", "title", "description", "created_at", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}
