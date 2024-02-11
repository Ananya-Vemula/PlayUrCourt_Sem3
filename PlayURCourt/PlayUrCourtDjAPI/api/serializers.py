from rest_framework import serializers
from base.models import StudentInfo,Booking,GameEquipment,Games,Location,LocationOfGames,SlotBooking,SlotsForGames

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentInfo
        fields = '__all__'

    def check_student_exists(self,st_id, st_pwd):
        # Check if a student with the given stud_ID exists
        try:
            #print(str(st_id) + '.' + st_pwd)
            student = StudentInfo.objects.get(stud_id=st_id,stud_password=st_pwd)
            #print(str(student))
            return True
        except StudentInfo.DoesNotExist:
            return False


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        #fields = ("booked_time" ,"stud" , "loc_games")

class GameEquipmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameEquipment
        fields = '__all__'
        #fields = ("game_equipment")

class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = '__all__'
        #fields = ("game_id","game_type")

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'
        #fields = ("loc_id")

class LocationOfGamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocationOfGames
        fields = '__all__'
        #fields = ()

class SlotBookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlotBooking
        fields = '__all__'
        #fields = ()

class SlotsForGamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SlotsForGames
        fields = '__all__'
        #fields = ("slot_start_time","slot_end_time")



