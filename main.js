function setup(){
    webcam = createCapture(VIDEO);
    webcam.size(500 , 520);

    canvas = createCanvas(500 , 550);
    canvas.position(500 , 150);

    PoseNet = ml5.poseNet(webcam , modelloaded);
    PoseNet.on('pose' , results);
}

function modelloaded(){
    console.log("PoseNet is Initialized!!");
}

function results(answer){
    if(answer.length > 0){
        console.log(answer);
    }
}