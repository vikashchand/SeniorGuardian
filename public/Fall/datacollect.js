let img;
let poses = [];
let poseNet;
let pose;
let structure;
let imageState = 'undefined';
let targetLabel = ['standing','laying','falling'];
let i;
let q=0;
function setup(){
createCanvas(windowWidth,windowHeight);
background(155);
let options = {
    inputs: 34,
    outputs: 3,
    task: 'classification',
    debug: 'true',
    learningRate: 0.5
  };
  model = new ml5.neuralNetwork(options);
i=0;
/*
let data = setInterval(()=>{
  loadimg(`data/laying/${i}.png`);
  console.log(i);
  i++
  if(i>2){//101
    clearInterval(data);
    model.saveData("dataSample",()=>{
      console.log("model saved");
    })
  }
},1000);
*/
}
function callImages(x,saveMode){
  console.clear();
  imageState = targetLabel[x];
  let data = setInterval(()=>{
  loadimg(`data/${x}/${i}.png`);
  console.log(i);
  i++;
  if(i>30){
    clearInterval(data);
    i=0;
    if(saveMode){
      model.saveData("dataSample",()=>{
      console.log("model saved");
    });
    }
  }
},1000);
}
function drawer(){
  background(0);
  translate(0,0);
  image(img, 0, 0);
  if(poses.length >0){
     pose = poses[0].pose;
     console.log(pose.nose)
    structure = poses[0].skeleton;
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(255, 0, 0);
      ellipse(x, y, 16, 16);
    }
  }
  //noLoop();
}
async function loadimg(filename){
  img = await createImg(`${filename}`,imageReady);
  img.size(width,height);
  console.log("resolution = "+img.width+"x"+img.height);
  img.hide();
}
async function imageReady(){
  const options = {
    minConfidence: 0.1,
    inputResolution: { width, height },
  };
  console.log('image has been loaded');
  poseNet = new ml5.poseNet(getPose,options);
 await poseNet.on("pose",(results)=>{
    poses = results;
    pose = poses[0].pose;
   // drawer();
    saveData();
  });
}
async function getPose(){
  await poseNet.singlePose(img);
}
function saveData(){
  if(pose){
  let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
      let target = [imageState];
      model.addData(inputs, target);
    }
  }
}