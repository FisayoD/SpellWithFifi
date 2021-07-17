// document.getElementById("myDropdown").classList.add("show");
var dropDown = document.getElementById("myDropdown")
var dropDown2 = document.getElementById("myDropdown2")
var content1 = document.getElementById("content-1");
var content2 = document.getElementById("content-2");
var content3 = document.getElementById("content-3");

function showProgressReport() {
    content2.style.display = "none";
    content3.style.display = "none";
    content1.style.display = "block";
}
function showWordList() {
    content1.style.display = "none";
    content3.style.display = "none";
    content2.style.display = "block";
}
function showManageChild() {
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
}
function searchkid() {
  dropDown.classList.toggle("show");
  dropDown2.classList.toggle("show")
}
// function filterFunction() {
//   var input, filter, a, i, txtValue;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "block";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }



///the code below is to add the words to the list
// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var j;
// for (j = 0; j < myNodelist.length; j++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[j].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var j;
// for (j = 0; j < close.length; j++) {
//   close[j].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput2").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput2").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (j = 0; j < close.length; j++) {
//     close[j].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }