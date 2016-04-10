$( document ).ready(function() {
  var userInput = "";
  var prevInput;

  function isInt(value) {
    return !isNaN(value) &&
           parseInt(Number(value)) == value &&
           !isNaN(parseInt(value, 10));
  }

    $('.numberpad li').click(function(){
      userInput += $(this).html();
      $('.output').html(userInput);
      console.log(parseInt(userInput));
      if (userInput != "") {
        $('.operators').addClass('open');
      };
    });
    $('.operators li').click(function(){
      var selection = $(this).html();
      if(selection === 'c'){
        userInput = "";
        prevInput = undefined;
        $('.output').html('&nbsp;');
        $('.operators').removeClass('open');
      }
      if(isInt(prevInput)){
        console.log('do calculations!!!');
      }
      prevInput = parseInt(userInput);
      userInput = "";
    });


});
