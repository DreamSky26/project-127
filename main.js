solojennie = "";
switchphoneskylie = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    solojennie = loadSound("JENNIE (BLACKPINK) - SOLO.mp3");
    switchphoneskylie = loadSound("Kylie Cantrall - Switch Phones.mp3");
}

function draw(){
    image(video,0,0,600,530);
}