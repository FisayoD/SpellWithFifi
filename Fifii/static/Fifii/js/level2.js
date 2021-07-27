const level2 = [
    "all",
    "are",
    "away",
    "back",
    "because",
    "been",
    "can",
    "came",
    "did",
    "from",
    "get",
    "going",
    "had",
    "has",
    "have",
    "her",
    "here",
    "into",
    "look",
    "man",
    "make",
    "not",
    "now",
    "one",
    "out",
    "play",
    "that",
    "this",
    "who",
    "with",
    "your"
];
    

const level2List = [
    " The word all. Description, We are all leaving the class",
    " The word are. Description, Those are mine!",
    " The word away. Description, She went away",
    " The word back. Description, When is mum coming back",
    " The word because. Description, She said it is because she did not have one",
    " The word been. Description, I have never been to the zoo",
    " The word can. Description, I can cook",
    " The word came. Description, She later came to the class",
    " The word did. Description, Did you help our teacher",
    " The word from. Description, Where are you from?",
    " The word get. Description, Please help me get my bag",
    " The word going. Description, We are going home",
    " The word had. Description, Never knew he had a dog",
    " The word has. Description, She has three sweets",
    " The word have. Description, I have two sweets",
    " The word her. Description, Mum is calling her",
    " The word here. Description, Come here",
    " The word into. Description, My teacher said she will look into it",
    " The word look. Description, Can I have a look?",
    " The word man. Description, My dad is a man",
    " The word make. Description, I live in a house",
    " The word not. Description, I am not sharing with you",
    " The word now. Description, We are not doing that now",
    " The word one. Description, She is the one who told a lie",
    " The word out. Description, We went out",
    " The word play. Description, That belongs to me",
    " The word this. Description, I love my friends",
    " The word who. Description, Who did you tell?",
    " The word with. Description, I see with my eyes",
    " The word your. Description, Do your work!"
];
const difficultWords = [];
var checkButton = document.getElementById("check");
var getWordButton = document.getElementById("getWord");
var accuracyValue = document.getElementById("accuracyValue");
var input = document.getElementById('guess').value.toLowerCase();
var randomVar;
var count = 0; 
var total = 4; // this is supposed to be the word to be spelt specififed in the adult account but I specified one here so you can change it later
var sum = 0;
var score = 0;
var accuracy = 0;
var totalAccuracy = accuracy + "%";


getWordButton.disabled = false;
checkButton.disabled = false;

var callWord = (randomVar) => {
     
    if (count <= total) {
        var input = document.getElementById('guess').value;
        console.log(level2[randomVar] + 'from getWord');
        speech.text = "Spell" + level2List[randomVar];
        speech.pitch = 1;
        speech.lang = "en-US";
        speech.volume = 1;
        speech.rate = 0.8;
        window.speechSynthesis.speak(speech);
    } else {
        accuracy = (score / total) * 100;
        accuracy = (score / total) * 100;
        document.getElementById('guess').style.display = "none";
        getWordButton.style.display = "none";
        checkButton.style.display = "none";
        accuracyValue.innerText = "Your total accuracy is " + accuracy + "%";
        speech.text = "You are done with your quiz";
        getWordButton.disabled = true;
        checkButton.disabled = true;
        if (difficultWords.length > 0) {
          document.getElementById('difficultWords').innerText = "Here are the difficult words: " + difficultWords;
        }
        window.speechSynthesis.speak(speech);
    }

}

var validateInput = (randomVar) => {
        var input = document.getElementById('guess').value;
        console.log(randomVar + "from check button")
        if (input === level2[randomVar]) {
            speech.text = "You are correct!";
            speech.rate = 0.85;
            console.log('you are correct')
            score++;
        if (randomVar > -1) { ////this line deletes the correct word from the array of words
          level2.splice(randomVar, 1);
          level2List.splice(randomVar, 1);
         }
            console.log(score);
        }
        else if (input !== level2[randomVar]) {
            difficultWords.push(level2[randomVar])
            speech.text = "You are wrong!";
            speech.rate = 0.85;
            console.log("You are wrong!")
    }
        window.speechSynthesis.speak(speech);
    }


var speech = new SpeechSynthesisUtterance();

checkButton.addEventListener("click", function () {
    validateInput(randomVar);
    document.getElementById('guess').value = '';
})

getWordButton.addEventListener("click",() => {
    randomVar = Math.floor(Math.random() * level2.length);
    count++;
    callWord(randomVar);
})

