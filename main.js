function preload(){}
function setup(){
    canvas=createCanvas(640,480);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    posenet=ml5.poseNet(video,posenet_loaded);
    posenet.on('pose',got_pose);
}
function draw(){
    image(video,0,0,640,480);
}
function take_snapshot(){
    save('Devansh.png');
}
function posenet_loaded(){
    console.log('Posenet Loaded!');
}
function got_pose(results){
    if(results.length>0){
        console.log(results);
        console.log('X position of nose = '+results[0].pose.nose.x);
        console.log('Y position of nose = '+results[0].pose.nose.y);
    }
}