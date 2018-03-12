const { Layer, Network } = window.synaptic;

var inputLayer = new Layer(2);
var hiddenLayer = new Layer(3);
var outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var myNeuralNet = new Network ({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

//Train the Network - Learn XOR

var learningRate = .3;

for (var i = 0; i < 20000 ; i++) {
	myNeuralNet.activate([0,0]);
	myNeuralNet.propagate(learningRate, [0]);
	
	myNeuralNet.activate([1,1]);
	myNeuralNet.propagate(learningRate, [0]);
	
	myNeuralNet.activate([1,0]);
	myNeuralNet.propagate(learningRate, [1]);
	
	myNeuralNet.activate([0,1]);
	myNeuralNet.propagate(learningRate, [1]);	
}

document.write('Trained Set [0,0]: ' + myNeuralNet.activate([0,0])+'<br/>'); //Result of Training
document.write('Trained Set [1,1]: ' + myNeuralNet.activate([1,1])+'<br/>');
document.write('Trained Set [0,1]: ' + myNeuralNet.activate([0,1])+'<br/>');
document.write('Trained Set [1,0]: ' + myNeuralNet.activate([1,0])+'<br/>');
