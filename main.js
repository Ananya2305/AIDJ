song = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;
scoreLeftWrist = 0;

function preload() {
    song = loadSound("music.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}
function modelLoaded() {
    console.log('poseNet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist=" + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX + "leftWristY=" + leftWristY);
        rightWristX = result[0].pose.rightWrist.x;
        rightWristY = result[0].pose.rightwrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);

    }
}
function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
    if (scoreLeftWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumberLeftWristY = Number(leftWristY);
        Remove_Decimals = floor(InNumberLeftWristY);
        volume = Remove_Decimals / 500;
        document.getElementById("volume").innerHTML = "volume=" + volume;
        song.setVolume(volume);


    }


}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);

}

