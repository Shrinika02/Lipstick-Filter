nosex= 0
nosey= 0

function preload(){
clown_nose=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,300,300)
    fill(255,0,0)
    stroke(255,0,0)
    image(clown_nose,nosex-15,nosey+10,30,30)
}

function take_snapshot(){
    save("picture.png")
}

function modelLoaded(){
    console.log("model is loaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nose x = "+results[0].pose.nose.x)
        console.log("nose y = "+results[0].pose.nose.y)
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;

    }
}

