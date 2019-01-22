$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault();
    var string = $("input#sentence").val();
    var words = string.split(' ');
    var array = [];
    var i = 0;
    words.forEach(function(word) {
      if(word.length >= 3) {
        array[i] = word;
        i = i + 1;
      }else {
        alert("Sorry the word " +"'" + word + "'" + " Is not long enough to be added to the new array");
      }

    });
    array.reverse();
    var sentence = array.join();
    $("#returnValue").text(sentence);



  });




});
