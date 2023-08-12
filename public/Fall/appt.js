/* goals and what doesnt work
 *get pose detection up and running✓
 *adjust aspect ratio and make the vidinp one to one×
 *make a machine learning model for fall detection ×
 *start classifying ×
 #+about+
*/

let vidinp;
let poseNet;
let pose;
let structure;
let neuralNet;
let Status = 'undefined';
function setup(){
  createCanvas(windowWidth,windowHeight);
  background(155);
  vidinp = createCapture(VIDEO);
  vidinp.hide()
  poseNet = new ml5.poseNet(vidinp,modelLoaded);
  poseNet.on('pose',receivePose)
 let opt = {
    task:'classification',
    inputs:34,
    output:3
  }
  nn = new ml5.neuralNetwork(opt);
  const modelDetails = {
    model: 'model2/model.json',
    metadata: 'model2/model_meta.json',
    weights: 'model2/model.weights.bin'
  }
  nn.load(modelDetails,customMod);
}
function customMod(){
  console.log("custom model loaded");
  classifyData();
}
function classifyData() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    nn.classify(inputs, resolveResult);
  } else {
    setTimeout(classifyData, 200);
  }
}


function resolveResult(err, res) {
  console.log(res[0]);
  let key;

  // I made a stupid mistake while naming data
  if (res[0].label == 'falling') {
    key = 'standing';
    // Play the fall sound for 1 second

  } else if (res[0].label == 'standing') {
    key = 'falling';
    playSound('beep-01a.mp3', 1000);
  } else {
    key = res[0].label;
  }

  //if (res[0].confidence > 0.85) {
  Status = key.toUpperCase() + " " + parseFloat(res[0].confidence);
  //}
}

function playSound(soundPath, duration) {
  // Create an audio element
  const audio = new Audio(soundPath);

  // Play the audio
  audio.play();

  // Stop the audio after the specified duration
  setTimeout(function () {
    
    audio.currentTime = 0;
  }, duration);
}




function receivePose(poses){
if(poses.length>0){
  pose = poses[0].pose;
  structure = poses[0].skeleton;
  //console.log(pose.keypoints.length);
}
}
function modelLoaded(){
  console.log("poseNet is online")
}
function draw(){
  classifyData();
  push();
  background(0);
  translate(width,0);
  scale(-1,1);
  
  //image(vidinp, 0, 0, width, width * vidinp.height / vidinp.width);
  image(vidinp,0,0)
  if(pose){
    fill(175,176,0);
  ellipse(pose.nose.x,pose.nose.y,10,10);
  for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(255, 0, 0);
      ellipse(x, y, 16, 16);
    }
  }
  pop();
  textSize(26);
  fill(255)
  textAlign(CENTER, CENTER);
  text(Status, width / 2, height*.95);
}