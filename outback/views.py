from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse
from django.views.generic import View

from .models import Place

class Outback(View):
    http_method_name = ['get', 'post']

    def get(self, request):
        current_place = get_object_or_404(Place, name='stairs')
        return render(request, 'outback/index.html', {'place': current_place})

    def post(self, request):
        current_place = request.POST['from']
        requested_place = request.POST['to']
        print('current_space: {}'.format(current_place))
        print('requested_space: {}'.format(requested_place))

        try:
            place = get_object_or_404(Place, name=requested_place)
            return JsonResponse({'name': place.name, 'description': place.description })
        except:
            return JsonResponse({'name': current_place, 'description': 'That space does not existe.'})

outback = Outback.as_view()
