const URL = "https://cw-quotes.herokuapp.com/api/quotes/random"

class Message {
  constructor(author, textMes){
    let tiempo = new Date()
    let ft = tiempo.getHours() + ':' + tiempo.getMinutes()
    this.author = author;
    this.text = textMes;
    this.time = ft;
  }
}

function getMessages () {
  $.get('/messages', data => {
    console.log(data)
    data.forEach(msg => sendMessage(msg));
  });
}

function postMessage (msg) {
  $.post({
    url: '/messages',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(msg)
  })
}

function reset() {
  var form = document.getElementsByName('sendmessage')[0];
  form.reset();
  return false;
}


var count = 0;
var fire = 0;


$(document).ready(function(){
  getMessages()
  $("#submitmsg").click(function sendMessage(e){
    e.preventDefault()
    var usermsg = $('#usermsg').val();
    let textMes = new Message('Andres y/o Xavi', usermsg);
    postMessage(textMes)
    let append = $(`<div class="msgcont">
                      <div class="user">- ${textMes.text}<br/><br/>${textMes.author} -- ⌛ ${textMes.time}</div>
                    </div>`)
    $(".thread").append(append)
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
    if (fire == 85 ){
      $(".spark" ).css("display", "block");
      setTimeout(function() {
        $(".spark" ).remove();
      }, 800);
    }
    if (fire == 88 ){
      $(".spark" ).css("display", "block");
      setTimeout(function() {
        $(".spark" ).remove();
      }, 800);
    }
    if (fire == 90){
      $(".robogif" ).toggleClass('box-rotate');
    }
    if (fire == 90 ){
      $(".spark" ).css("display", "block");
      setTimeout(function() {
        $(".spark" ).remove();
      }, 800);
    }
    if (fire == 91 ){
      $(".spark1" ).css("display", "block");
      setTimeout(function() {
        $(".spark1" ).remove();
      }, 800);
    }
    if (fire == 92 ){
      $(".spark1" ).css("display", "block");
      setTimeout(function() {
        $(".spark1" ).remove();
      }, 800);
    }
    if (fire == 95 ){
      $(".spark2" ).css("display", "block");
      setTimeout(function() {
        $(".spark2" ).remove();
      }, 800);
    }
    if (fire == 96 ){
      $(".spark2" ).css("display", "block");
      setTimeout(function() {
        $(".spark2" ).remove();
      }, 800);
    }
    if (fire == 98){
      $(".bigfire" ).css("display", "block");
    }
    if (fire == 100){
      $(".bigfire1" ).css("display", "block");
    }
    if (fire == 101){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 5%, rgba(255,255,255,1) 10%)");
    }
    if (fire == 102){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 10%, rgba(255,255,255,1) 20%)");
    }
    if (fire == 103){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 12%, rgba(255,255,255,1) 30%)");
    }
    if (fire == 104){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 15%, rgba(255,255,255,1) 50%)");
    }
    if (fire == 105){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 20%, rgba(255,255,255,1) 70%)");
    }
    if (fire == 106){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 24%, rgba(255,255,255,1) 85%)");
    }
    if (fire == 107){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 27%, rgba(255,255,255,1) 100%)");
    }
    // background: rgb(255,1,1);
    // background: linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 27%, rgba(255,255,255,1) 100%);
    let botMes = new Message(data.result.author, data.result.text);
    postMessage(botMes);
    let appendbot = $(
      `<div class="msgcont">
        <div class="robot">- ${botMes.text}<br/><br/>${botMes.author} -- ⌛ ${botMes.time}</div>
      </div>`)
    $(".thread").append(appendbot)
    // appendbot.show('slow')
    $(".thread").scrollTop(999999);
    $("#count").html(count);
  }})};

  $('#clear').click(function() {
    location.reload();
  });
});
