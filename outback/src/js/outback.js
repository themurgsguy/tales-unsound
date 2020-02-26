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
    const expression = $('.prompt').val();

    logExpression(expression);
    logResponse('A placeholder message will have to suffice for now.');
  }

  function logExpression (expression) {
    let entry = $('<p></p>');
    entry.append(expression);
    entry.addClass('text-muted pt-3 mb-2');

    $('.feed').append(entry);
  }

  function logResponse (response) {
    let entry = $('<p></p>');
    entry.append(response);

    $('.feed').append(entry);
  }
}
