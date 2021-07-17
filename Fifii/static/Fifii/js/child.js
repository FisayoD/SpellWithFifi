// //PS: all the array words here are meant to be derived from the database o, remember you asked me to test with an array. I even added delete so the word deletes from the array when user spells it

// const wordList = {{ data | tojson | safe }}
// const level1 = wordList
// // const level1 = [
// //     "A",
// //     "am",
// //     "an",
// //     "and",
// //     "at",
// //     "can",
// //     "come",
// //     "do",
// //     "go",
// //     "he",
// //     "you",
// //     "in",
// //     "is",
// //     "it",
// //     "like",
// //     "me",
// //     "my",
// //     "no",
// //     "see",
// //     "the"
// // ];

// // had to remove this cos there is no description from the adult end and it's difficult to write in this style
// // const level1List = [
// //     " The word A. Description, The first letter that begins the word apple",
// //     " The word am. Description, I am a child",
// //     " The word an. Description, I ate an apple today",
// //     " The word and. Description, I and my friends love to play",
// //     " The word at. Description, I learn at the school",
// //     " The word can. Description, I can clap",
// //     " The word come. Description, Come here!",
// //     " The word do. Description, I will do my assignment later",
// //     " The word go. Description, I want to go home",
// //     " The word he. Description, He is my father",
// //     " The word you. Description, Your mum is calling you",
// //     " The word in. Description, I live in a house",
// //     " The word is. Description, This is a cup",
// //     " The word it. Description, It belongs to me",
// //     " The word like. Description,  I like icecream",
// //     " The word me. Description, My mum loves me",
// //     " The word my. Description, I love my friends",
// //     " The word no. Description, There is no water",
// //     " The word see. Description, I see with my eyes",
// //     " The word the. Description, I can see the sky"
// // ];
// const difficultWords = [];
// var checkButton = document.getElementById("check");
// var getWordButton = document.getElementById("getWord");
// var accuracyValue = document.getElementById("accuracyValue");
// var input = document.getElementById('guess').value;
// var randomVar;
// var count = 0; 
// var total = 2; // this is supposed to be the word to be spelt specififed in the adult account but I specified one here so you can change it later
// var sum = 0;
// var score = 0;
// var accuracy = 0;
// var totalAccuracy = accuracy + "%";

// //also console.logged a lot of results for you, so you can monitor what is going on very well from the console. 

// getWordButton.disabled = false;
// checkButton.disabled = false;

// var callWord = (randomVar) => {
     
//     if (count <= total) {
//         startTimer();
//         var input = document.getElementById('guess').value;
//         console.log(level1[randomVar] + 'from getWord');
//         speech.text = "Spell" + level1[randomVar];
//         speech.pitch = 1;
//         speech.lang = "en-US";
//         speech.volume = 1;
//         speech.rate = 0.8;
//         window.speechSynthesis.speak(speech);
//     } else {
//         stopTimer();
//         accuracy = (score / total) * 100;
//         accuracy = (score / total) * 100;
//         document.getElementById('guess').style.display = "none";
//         getWordButton.style.display = "none";
//         checkButton.style.display = "none";
//         accuracyValue.innerText = "Your total accuracy is " + accuracy + "%";
//         speech.text = "You are done with your quiz";
//         getWordButton.disabled = true;
//         checkButton.disabled = true;
//         if (difficultWords.length > 0) {
//           document.getElementById('difficultWords').innerText = "Here are the difficult words: " + difficultWords;
//         }
//         window.speechSynthesis.speak(speech);
//     }

// }

// var validateInput = (randomVar) => {
//         var input = document.getElementById('guess').value;
//         console.log(randomVar + "from check button")
//         if (input === level1[randomVar]) {
//             speech.text = "You are correct!";
//             speech.rate = 0.85;
//             console.log('you are correct')
//             score++;
//         if (randomVar > -1) { ////this line deletes the correct word from the array of words
//           level1.splice(randomVar, 1);
//           // level1List.splice(randomVar, 1);
//          }
//             console.log(score);
//         }
//         else if (input !== level1[randomVar]) {
//             difficultWords.push(level1[randomVar])
//             speech.text = "You are wrong!";
//             speech.rate = 0.85;
//             console.log("You are wrong!")
//     }
//         window.speechSynthesis.speak(speech);
//     }


// var speech = new SpeechSynthesisUtterance();

// checkButton.addEventListener("click", function () {
//     validateInput(randomVar);
//     document.getElementById('guess').value = '';
// })

// getWordButton.addEventListener("click",() => {
//     randomVar = Math.floor(Math.random() * level1.length);
//     count++;
//     callWord(randomVar);
// })

// const timer = document.getElementById('stopwatch');

// var hr = 0;
// var min = 0;
// var sec = 0;
// var stoptime = true;
// var totalseconds;
// var decimalseconds; //converts value of the total seconds to decimal.
// var decimalseconds2DP; //convert value of the decimal to 2 decimal places, only this one should be recorded.
// var WCPM; //full meaning is word count per minute
// var WCPM2DP; //convert value of the WCPM to 2 decimal places, only this one should be recorded.

// function startTimer() {
//   if (stoptime == true) {
//         stoptime = false;
//         timerCycle();
//     }
// }
// function stopTimer() {
//   if (stoptime == false) {
//       stoptime = true;
//   }
//   totalseconds = (hr * 60 * 60 + min * 60 + sec * 1)
//   decimalseconds = totalseconds / 60;
//   decimalseconds2DP = decimalseconds.toFixed(2);
//   WCPM = score / decimalseconds;
//   WCPM2DP = WCPM.toFixed(2);
//   console.log(totalseconds, WCPM2DP);
//   console.log(decimalseconds2DP);
// }

// function timerCycle() {
//     if (stoptime == false) {
//     sec = parseInt(sec);
//     min = parseInt(min);
//     hr = parseInt(hr);

//     sec = sec + 1;

//     if (sec == 60) {
//       min = min + 1;
//       sec = 0;
//     }
//     if (min == 60) {
//       hr = hr + 1;
//       min = 0;
//       sec = 0;
//     }

//     if (sec < 10 || sec == 0) {
//       sec = '0' + sec;
//     }
//     if (min < 10 || min == 0) {
//       min = '0' + min;
//     }
//     if (hr < 10 || hr == 0) {
//       hr = '0' + hr;
//     }

//     timer.innerHTML = hr + ':' + min + ':' + sec;

//     setTimeout("timerCycle()", 1000);
//   }
// }
