function setup(){
    video=createCapture(VIDEO)
    video.size(550,490)
    canvas=createCanvas(550,490)
    canvas.position(570,100)
    pose=ml5.poseNet(video,modelloaded)
    pose.on("pose",got_results)
}
function modelloaded(){
    console.log("pose net loaded successfuly")
}
function got_results(results){
if(results.length>0){
    console.log(results)
}
}