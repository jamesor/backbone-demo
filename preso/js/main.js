function loadCode(filename, selector) {
  $.ajax({
    url: 'code/' + filename,
    dataType: 'text',
    success: function (data) {
      $('pre').empty();
      $(selector).html('<code>' + data + '</code>');
      prettyPrint();
    }
  });
}

$(document).ready(function () {
  $('a, button').on('click', function () {
    var filename = $(this).data('src')
      , selector = $(this).data('target');
    if (!filename || !selector) return;
    loadCode(filename, selector);
  });
});
