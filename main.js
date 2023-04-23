function preload(){

}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function gotPoses(results){
    if(results.length > 0){
console.log(results);
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
console.log('PoseNet is initialized')
}

function draw(){

}

function take_snapshot(){
    save('myFilterImg.png');
}
