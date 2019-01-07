# Generated by Django 2.0.6 on 2018-11-13 13:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0011_auto_20181112_2140'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='memory',
            name='tags',
        ),
        migrations.AddField(
            model_name='memorytag',
            name='memory',
            field=models.ForeignKey(default=10, on_delete=django.db.models.deletion.CASCADE, to='post.Memory'),
            preserve_default=False,
        ),
    ]
