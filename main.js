function preload(){

}
function setup(){
    canvas= createCanvas(600, 400);
    canvas.center()
    video= createCapture(VIDEO);
    video.hide();
    video.center()
}
function draw(){
    image(video, 00, 00, 600, 400);
    fill(22, 217, 74);
    rect(0, 0, 7, 4000);
    rect(0, 0, 6000, 7);
    rect(593, 0, 7, 6000);
    rect(0, 393, 4000, 7);
    fill(242, 19, 23);
    circle(00, 00, 60);
    circle(00, 400, 60);
    circle(600, 00, 60);
    circle(600, 400, 60);
}
function takesnapshot(){
    save('Image.png');
}