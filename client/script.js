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
    if (fire == 31){
      $(".title1" ).toggleClass("title1-tilt");
    }
    if (fire == 35){
      $(".title2" ).toggleClass("title2-tilt");
    }
    if (fire == 36){
      $(".tear" ).css("display", "block");
    }
    if (fire == 40){
      $(".smoke1" ).css("display", "block");
      $(".fire3" ).css("display", "block");
    }
    if (fire == 45){
      $(".fire4" ).css("display", "block");
      // $(".robogif" ).toggleClass('box-rotate360');
    }
    if (fire == 50){
      $(".megatronimg").attr("src","images/glitchscreen.gif");
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
    if (fire == 90){
      $(".robogif" ).toggleClass('box-rotate');
      $(".tear" ).css("display", "none");
    }
    if (fire == 90 ){
      $(".spark" ).css("display", "block");
      setTimeout(function() {
        $(".spark" ).remove();
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
      $(".megatronimg").attr("src","images/bobfire2.webp");
    }
    if (fire == 105){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 20%, rgba(255,255,255,1) 70%)");
    }
    if (fire == 106){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 24%, rgba(255,255,255,1) 85%)");
    }
    // if (fire > 106){
    //   $(".user" ).css("background", "rgb(255, 247, 0)");
    // }
    // if (fire > 106){
    //   $(".user" ).css("color", "black");
    // }
    // if (fire > 106){
    //   $(".robot" ).css("background", "rgb(255, 102, 0)");
    // }
    if (fire == 107){
      $(".ui" ).css("background", "linear-gradient(360deg, rgba(255,1,1,1) 0%, rgba(255,190,0,1) 27%, rgba(255,255,255,1) 100%)");
    }
    if (fire == 108){
      $(".inputfield" ).css("background", "linear-gradient(0deg, rgba(255,255,201,1) 0%, rgba(253,196,29,1) 50%, rgba(252,69,69,1) 100%)");
    }
    if (fire == 109){
      $(".inputfield" ).css("background", "linear-gradient(0deg, rgba(255,255,201,1) 0%, rgba(253,196,29,1) 45%, rgba(252,69,69,1) 90%)");
    }
    if (fire == 110){
      $(".inputfield" ).css("background", "linear-gradient(0deg, rgba(255,255,201,1) 0%, rgba(253,196,29,1) 40%, rgba(252,69,69,1) 80%)");
    }
    if (fire == 111){
      $(".inputfield" ).css("background", "linear-gradient(0deg, rgba(255,255,201,1) 0%, rgba(253,196,29,1) 35%, rgba(252,69,69,1) 75%)");
    }
    if (fire == 112){
      $(".inputfield" ).css("background", "linear-gradient(0deg, rgba(255,255,201,1) 0%, rgba(253,196,29,1) 30%, rgba(252,69,69,1) 70%)");
    }
    let botMes = new Message(data.result.author, data.result.text, data.result.author);
    postMessage(botMes);
    let appendbot = $(
      `<div class="msgcont">
        <div class="robot">- ${botMes.text}<br/><br/>${botMes.author} -- ⌛ ${botMes.time}</div>
      </div>`)
    $(".thread").append(appendbot)
    $(".thread").scrollTop(999999);
    $("#count").html(count);
  }})};

  $('#clear').click(function() {
    location.reload();
  });
});
