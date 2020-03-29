# Tales Unsound

Tales Unsound is this idea I had for an experimental interactive meta-fiction, that would play much like a classic text adventure game would, but with sound and a little more ambience thrown in the mix.

### Theme

The story I had envisioned for it started with the image of this 8 year old kid, departing from his tiny little planet, in a spaceship he made out of used coke cans, on some kind of journey to visit the stars.

A compelling start to a kids book maybe, but what if the space he had flown into was nothing like the space you'd find in a kids book. What if it was more like actual space, and it was cold, and harsh, and he got swung around a lot in his tiny little spaceship.

What if, most of the time he was out there he felt lost, and scared, and didn't have the slightest clue of what to do or where to go.

And it was only on the rarest of occasions, when he'd stumble upon other travellers just like him, and spend time roasting marshmallows together over a campfire in the deep dark woods, that he'd once again remember. That hint of nostalgia, that little bit of courage, and the thirst for more adventure.

In a way, this would be interesting to explore as a literal story, but doesn't it work great as a metaphor for life instead? Aren't we all deep down just 8 year old kids lost in space? Staggering around in spaceships made of tinfoil, not really knowing where we're supposed to go, or what we're meant to do?

That's the kind of story I'm trying to get at here. That's the punchline.


# Install Project

## 1. Install
Em primeiro lugar vai ser preciso instalar o `python3` e o `virtualenv`, uma ferrementa para
criar maquinhas virtuais de python. A gente corre os projectos em maquinha virtual
para garantir que actualizações do python não nos dão cabo do setup.

Então se ainda não o tiveres, no terminal podes correr:

```
% brew install python3
```

Depois de installar, ele deve vir com o package manager do python `pip3`. Tenta correr só `pip3` a ver se tá instalado. Se tiver, podes usa-lo para instalar o `virtualenv`. Então no terminal podes correr:

```
% pip3 install virtualenv
```
Quando isso tiver, já deves ter tudo. Já agora, se ainda não o fizeste, cria um clone da repo num sitio qualquer:

```
% git clone git@github.com:themurgsguy/tales-unsound.git
```

## 2. Setup
Agora temos que criar a tal maquina virtual. Podes cirar onde quizeres, mas depois para ser mais fácil, normalmente cria-se ao lado da pasta do projecto (neste caso o `tales_unsound`) mas nunca dentro da pasta. Então podemos correr por exemplo:

```
% cd <pasta-do-projecto>
% virtualenv -p python3 ../tales_unsound_vv
```
Isso cria a instancia ao lado da pasta do projecto.

Agora sim, podemos abrir o projecto no editor. Se ainda tiveres o terminal na pasta do projecto:

```
% subl .
```

## 3. Activar a Maquina Virtual
Agora vem a parte divertida. Para meter o projecto a correr, primeiro temos que activar a maquina virtual. Então, no terminal, muda para a pasta do projecto e corre:

```
% cd <pasta-do-projecto>
% source ../tales_unsound_vv/bin/activate
```
Se tudo correr bem, devias ver um prefixo antes do nome do user no prompt, do gênero:

```
(tales_unsound_vv) ... %
```
Tambem podes ver a versão do python, que agora devia ser o 3 por defeito:

```
(tales_unsound_vv) ... % python --version

Python 3.7.2
```

## 4. Instalar Dependências
Agora que temos o setup feito, falta instalar o `django` e as tretas todas do python na nova maquina. **MAS!!!** agora que o setup tá feito, isso tudo é feito só com um commando:

```
(tales_unsound_vv) ... % pip install -r requirements.txt
```
O que tamos a fazer é basicamente dizer ao `pip` para installar a tralha que tiver listado no ficheito `requirements.txt`. Depois de disto tá feito.

## 5. Por a Correr
Agora sim, podemos ver o projecto a dar. No terminal vamos activar o servidor e correr:

```
(tales_unsound_vv) ... % python manage.py runserver
```

Se a consola mandar vir com qualquer coisa sobre `migrations` é porque ainda não tens uma instancia da base de dados no teu sistema. Para isso basta fazer `^C` para parrar o servidor e correr:

```
(tales_unsound_vv) ... % python manage.py migrate
```
Depois podes por o servidor outravez a correr e FINALMENTE... aceder o site no bowser.

Basta ir ao link:
```
localhost:8000/
```
Se tudo correr com deve ser, deves ver uma landing page todo pipi do django.
