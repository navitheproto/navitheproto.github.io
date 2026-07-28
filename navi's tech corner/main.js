//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page1=document.querySelector("#page1");
const page2=document.querySelector("#page2");
const page3=document.querySelector("#page3");
const page4=document.querySelector("#page4");


function hideall(){ //function to hide all pages
page1.style.display="none";
page2.style.display="none";
page3.style.display="none";
page4.style.display="none";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page1.style.display="block";
});
page2btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page2.style.display="block";
});
page3btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page3.style.display="block";
});
page4btn.addEventListener("click", function () {
	hideall(); //we don't know which page is shown, so hideall
	page4.style.display="block";
});
hideall(); //call hideall function to hide all pages


//broken code

const windowId = document.getElementById("windowId");
function GetRandom(min,max){
//this will select a number between min and max
return Math.round(Math.random() * (max - min)) + min;
}
function MoveDurian() {
console.log("MoveDurian");
windowId.style.left = GetRandom(0, 400) + "px";
windowId.style.top = GetRandom(0, 300) + "px";
}
var moveDurianItvId = setInterval(MoveDurian, 1000);
moveDurianItvId++;

//working code

const scoreBox=document.getElementById("scoreBox");
const popAudio = new Audio("./audio/popsound.mp3");
function durianCatch() {
//increases score after clicking
//update html scorebox
scoreBox.innerHTML = "You did it! Press S to restart!";
popAudio.play(); //play the audio!
document.getElementById("windowId").style.display = "none";
}
document.addEventListener("keydown",function(evt){
console.log(evt);
	if(evt.code=="KeyT"){
		windowId.classList.add("shrink");
	}
	if(evt.code=="KeyU"){
		windowId.classList.remove("shrink");
	}
	if(evt.code=="KeyA"){
		windowId.classList.add("anim1");
	}
	if(evt.code=="KeyB"){
		windowId.classList.remove("anim1");
	}
	if(evt.code=="KeyS"){
		score=0;
		document.getElementById("windowId").style.display = "block";
		scoreBox.innerHTML = "Click the window to catch it!";
	}
});


//link durian to mouseclick to durianCatch function
windowId.addEventListener("click",durianCatch);

const btnSubmit=document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click",CheckAns);
const scorebox=document.querySelector("#scorebox");
var q1,q2,q3,q4,q5,score=0;
function CheckAns(){
score=0; //reset score to 0, check ans and give score if correct
//read the value of the selected radio button for q1
q1=document.querySelector("input[name='q1']:checked").value;
console.log(q1); //check q1 value retrieved
if(q1=="Lack of developer support")score++; // and q1==
//read the value of the selected radio button for q2
q2=document.querySelector("input[name='q2']:checked").value;
console.log(q2); //check q2 value retrieved
if(q2=="Samsung Focus")score++;
scorebox.innerHTML="Score:"+score; 
q3=document.querySelector("input[name='q3']:checked").value;
console.log(q3); //check q2 value retrieved
if(q3=="Release an update that introduced WP8 features")score++;
scorebox.innerHTML="Score:"+score; 
q4=document.querySelector("input[name='q4']:checked").value;
console.log(q4); //check q2 value retrieved
if(q4=="WP8.1")score++;
scorebox.innerHTML="Score:"+score; 
q5=document.querySelector("input[name='q5']:checked").value;
console.log(q5); //check q2 value retrieved
if(q5=="No")score++;
scorebox.innerHTML="Score:"+score; 
} 