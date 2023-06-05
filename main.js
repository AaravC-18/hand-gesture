https://teachablemachine.withgoogle.com/models/FbJSA43Th/

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera")
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image"src="'+data_uri+'"/>'
    });
}
console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/FbJSA43Th/model.json", modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

prediction_1 = ""
prediction_2 = ""

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error); }
        else {
            console.log(results);
        document.getElementById("result_emotion").innerHTML = results[0].label;
        document.getElementById("result_emotion2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "thumbs up")
        {
            document.getElementById("update_emoji").innerHTML = "&#128077"
        }
        if(results[0].label == "peace")
        {
            document.getElementById("update_emoji").innerHTML = "&#9996"
        }
        if(results[0].label == "gang sign")
        {
            document.getElementById("update_emoji").innerHTML = "&#129304"
        }

        if(results[1].label == "thumbs up")
        {
            document.getElementById("update_emoji2").innerHTML = "&#128077"
        }
        if(results[1].label == "peace")
        {
            document.getElementById("update_emoji2").innerHTML = "&#9996"
        }
        if(results[1].label == "gang sign")
        {
            document.getElementById("update_emoji2").innerHTML = "&#129304"
        }
    }
}
