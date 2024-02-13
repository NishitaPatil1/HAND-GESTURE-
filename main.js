Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
    
console.log("version is ml5",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aYOLfE1jI/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speech_1="The first prediction is "+prediction_1;
    speech_2="And the second prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speech_1+speech_2);
    synth.speak(utterThis);
}