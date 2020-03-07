from django.shortcuts import get_object_or_404, render
from django.forms import model_to_dict
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Model
from django.http import JsonResponse
from django.views.generic import View, TemplateView

from .models import Place


# REVIEW: Not sure if I'm gonna need this at this point.
#
# class ExtendedEncoder(DjangoJSONEncoder):
#     def default(self, o):
#         if isinstance(o, Model):
#             return model_to_dict(o)
#         return Super().default(o)


# class Outback(View):
#     http_method_name = ['get', 'post']
#
#     def get(self, request):
#         current_place = get_object_or_404(Place, name='stairs')
#         return render(request, 'outback/index.html', {'place': current_place})
#
#     def post(self, request):
#         try:
#             current_place = get_object_or_404(Place, name=request.POST['from'])
#             requested_place = current_place.exits.get(name=request.POST['to'])
#
#             response = {
#                 'name': requested_place.name,
#                 'description': requested_place.description,
#                 'exits': ' '.join([e.description for e in requested_place.exit_set.all()])
#             }
#             return JsonResponse(response)
#         except:
#             return JsonResponse({'name': current_place.name, 'description': 'That space does not existe.'})
#
# outback = Outback.as_view()


class OutbackView(TemplateView):
    template_name = 'outback/index.html'


class PlaceView(View):
    http_method_name = ['get']

    def get(self, request, place_id):

        try:
            place = get_object_or_404(Place, id=place_id)
            response = {
                'name': place.name,
                'description': place.description,
                'exits': ' '.join([e.description for e in place.exit_set.all()])
            }
            return JsonResponse(response)
        except:
            response = {
                'description': 'That space does not existe'
            }
            return JsonResponse(response)
