function preload(){}
function setup(){
canvas=createCanvas(400,400);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color ="";
}
function draw(){
    image(video,0,0,400,400);
tint(tint_color);
}
function take_snapshot(){
    save('student.png');
}
function filter_tint(){
    tint_color = document.getElementById("input").value;
}