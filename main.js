function setup()
{
    canvas = createCanvas(550, 450);
    canvas.position(610, 150);
    video = createCapture(VIDEO);
    video.size(400, 300);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Posenet is initialized!");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
