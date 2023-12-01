from rest_framework import permissions


class IsLoggedInUser(permissions.BasePermission):

    # Used for Customer object owner
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        # if request.method in permissions.SAFE_METHODS:
        #     return True

        
        return obj.user == request.user
    

class IsCartOwner(permissions.BasePermission):

    # Used to check Cart owner
    def has_object_permission(self, request, view, obj):
        return obj.customer.user == request.user
    

class IsOrderOwner(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user.user == request.user

