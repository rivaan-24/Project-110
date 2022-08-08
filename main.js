prediction_1 = "";
prediction_2 = "";
prediction_3 = "";
prediction_4 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
console.log(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img_snapped" src="' + data_uri + '">';
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JIvkPpf_S/model.json', ModelLoaded);
function ModelLoaded() {
    console.log('Model is ready.');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is - " + prediction_1;
    speak_data_2 = ", The second prediction is - " + prediction_2;
    speak_data_3 = ", The third prediction is - " + prediction_3;
    speak_data_4 = ", the fourth prediction is - " + prediction_4;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2 + speak_data_3 + speak_data_4);
    synth.speak(utterThis);
}
function identify() {
    img = document.getElementById("img_snapped");
    console.log(img);
    classifier.classify(img, gotResult);
}
function gotResult(mistake, success) {
    if (mistake) {
        console.error(mistake);
    }
    else {
        console.log(success);
        prediction_1 = success[0].label;
        prediction_2 = success[1].label;
        prediction_3 = success[2].label;
        prediction_4 = success[3].label;

        document.getElementById("result_handGesture_name").innerHTML = "Name of Emoji - " + prediction_1;
        document.getElementById("result_handGesture_name2").innerHTML = "Name of Emoji - " + prediction_2;
        document.getElementById("result_handGesture_name3").innerHTML = "Name of Emoji - " + prediction_3;
        document.getElementById("result_handGesture_name4").innerHTML = "Name of Emoji - " + prediction_4;

        prediction_1_confidence = (success[0].confidence * 100).toFixed(2) + "%";
        prediction_2_confidence = (success[1].confidence * 100).toFixed(2) + "%";
        prediction_3_confidence = (success[2].confidence * 100).toFixed(2) + "%";
        prediction_4_confidence = (success[3].confidence * 100).toFixed(2) + "%";

        document.getElementById("confidence_text1").innerHTML = "Accuracy of Emoji Guessing - " + prediction_1_confidence;
        document.getElementById("confidence_text2").innerHTML = "Accuracy of Emoji Guessing - " + prediction_2_confidence;
        document.getElementById("confidence_text3").innerHTML = "Accuracy of Emoji Guessing - " + prediction_3_confidence;
        document.getElementById("confidence_text4").innerHTML = "Accuracy of Emoji Guessing - " + prediction_4_confidence;

        speak();

        if (prediction_1 == "Raised Fist") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#9994;";
            document.getElementById("result_handGesture_name").innerHTML = "Raised Fist Emoji";
            document.getElementById("example_text1").innerHTML = "The Raised Fist Emoji means solidarity with historically oppressed groups or people and social causes.";
        }
        if (prediction_2 == "Raised Fist") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#9994;";
            document.getElementById("result_handGesture_name2").innerHTML = "Raised Fist Emoji";
            document.getElementById("example_text2").innerHTML = "The Raised Fist Emoji means solidarity with historically oppressed groups or people and social causes.";
        }
        if (prediction_3 == "Raised Fist") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#9994;";
            document.getElementById("result_handGesture_name3").innerHTML = "Raised Fist Emoji";
            document.getElementById("example_text3").innerHTML = "The Raised Fist Emoji means solidarity with historically oppressed groups or people and social causes.";
        }
        if (prediction_4 == "Raised Fist") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#9994;";
            document.getElementById("result_handGesture_name4").innerHTML = "Raised Fist Emoji";
            document.getElementById("example_text4").innerHTML = "The Raised Fist Emoji means solidarity with historically oppressed groups or people and social causes.";
        }
        if (prediction_1 == "Ok emoji") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#128076;";
            document.getElementById("result_handGesture_name").innerHTML = "Ok emoji";
            document.getElementById("example_text1").innerHTML = "When you are displaying this emoji, it just means to say ok or say something is amazing.";
        }
        if (prediction_2 == "Ok emoji") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#128076;";
            document.getElementById("result_handGesture_name2").innerHTML = "Ok emoji";
            document.getElementById("example_text2").innerHTML = "When you are displaying this emoji, it just means to say ok or say something is amazing.";
        }
        if (prediction_3 == "Ok emoji") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#128076;";
            document.getElementById("result_handGesture_name3").innerHTML = "Ok emoji";
            document.getElementById("example_text3").innerHTML = "When you are displaying this emoji, it just means to say ok or say something is amazing.";
        }
        if (prediction_4 == "Ok emoji") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#128076;";
            document.getElementById("result_handGesture_name4").innerHTML = "Ok emoji";
            document.getElementById("example_text4").innerHTML = "When you are displaying this emoji, it just means to say ok or say something is amazing.";
        }
        if (prediction_1 == "Vulcan Salute") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#128406;";
            document.getElementById("result_handGesture_name").innerHTML = "The Vulcan Salute";
            document.getElementById("example_text1").innerHTML = "When you show this to someone, you are saying to live long & prosper. Kind of saying good luck.";
        }
        if (prediction_2 == "Vulcan Salute") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#128406;";
            document.getElementById("result_handGesture_name2").innerHTML = "The Vulcan Salute";
            document.getElementById("example_text2").innerHTML = "When you show this to someone, you are saying to live long & prosper. Kind of saying good luck.";
        }
        if (prediction_3 == "Vulcan Salute") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#128406;";
            document.getElementById("result_handGesture_name3").innerHTML = "The Vulcan Salute";
            document.getElementById("example_text3").innerHTML = "When you show this to someone, you are saying to live long & prosper. Kind of saying good luck.";
        }
        if (prediction_4 == "Vulcan Salute") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#128406;";
            document.getElementById("result_handGesture_name4").innerHTML = "The Vulcan Salute";
            document.getElementById("example_text4").innerHTML = "When you show this to someone, you are saying to live long & prosper. Kind of saying good luck.";
        }
        if (prediction_1 == "Crossed Fingers") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#129310;";
            document.getElementById("result_handGesture_name").innerHTML = "Crossed Fingers";
            document.getElementById("example_text1").innerHTML = "Usually, this emoji is displayed as the index (first) finger crossed over the middle (second) finger. It is a commonly used gesture indicating luck, or to show desire of a favorable outcome.";
        }
        if (prediction_2 == "Crossed Fingers") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#129310;";
            document.getElementById("result_handGesture_name2").innerHTML = "Crossed Fingers";
            document.getElementById("example_text2").innerHTML = "Usually, this emoji is displayed as the index (first) finger crossed over the middle (second) finger. It is a commonly used gesture indicating luck, or to show desire of a favorable outcome.";
        }
        if (prediction_3 == "Crossed Fingers") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#129310;";
            document.getElementById("result_handGesture_name3").innerHTML = "Crossed Fingers";
            document.getElementById("example_text3").innerHTML = "Usually, this emoji is displayed as the index (first) finger crossed over the middle (second) finger. It is a commonly used gesture indicating luck, or to show desire of a favorable outcome.";
        }
        if (prediction_4 == "Crossed Fingers") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#129310;";
            document.getElementById("result_handGesture_name4").innerHTML = "Crossed Fingers";
            document.getElementById("example_text4").innerHTML = "Usually, this emoji is displayed as the index (first) finger crossed over the middle (second) finger. It is a commonly used gesture indicating luck, or to show desire of a favorable outcome.";
        }
        if (prediction_1 == "Rock Sign Emoji") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#129304;";
            document.getElementById("result_handGesture_name").innerHTML = "Rock Sign Emoji";
            document.getElementById("example_text1").innerHTML = "Typically, the Rock Sign Emoji is shown with the hand gesture raising the pinky and index fingers on one hand. This emoji has a variety of other meanings & many people show for different reasons. It can refer to heavy metal or an encouragement to proceed with an activity. It also means to Rock On or go to a Rock Concert.";
        }
        if (prediction_2 == "Rock Sign Emoji") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#129304;";
            document.getElementById("result_handGesture_name2").innerHTML = "Rock Sign Emoji";
            document.getElementById("example_text2").innerHTML = "Typically, the Rock Sign Emoji is shown with the hand gesture raising the pinky and index fingers on one hand. This emoji has a variety of other meanings & many people show for different reasons. It can refer to heavy metal or an encouragement to proceed with an activity. It also means to Rock On or go to a Rock Concert.";
        }
        if (prediction_3 == "Rock Sign Emoji") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#129304;";
            document.getElementById("result_handGesture_name3").innerHTML = "Rock Sign Emoji";
            document.getElementById("example_text3").innerHTML = "Typically, the Rock Sign Emoji is shown with the hand gesture raising the pinky and index fingers on one hand. This emoji has a variety of other meanings & many people show for different reasons. It can refer to heavy metal or an encouragement to proceed with an activity. It also means to Rock On or go to a Rock Concert.";
        }
        if (prediction_4 == "Rock Sign Emoji") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#129304;";
            document.getElementById("result_handGesture_name4").innerHTML = "Rock Sign Emoji";
            document.getElementById("example_text4").innerHTML = "Typically, the Rock Sign Emoji is shown with the hand gesture raising the pinky and index fingers on one hand. This emoji has a variety of other meanings & many people show for different reasons. It can refer to heavy metal or an encouragement to proceed with an activity. It also means to Rock On or go to a Rock Concert.";
        }
        if (prediction_1 == "Middle Finger Emoji") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#128405;";
            document.getElementById("result_handGesture_name").innerHTML = "Middle Finger Emoji";
            document.getElementById("example_text1").innerHTML = "When raising the middle finger, it means to express, fear, anger, excitement and other strong emotions. You can show it to a friend if you are excited or you can express rage. In many countries, it's considered a vulgar, or a insult to many people. It can be very offensive.";
        }
        if (prediction_2 == "Middle Finger Emoji") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#128405;";
            document.getElementById("result_handGesture_name2").innerHTML = "Middle Finger Emoji";
            document.getElementById("example_text2").innerHTML = "When raising the middle finger, it means to express, fear, anger, excitement and other strong emotions. You can show it to a friend if you are excited or you can express rage. In many countries, it's considered a vulgar, or a insult to many people. It can be very offensive.";
        }
        if (prediction_3 == "Middle Finger Emoji") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#128405;";
            document.getElementById("result_handGesture_name3").innerHTML = "Middle Finger Emoji";
            document.getElementById("example_text3").innerHTML = "When raising the middle finger, it means to express, fear, anger, excitement and other strong emotions. You can show it to a friend if you are excited or you can express rage. In many countries, it's considered a vulgar, or a insult to many people. It can be very offensive.";
        }
        if (prediction_4 == "Middle Finger Emoji") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#128405;";
            document.getElementById("result_handGesture_name4").innerHTML = "Middle Finger Emoji";
            document.getElementById("example_text4").innerHTML = "When raising the middle finger, it means to express, fear, anger, excitement and other strong emotions. You can show it to a friend if you are excited or you can express rage. In many countries, it's considered a vulgar, or a insult to many people. It can be very offensive.";
        }
        if (prediction_1 == "Peace/Victory Sign") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#9996;";
            document.getElementById("result_handGesture_name").innerHTML = "Peace/Victory Sign";
            document.getElementById("example_text1").innerHTML = "The Peace/Victory Sign is one of the most common and has the most straightforward meaning. When showing it to someone, you are expressing positive emotions as well as showing pride like when you win a game. You also show peace, meaning no harm.";
        }
        if (prediction_2 == "Peace/Victory Sign") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#9996;";
            document.getElementById("result_handGesture_name2").innerHTML = "Peace/Victory Sign";
            document.getElementById("example_text2").innerHTML = "The Peace/Victory Sign is one of the most common and has the most straightforward meaning. When showing it to someone, you are expressing positive emotions as well as showing pride like when you win a game. You also show peace, meaning no harm.";
        }
        if (prediction_3 == "Peace/Victory Sign") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#9996;";
            document.getElementById("result_handGesture_name3").innerHTML = "Peace/Victory Sign";
            document.getElementById("example_text3").innerHTML = "The Peace/Victory Sign is one of the most common and has the most straightforward meaning. When showing it to someone, you are expressing positive emotions as well as showing pride like when you win a game. You also show peace, meaning no harm.";
        }
        if (prediction_3 == "Peace/Victory Sign") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#9996;";
            document.getElementById("result_handGesture_name3").innerHTML = "Peace/Victory Sign";
            document.getElementById("example_text3").innerHTML = "The Peace/Victory Sign is one of the most common and has the most straightforward meaning. When showing it to someone, you are expressing positive emotions as well as showing pride like when you win a game. You also show peace, meaning no harm.";
        }
        if (prediction_4 == "Peace/Victory Sign") {
            document.getElementById("update_emoji_handGesture4").innerHTML = "&#9996;";
            document.getElementById("result_handGesture_name4").innerHTML = "Peace/Victory Sign";
            document.getElementById("example_text4").innerHTML = "The Peace/Victory Sign is one of the most common and has the most straightforward meaning. When showing it to someone, you are expressing positive emotions as well as showing pride like when you win a game. You also show peace, meaning no harm.";
        }
        if (prediction_1 == "Hang Loose Emoji") {
            document.getElementById("update_emoji_handGesture").innerHTML = "&#129305;";
            document.getElementById("result_handGesture_name").innerHTML = "Hang Loose Emoji";
            document.getElementById("example_text1").innerHTML = "Also named the Shaka sign, The Hang Loose Emoji is the symbol made by folding down your middle three fingers, and rotating your wrist side to side while your thumb and pinky remains at attention. This sign is a gesture of friendly intent and is often associated with Hawaii and surf culture. It emphasises friendship, understanding, compassion, and solidarity as well as saying simple phrases like hello or how are you doing.";
        }
        if (prediction_2 == "Hang Loose Emoji") {
            document.getElementById("update_emoji_handGesture2").innerHTML = "&#129305;";
            document.getElementById("result_handGesture_name2").innerHTML = "Hang Loose Emoji";
            document.getElementById("example_text2").innerHTML = "Also named the Shaka sign, The Hang Loose Emoji is the symbol made by folding down your middle three fingers, and rotating your wrist side to side while your thumb and pinky remains at attention. This sign is a gesture of friendly intent and is often associated with Hawaii and surf culture. It emphasises friendship, understanding, compassion, and solidarity as well as saying simple phrases like hello or how are you doing.";
        }
        if (prediction_3 == "Hang Loose Emoji") {
            document.getElementById("update_emoji_handGesture3").innerHTML = "&#129305;";
            document.getElementById("result_handGesture_name3").innerHTML = "Hang Loose Emoji";
            document.getElementById("example_text3").innerHTML = "Also named the Shaka sign, The Hang Loose Emoji is the symbol made by folding down your middle three fingers, and rotating your wrist side to side while your thumb and pinky remains at attention. This sign is a gesture of friendly intent and is often associated with Hawaii and surf culture. It emphasises friendship, understanding, compassion, and solidarity as well as saying simple phrases like hello or how are you doing.";
        }
        if (prediction_4 == "Hang Loose Emoji") {
            document.getElementById("update_emoji_handGestur4").innerHTML = "&#129305;";
            document.getElementById("result_handGesture_nam4").innerHTML = "Hang Loose Emoji";
            document.getElementById("example_text4").innerHTML = "Also named the Shaka sign, The Hang Loose Emoji is the symbol made by folding down your middle three fingers, and rotating your wrist side to side while your thumb and pinky remains at attention. This sign is a gesture of friendly intent and is often associated with Hawaii and surf culture. It emphasises friendship, understanding, compassion, and solidarity as well as saying simple phrases like hello or how are you doing.";
        }
    }
}