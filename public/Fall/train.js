const opt = {
 // dataUrl: 'Data.json',
  task: 'classification',
  inputs:34,
  outputs:3,
  debug:true
};
const tOp = {
    epochs: 50
  };
let model = ml5.neuralNetwork(opt);
model.loadData("dataSample.json", dataLoaded);
function dataLoaded(){
  model.normalizeData();
  console.log('data loaded');
}
function trainNet(){
  model.train(tOp,wTrain,after);
}
function wTrain(epoch, loss) {
  console.log(`epoch: ${epoch}, loss:${loss}`);
}
function after(){
  console.log("done");
  model.save();
}