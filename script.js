const URL = "https://cw-quotes.herokuapp.com/api/quotes/random"

$(document).ready(function(){
class Message {
    constructor(author, textMes){
      let tiempo = new Date()
      let ft = tiempo.getHours() + ':' + tiempo.getMinutes()
      this.author = author;
      this.text = textMes;
      this.time = ft;
    }
  }
  var count = 0;
  var fire = 0;

  $("#submitmsg").click(function(event){
    event.preventDefault()
    var usermsg = $('#usermsg').val();
    let textMes = new Message('Andres y/o Xavi', usermsg);
    let append = $(`<div class="msgcont"><div class="user">- ${textMes.text}<br/><br/>${textMes.author} -- ⌛ ${textMes.time}</div><br/>`)
    $(".thread").append(append)
    // append.show('slow');
    // setTimeout(function() {
      getQuote()
    // },)
    reset();
  });

function getQuote(){
  $.ajax({url: URL, success: function(data){
    count++
    fire++
    if (fire == 10){
      $(".fire" ).css("display", "block");
    }
    if (fire == 20){
      $(".fire1" ).css("display", "block");
    }
    if (fire == 30){
      $(".smoke" ).css("display", "block");
      $(".fire2" ).css("display", "block");
    }
    if (fire == 40){
      $(".smoke1" ).css("display", "block");
      $(".fire3" ).css("display", "block");
    }
    if (fire == 50){
      $(".fire4" ).css("display", "block");
    }
    if (fire == 60){
      $(".fire5" ).css("display", "block");
    }
    if (fire == 70){
      $(".fire6" ).css("display", "block");
    }
    if (fire == 75){
      $(".smoke2" ).css("display", "block");
    }
    let botMes = new Message(data.result.author, data.result.text);
    let appendbot = $(`<div class="msgcont"><div class="robot">- ${botMes.text}<br/><br/>${botMes.author} -- ⌛ ${botMes.time}</div><br/><br/>`)
    $(".thread").append(appendbot)
    // appendbot.show('slow')
    $(".thread").scrollTop(999999);
    $("#count").html(count);
  }})};

  function reset() {
    var form = document.getElementsByName('sendmessage')[0];
    form.reset();
    return false;
  }

  $('#clear').click(function() {
    location.reload();
});
});
