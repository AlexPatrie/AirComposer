from django.db import models

class ComposedSong(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=500)
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title 

####WE LEFT OFF AT STEP 17!

# Create your models here.
