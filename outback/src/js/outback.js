if (document.querySelector('.outback')) {

  $(document).ready(function () {
    console.log('outback.app - checkin');

    $('.console').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        handlePrompt();
        $(this)[0].reset();
    });
  });

  function handlePrompt () {
    const command = $('.prompt').val();

    logCommand(command);
    logResponse('A placeholder message will have to suffice for now.');
  }

  function logCommand (command) {
    let entry = $('<p></p>');
    entry.append(command);
    entry.addClass('cmd-log');

    $('.feed').append(entry);
  }

  function logResponse (response) {
    let entry = $('<p></p>');
    entry.append(response);
    entry.addClass('resp-log');

    $('.feed').append(entry);
  }
}
