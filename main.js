var leftWristX = 0
var leftWristY = 0
var rightWristX = 0
var rightWristY = 0
var song1 = ""
var song2 = ""

function preload(){
    song1 = loadSound("./music/music.mp3")
    song2 = loadSound("./music/music2.mp3")
}

function setup(){
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPose)
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function gotPose(results){
    if(results.length > 0){
        console.log(results)
        leftWristX = results[0]
    }
}

function draw(){
    background("lightpink")
    image(video,0,0,350,350)
}

