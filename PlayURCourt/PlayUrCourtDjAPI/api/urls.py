from django.urls import path
from . import views
from django.urls import path, include

urlpatterns = [
    #StudentInfo
    path('StudentInfo/', views.getStudentInfo),
    path('addStudent/', views.addStudent),
    #Games
    path('GamesInfo/', views.getGamesInfo),
    path('addGames/', views.addGames),
    #GameEquipment
    path('GameEquipmentInfo/', views.getGameEquipmentInfo),
    path('addGameEquipment/', views.addGameEquipment),
    #Location
    path('LocationInfo/', views.getLocationInfo),
    path('addLocation/', views.addLocation),
    #LocationOfGames
    
    #----------------------
    path('LocationOfGamesInfo/', views.getLocationOfGamesInfo),
    #------------------------
    path('addLocationOfGames/', views.addLocationOfGames),

    #SlotsForGames
    path('SlotsForGamesInfo/', views.getSlotsForGamesInfo),
    path('addSlotsForGames/', views.addSlotsForGames),
    #Booking
    path('BookingInfo/', views.getBookingInfo),
    path('addBooking/', views.addBooking),
    #SlotBooking
    #--------------------------------------
    path('SlotBookingInfo/', views.getSlotBookingInfo),
    #--------------------------------------
    path('addSlotBooking/', views.addSlotBooking),

    path('StudentLogin/', views.StudentLogin)
    ####
    #path('', include('frontend.urls'))

    
]




