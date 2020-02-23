from django.shortcuts import get_object_or_404, render

from .models import Space

def index(request):
    current_space = get_object_or_404(Space, pk=1)
    return render(request, 'outback/index.html', {'space': current_space})
