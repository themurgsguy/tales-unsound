# Generated by Django 3.0.3 on 2020-03-24 23:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('outback', '0003_remove_place_exits'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exit',
            name='origin',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='exits', to='outback.Place'),
        ),
    ]
