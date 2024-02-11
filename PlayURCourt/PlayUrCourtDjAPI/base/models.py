from django.db import models

# Create your models here.


class StudentInfo(models.Model):
    stud_id = models.IntegerField(db_column='stud_Id', primary_key=True)  # Field name made lowercase.
    stud_outlookmail = models.CharField(db_column='stud_outlookMail', unique=True, max_length=100)  # Field name made lowercase.
    stud_password = models.CharField(unique=True, max_length=15)
    stud_confirm_password = models.CharField(max_length=15)
    stud_residence = models.CharField(max_length=45)
    #created_at = models.DateTimeField()
    #updated_at = models.DateTimeField()
    stud_ghs = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'student_info'
        db_table_comment = 'When user signs in into the app, the info will be shown here'


class Games(models.Model):
    game_id = models.IntegerField(db_column='game_Id', primary_key=True)  # Field name made lowercase.
    game_players_min = models.IntegerField()
    game_players_max = models.IntegerField()
    game_time_max = models.FloatField()
    game_name = models.CharField(unique=True, max_length=45, blank=True, null=True)
    game_type = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'games'
        db_table_comment = 'This has all the possible games and its details'

class GameEquipment(models.Model):
    #supposed to be int ig
    game_equipment_id = models.CharField(db_column='game_equipment_Id', primary_key=True, max_length=45)  # Field name made lowercase.
    game_equipment = models.CharField(max_length=100, blank=True, null=True)
    game = models.ForeignKey('Games', models.DO_NOTHING, db_column='game_Id')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'game_equipment'
        db_table_comment = 'these have the equipment for the games'


class Location(models.Model):
    loc_id = models.IntegerField(primary_key=True)
    loc_opentime = models.DateTimeField()
    loc_closetime = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'location'
        db_table_comment = 'To identify where the games can be played(GHS,MUJ)'


class LocationOfGames(models.Model):
    game = models.ForeignKey(Games, models.DO_NOTHING, db_column='Game_ID')  # Field name made lowercase.
    location = models.ForeignKey(Location, models.DO_NOTHING, db_column='Location_ID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'location_of_games'
        db_table_comment = 'location for the games are here'

class SlotsForGames(models.Model):
    slot_id = models.AutoField(db_column='slot_Id', primary_key=True)  # Field name made lowercase.
    slot_start_time = models.DateTimeField()
    slot_end_time = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'slots_for_games'

class Booking(models.Model):
    booking_id = models.IntegerField(db_column='booking_Id', primary_key=True)  # Field name made lowercase.
    booked_time = models.DateTimeField()
    booking_status = models.CharField(max_length=1)
    stud = models.ForeignKey('StudentInfo', models.DO_NOTHING, db_column='stud_ID')  # Field name made lowercase.
    loc_games = models.ForeignKey('LocationOfGames', models.DO_NOTHING, db_column='loc_games_ID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'booking'

class SlotBooking(models.Model):
    slot = models.ForeignKey('SlotsForGames', models.DO_NOTHING, db_column='slot_ID')  # Field name made lowercase.
    booking = models.ForeignKey(Booking, models.DO_NOTHING, db_column='booking_ID')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'slot_booking'





