from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import StudentInfo,Booking,GameEquipment,Games,Location,LocationOfGames,SlotBooking,SlotsForGames
from .serializers import StudentSerializer, BookingSerializer,GameEquipmentSerializer,GamesSerializer,LocationSerializer,LocationOfGamesSerializer,SlotsForGamesSerializer,SlotBookingSerializer

#StudentInfo

@api_view(['GET'])
def getStudentInfo(request):
    items = StudentInfo.objects.all()
    serializer = StudentSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addStudent(request):
    serializer = StudentSerializer(data = request.data)
    st_id = request.data.get('stud_id')
    st_pwd= request.data.get('stud_password')
    st_cnf_pwd = request.data.get('stud_confirm_password')
    try:
        student = StudentInfo.objects.get(stud_id=st_id)
        return Response("Student with ID already registered, Sign In",status=status.HTTP_401_UNAUTHORIZED)
    except StudentInfo.DoesNotExist:
            if st_cnf_pwd != st_pwd:
                return Response("Password and confirm password not same",status=status.HTTP_401_UNAUTHORIZED)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            else:
                return Response("Invalid input",status=status.HTTP_401_UNAUTHORIZED)
      

@api_view(['POST'])
def StudentLogin(request):
    
    serializer = StudentSerializer(data = request.data)   
    st_id = request.data.get('stud_id')
    st_pwd= request.data.get('stud_password')
    
    if serializer.check_student_exists(st_id,st_pwd):
         item = StudentInfo.objects.get(stud_id=st_id)
         serializer = StudentSerializer(item)
         return Response(serializer.data)
    else:
        #print(serializer.errors)
        return Response("Invalid Credentials",status=status.HTTP_401_UNAUTHORIZED)
        
#Games

@api_view(['GET'])
def getGamesInfo(request):
    items = Games.objects.all()
    serializer = GamesSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addGames(request):
    serializer = GamesSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

#GameEquipment

@api_view(['GET'])
def getGameEquipmentInfo(request):
    items = GameEquipment.objects.all()
    serializer = GameEquipmentSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addGameEquipment(request):
    serializer = GameEquipmentSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 


#Location

@api_view(['GET'])
def getLocationInfo(request):
    items = Location.objects.all()
    serializer = LocationSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addLocation(request):
    serializer = LocationSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

#LocationOfGames

@api_view(['GET'])
def getLocationOfGamesInfo(request):
    items = LocationOfGames.objects.all()
    serializer = LocationOfGamesSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addLocationOfGames(request):
    serializer = LocationOfGamesSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

#SlotsForGames

@api_view(['GET'])
def getSlotsForGamesInfo(request):
    items = SlotsForGames.objects.all()
    serializer = SlotsForGamesSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addSlotsForGames(request):
    serializer = SlotsForGamesSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

#Booking

@api_view(['GET'])
def getBookingInfo(request):
    items = Booking.objects.all()
    serializer = BookingSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addBooking(request):
    serializer = BookingSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

#SlotBooking

@api_view(['GET'])
def getSlotBookingInfo(request):
    items = SlotBooking.objects.all()
    serializer = SlotBookingSerializer(items, many = True)
    return Response(serializer.data)

@api_view(['POST'])
def addSlotBooking(request):
    serializer = SlotBookingSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print(serializer.errors)

    return Response(serializer.data) 

