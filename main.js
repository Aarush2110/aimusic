harry_potter_theme_song = "";
peter_pan_song = "" ;
leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
song_peter_pan = "";
scoreLeftWrist = 0;
song_harry_potter_theme = "";
scorerightWrist = 0;


function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

  video = createCapture(600,530);
  video.hide()
   poseNet = ml5.posenet(modelLoaded , video);
   poseNet.on('pose', gotPoses)
}
function preload() {
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_theme_song = loadSound("music.mp3");
}
function draw(){
    image(video, 0, 0, 600,530);

    fill("#37ff00");
    stroke("#ff0000")

    song_peter_pan = peter_pan_song.isPlaying();
    console.log("song_peter_pan");

    if(scoreLeftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        harry_potter_theme_song.stop();
        if(song_peter_pan == false){
            peter_pan_song.play();
        }
        else{
            document.getElementById("song_id").innerHTML = "Song Name: Peter Pan Song ";

        }
    }
}
function modelLoaded(){
    console.log("Posenet is intialised");
}
function gotPoses(results) {
    if (results.length > 0){

         console.log(results);
         
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("leftWrist_score =" +scoreLeftWrist);
        scorerightWrist = results[0].pose.keypoints[9].score;
        console.log( "rightWrist_score = " +scorerightWrist);

        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX = "+ leftWristX + "leftWristY = "+ leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        console.log("rightWristX = "+ rightWristX + "rightWristY = "+ rightWristY);
    }
}