function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/i3XJTQUjh/model.json', modelReady);
}

function modelReady()
{
    classifier.classify( gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('inicio')

        if (results[0].label == "Gato") {
            img.src = 'gato.jpg';
        } else if(results[0].label == "Perro") {
            img.src = 'perro.jpg';
        } else if (results[0].label =="Leon") {
            img.src = 'leon.jpg';
        } else {
            img.src = 'Imagen inicial.webp';
            console.log ("Ruido de fondo")
        }

}
}