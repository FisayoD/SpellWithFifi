const level3 = [
    "able",
    "almost",
    "any",
    "anything",
    "ask",
    "bad",
    "ball",
    "because",
    "begin",
    "behind",
    "between",
    "books",
    "both",
    "catch",
    "deep",
    "dog",
    "door",
    "down",
    "each",
    "even",
    "every",
    "fast",
    "father",
    "funny",
    "friend",
    "gave",
    "girl",
    "game"
];



const level3List = [
    " The word able. Description, I was not able to go to school",
    " The word almost. Description, We are almost home",
    " The word any. Description, I do not have any pencil left",
    " The word anything. Description, So hungry, can eat anything",
    " The word ask. Description, Did you ask mum?",
    " The word bad. Description, The applie is bad",
    " The word ball. Description, I love to play ball",
    " The word because. Description, Is it because we are not friends?",
    " The word begin. Description, Where do we begin",
    " The word behind. Description, Thought you were behind me",
    " The word between. Description, I sat in between them",
    " The word books. Description, I love books",
    " The word both. Description, The both of us are friends",
    " The word catch. Description, She did not catch me",
    " The word deep. Description, The river is deep",
    " The word dog. Description, I love my dog",
    " The word door. Description, Leave the door open",
    " The word down. Description, It fell down",
    " The word each. Description, Each of the boxes has been shared",
    " The word even. Description, That makes us even",
    " The word every. Description, Every one of us owns a laptop",
    " The word fast. Description, He runs really fast",
    " The word father. Description, He is my father",
    " The word funny. Description, My mum is super funny",
    " The word friend. Description, He is my friend",
    " The word gave. Description, I gave it to him",
    " The word girl. Description, She is a girl",
    " The word game. Description, Let us play a game"
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
        var input = document.getElementById('guess').value.toLowerCase();
        console.log(level3[randomVar] + 'from getWord');
        speech.text = "Spell" + level3List[randomVar];
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
        var input = document.getElementById('guess').value.toLowerCase();
        console.log(randomVar + "from check button")
        if (input === level3[randomVar]) {
            speech.text = "You are correct!";
            speech.rate = 0.85;
            console.log('you are correct')
            score++;
        if (randomVar > -1) { ////this line deletes the correct word from the array of words
          level3.splice(randomVar, 1);
          level3List.splice(randomVar, 1);
         }
            console.log(score);
        }
        else if (input !== level3[randomVar]) {
            difficultWords.push(level3[randomVar])
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
    randomVar = Math.floor(Math.random() * level3.length);
    count++;
    callWord(randomVar);
})

