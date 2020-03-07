if (document.querySelector('.outback')) {

  $(document).ready(function () {
    // const token = $('input[name="csrfmiddlewaretoken"]').val();
    moveToPlace(1);

    $('.terminal').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // handlePrompt(token);
        handlePrompt();
        $(this)[0].reset();
    });
  });

  function handlePrompt () {
    const command = $('.prompt').val().toLowerCase();

    logResponse(command, 'cmd-log');

    if(/move/g.test(command)) {
      const tokens = command.split(' ');
      console.log(tokens)
      moveToPlace(tokens[1])
      // move(token, current_space, new_space);
      return;
    }
    logResponse("I don't quite get what your saying.", 'resp-log');
  }

  async function moveToPlace (placeId) {
    console.log('placeId: ' + placeId);
    console.log(window.location);

    try {
      const response = await $.ajax({
        url: `${window.location}place/${placeId}`,
        type: 'get'
      });
      updateSpace(response);
    } catch (error) {
      console.log(error);
    }
  }

  // async function move (token, from, to) {
  //   const request = {
  //     'csrfmiddlewaretoken': token,
  //     'from': from,
  //     'to': to
  //   }
  //   try {
  //     const response = await $.ajax({
  //       url: window.location,
  //       type: 'post',
  //       data: request,
  //       dataType: 'json'
  //     });
  //     updateSpace(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  function updateSpace (response) {
    $('.name').html(response.name);
    logResponse(response.description, 'description-log');
    logResponse(response.exits, 'exit-log');
  }

  function logResponse (response, style) {
    let entry = $('<p></p>');
    entry.append(response);
    entry.addClass(style);

    $('.backlog').append(entry);
  }
}
