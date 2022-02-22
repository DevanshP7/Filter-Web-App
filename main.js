nose_x=0;
nose_y=0;
picture='hat';
function preload(){
    image_png=loadImage('https://i.postimg.cc/cHz86ywX/mustache.png');
    image_hat=loadImage('https://i.postimg.cc/0NWL6cQV/Male-Transparent-Hat-PNG-Clipart.png');
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(650,350);
    video=createCapture(VIDEO);
    video.size(640,480);
    video.hide();
    posenet=ml5.poseNet(video,posenet_loaded);
    posenet.on('pose',got_pose);
}
function draw(){
    image(video,0,0,640,480);
    if(picture=='mustache'){image(image_png,nose_x-50,nose_y+5,100,30);}
    if(picture=='hat'){image(image_hat,nose_x-150,nose_y-200,300,150);}
    if(picture=='both'){
        image(image_png,nose_x-50,nose_y+5,100,30);
        image(image_hat,nose_x-150,nose_y-200,300,150);
    }
    
}
function take_snapshot(){
    save('Devansh.png');
}
function posenet_loaded(){
    console.log('Posenet Loaded!');
}
function got_pose(results){
    if(results.length>0){
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}
function mustache_only(){picture='mustache';}
function hat_only(){picture='hat';}
function both(){picture='both';}
