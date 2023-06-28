function setup()
{
canvas = createCanvas (600, 400);
canvas.position (650, 100);
video = createCapture (VIDEO);
video.size (600, 400);
video.position (3, 100);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded()
{
    console.log('Ready!');
}

function draw()
{

}
