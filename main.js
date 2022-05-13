x = 0;
y = 0;
screen_height = 0;
screen_width = 0;
speak_data = "";
draw_apple = "";
apple = "";
to_number = "";

function preload(){
  apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = number(content);
  if(Number.isInteger(to_number))

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has recognized a number: " + content; 
    if(content == "apple")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById('status').innerHTML = " Started drawing apple ";
        draw_apple = "set";
    }if(any){
      document.getElementById("status").innerHTML = "The speech has not recognized a number: "
    }
    }
    


function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;

 canvas = createCanvas(150,150);
 canvas.position(0,150)
}
draw_apple = "";
function draw() {
  if(draw_apple == "set")
  {
  
  for(var i = 1; i <= to_number; i++)
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
  document.getElementById("status").innerHTML = to_number + " Apples drawn";
  speak_data = to_number + "Apple drawn";
  speak();
  draw_apple="";
}
}
function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
