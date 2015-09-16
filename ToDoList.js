$ (function() {

  var $newItemForm = $('#newItemForm');
  var $textInput = $('input:text');

  $newItemForm.on('submit', function(e) {
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').after('<li>' + newText + '</li>');
    $textInput.val('');
  });

});
