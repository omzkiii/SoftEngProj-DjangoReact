from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Instance must have an attribute named `user`.
        return obj.user == request.user
    

class IsCartOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.customer.user == request.user
    

# class IsBuyer(permissions.BasePermission):

#     def has_object_permission(self, request, view, obj):
#         return obj.order.user == request.user

