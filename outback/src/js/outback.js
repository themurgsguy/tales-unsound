if (document.querySelector('.outback')) {

  $(document).ready(function () {
    const token = $('input[name="csrfmiddlewaretoken"]').val();

    $('.terminal').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        handlePrompt(token);
        $(this)[0].reset();
    });
  });

  function handlePrompt (token) {
    const command = $('.prompt').val().toLowerCase();

    logResponse(command, 'cmd-log');

    if(/move/g.test(command)) {
      const current_space = $('.place').html();
      const new_space = command.split('to')[1].trim();

      move(token, current_space, new_space);
      return;
    }
    logResponse("I don't quite get what your saying.", 'resp-log');
  }

  async function move (token, from, to) {
    const request = {
      'csrfmiddlewaretoken': token,
      'from': from,
      'to': to
    }
    try {
      const response = await $.ajax({
        url: window.location,
        type: 'post',
        data: request,
        dataType: 'json'
      });
      updateSpace(response);
    } catch (error) {
      console.log(error);
    }
  }

  function updateSpace (response) {
    $('.place').html(response.name);
    logResponse(response.description, 'resp-log');
  }

  function logResponse (response, style) {
    let entry = $('<p></p>');
    entry.append(response);
    entry.addClass(style);

    $('.backlog').append(entry);
  }
}
