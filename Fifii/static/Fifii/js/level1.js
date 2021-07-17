// const level1 = [
//     "A",
//     "am",
//     "an",
//     "and",
//     "at",
//     "can",
//     "come",
//     "do",
//     "go",
//     "he",
//     "you",
//     "in",
//     "is",
//     "it",
//     "like",
//     "me",
//     "my",
//     "no",
//     "see",
//     "the"
// ];


// const level1List = [
//     " The word A. Description, The first letter that begins the word apple",
//     " The word am. Description, I am a child",
//     " The word an. Description, I ate an apple today",
//     " The word and. Description, I and my friends love to play",
//     " The word at. Description, I learn at the school",
//     " The word can. Description, I can clap",
//     " The word come. Description, Come here!",
//     " The word do. Description, I will do my assignment later",
//     " The word go. Description, I want to go home",
//     " The word he. Description, He is my father",
//     " The word you. Description, Your mum is calling you",
//     " The word in. Description, I live in a house",
//     " The word is. Description, This is a cup",
//     " The word it. Description, It belongs to me",
//     " The word like. Description,  I like icecream",
//     " The word me. Description, My mum loves me",
//     " The word my. Description, I love my friends",
//     " The word no. Description, There is no water",
//     " The word see. Description, I see with my eyes",
//     " The word the. Description, I can see the sky"
// ];
// var checkButton = document.getElementById("check");
// var getWordButton = document.getElementById("getWord");
// var input = document.getElementById('guess').value;
// var randomVar;


//  var callWord = (randomVar) => {
//     var input = document.getElementById('guess').value;
//     console.log(level1[randomVar] + 'from getWord')
//     speech.text = "Spell" + level1List[randomVar];
//     speech.pitch = 1;
//     speech.lang = "en-US";
//     speech.volume = 1;
//     speech.rate = 0.8;
//     //speech.voice = "Google US English (en-US)"
//     // speech.voice = 
    
//     window.speechSynthesis.speak(speech);
//     // location.reload();
// }

// var validateInput = (randomVar) => {
//         var input = document.getElementById('guess').value;
//         console.log(randomVar + "from check button")
//         if (input === level1[randomVar]) {
//             speech.text = "You are correct!";
//             speech.rate = 0.85;
//             console.log('you are correct')
//             //speech.voice = "Google US English (en-US)"
//         }
//         else if (input !== level1[randomVar]) {
//             speech.text = "You are wrong!";
//             speech.rate = 0.85;
//             console.log("You are wrong!")
//             //speech.voice = "Google US English (en-US)"
//         }
//         window.speechSynthesis.speak(speech);
//     }

//    var speech = new SpeechSynthesisUtterance();

// checkButton.addEventListener("click", function () {
//     validateInput(randomVar);
// })

// getWordButton.addEventListener("click",() => {
//     randomVar = Math.floor(Math.random() * level1.length);

//     callWord(randomVar);
// })
// //refine this code