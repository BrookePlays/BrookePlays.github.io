// TODO: remove K prefix from names as its depreciated

var video_list = ["videos/KE_P1L1.mp4", "videos/C_T8_P1L2.mp4", "videos/LD1_P1L3.mp4"]; // sample
var video_player = null;
var currentVideo = "videos/KE_P1L1.mp4"

var pointsList = [0, 0, 0, 0]; // endings that use points: 1, 2, 3, 4
//var saved = JSON.parse(localStorage.getItem("key"));
var saved = [false,false,false,false,false,false,false,false,false,false,false]; //TEMPORARY FIX, USE ABOVE STATEMENT ON GITHUB, LOCALSTORAGE DOESN'T WORK PROPERLY ON NON-DOMAINS

function onLoad() {
    video_player = document.getElementById("video");
    video_player.setAttribute("src","videos/KE_P1L1.mp4");
    video_player.play();

    if (saved[0]) { // if debug is on, show debug stuff
        document.getElementById("demo").innerHTML = saved;
		document.getElementById("savedText").innerHTML = saved;
        document.getElementById("pointsText").innerHTML = pointsList;
        document.getElementById("fileText").innerHTML = currentVideo;
	}
}


function onVideoEnded() { // bitch lets have some FUN
	switch (currentVideo) { // currentVideo is actually the video that just ended
	case "videos/KE_P1L1.mp4":
		currentVideo = "videos/C_T8_P1L2.mp4";
		choiceMaker3 = ("Help Maya", 0, "Wait for Maya", 0, "Leave Maya", 0, 8); 
/* choice 1, locked by, choice 2, locked by, choice 3, locked by, timer
 - sets the text of btnThree to choice 1, choice 2, and choice 3. 
 - if any are locked (endings 1-10 based on saved), 
	- if the locked decision hasn't been unlocked yet, 
		- show a lock icon overlayed above the locked decision and disable clicking
- only allows the video to be played for 8 seconds before a decision is made
*/
		break;
	case "videos/C_T8_P1L2.mp4":
		if (successful) { // either do the W20 or S8-5
			currentVideo = selectedVideo; 
		} else {
			currentVideo = "videos/GD3_P1L3.mp4";
		}
		break:
	case "videos/D1_S8-5_P1L3.mp4":
		break:
	default:
		alert("Seems as if I did a fucky-wucky. Please contact Brooklyn.");
		break;
	}
    video_player.setAttribute("src", currentVideo);
    video_player.play();
	if (cps) {
		spacebarTest(8, 5);
	} else if (wpm) {
		typingTest("what has she done for you", 20);
	}
}

function toggleMute() {
    var video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function delay(time) { // Delay Function to Add SetTimeOut After Defined Interval
    return new Promise((resolve) => setTimeout(resolve, time));
}

function showVideo() { //Show Video Function to Add Display Property to Show the Video on button click which fufills User Interaction so video runs unmuted
    var element = document.getElementById('video');
    var button = document.getElementById('button');
    element.style.display = 'block';
    button.style.display = 'none';
	text.style.display = 'none';
    delay(100).then(() => toggleMute());
}


window.addEventListener('keydown', function (e) {
    console.log(e.key);
    if (e.key == "Escape") { // menu and pause
		video_player.pause(); 
		if (confirm("Do you want to return to the title screen?")) {
		    window.location.href = "https://brookeplays.github.io/choices/title";
	    } else {
			video_player.play();
		}
    } else if (e.key == "d" && !saved[0]) { // debug
		saved[0] = true;
		alert("Debug mode activated.");
        document.getElementById("savedText").innerHTML = saved;
        document.getElementById("pointsText").innerHTML = pointsList;
        document.getElementById("fileText").innerHTML = currentVideo;
	} else if (e.key == "d" && saved[0]) {
		saved[0] = false;
		alert("Debug mode deactivated.");
        document.getElementById("savedText").innerHTML = "";
        document.getElementById("pointsText").innerHTML = "";
        document.getElementById("fileText").innerHTML = "";
	} 

    if (saved[0]) {
        if (e.key == "1" && !saved[1]) { // enabling endings
		    saved[1] = true;
	    } else if (e.key == "2" && !saved[2]) {
		    saved[2] = true;
	    } else if (e.key == "3" && !saved[3]) {
		    saved[3] = true;
	    } else if (e.key == "4" && !saved[4]) {
		    saved[4] = true;
	    } else if (e.key == "5" && !saved[5]) {
		    saved[5] = true;
	    } else if (e.key == "6" && !saved[6]) {
		    saved[6] = true;
	    } else if (e.key == "7" && !saved[7]) {
		    saved[7] = true;
	    } else if (e.key == "8" && !saved[8]) {
		    saved[8] = true;
	    } else if (e.key == "9" && !saved[9]) {
		    saved[9] = true;
	    } else if (e.key == "0" && !saved[10]) {
		    saved[10] = true;
	    } else if (e.key == "1" && saved[1]) { // disabling endings
		    saved[1] = false;
	    } else if (e.key == "2" && saved[2]) {
		    saved[2] = false;
	    } else if (e.key == "3" && saved[3]) {
		    saved[3] = false;
	    } else if (e.key == "4" && saved[4]) {
		    saved[4] = false;
	    } else if (e.key == "5" && saved[5]) {
		    saved[5] = false;
	    } else if (e.key == "6" && saved[6]) {
		    saved[6] = false;
	    } else if (e.key == "7" && saved[7]) {
		    saved[7] = false;
	    } else if (e.key == "8" && saved[8]) {
		    saved[8] = false;
	    } else if (e.key == "9" && saved[9]) {
		    saved[9] = false;
	    } else if (e.key == "0" && saved[10]) {
		    saved[10] = false;
	    }
        document.getElementById("savedText").innerHTML = saved;
    }

    if (e.key == "e") { // testing endingScreen, remove
        endingScreen(9);
    }
	if (e.key == "s") { // force skip
		onVideoEnded();
	}
    localStorage.setItem("key", JSON.stringify(saved)); // save
	console.log("done: " + saved); //remove
}, false);

// handles all logic and displaying of the endings 
function endingScreen(typeNum) {
	// remove video player if necessary
	document.getElementById("ending").style.display = "block";

	// lists without error at index 0 uses orderList's order
    let typeList = ["Error", "Resolved", "Bully", "Ignorant", "Evil", "Dead", "Whoops", "Undercover", "Betrayed", "Sacrifice", "Hero"]
    let descList = ["Error", "You stood up to your friends and Maya’s bullies and helped Maya feel like she belonged for the first time in forever.", "You decided to push Maya to her absolute limit. Did you think that would make you feel better in some twisted way?", "You decided that going with the flow would be the best option in life, but how did that turn out for you?", "You became like your grandparent and followed in their path to domination and destruction.", "Get good.", "You had banished the evil and saved your city at the cost of your beloved sister.", "No one knew who this hooded person was, most people thought he died shortly after finishing off Aku, but he is hailed as a hero.", "You were mean to Maya before, and you really expect her to reach out to you now?", "With a show of ultimate strength and bravery, you decided to sacrifice yourself to contain the evil.", "You decided to correct your wrongs and save the city and Maya, but the scars created are apparent."];
    let unlockList = ["Error", "", "After Jade experienced true loss, he learned how to empathize better in stressful situations.", "Jade learned that going with the flow is usually not a good idea.", "Aku had showed Jade how to be truly cruel to others around you while only caring for yourself.", "", "Jade, understanding that he could always do better, learned how to help others when they feel down.", "Jade learned that you didn't need to be recognized or rewarded in order to help people out.", "Deep down, Jade wanted to get revenge after he was betrayed by his sister.", "Jade learned that you have to sometimes sacrifice your own interests in order to to the right thing.", "Jade has learned how to fight back against magic after he had taken back control from his own powers."];
	// if a duplicate ending
    if (saved[typeNum]) {
		let endingHint = "There's a message waiting for you on the title screen...";
        let hintList = ["KIA", "Do not care about others and take as little action as possible.", "Be unable to save Maya at the last second.", "Try to save Maya while being mean to her.", "Keep your powers secret, but still save the city.", "Accept your roots and try to befriend Aku.", "Be extremely cruel to Maya.", "Save Maya and the city with the help of your friends.", "Discover a secret, and find your true potential.", "Be nice to Maya and stand up for her, but it will require strength and courage."];
		// shows hints for how to get other endings
        let orderList = [5, 3, 6, 8, 7, 4, 2, 10, 9, 1];
        document.getElementById("endingTypeText").innerHTML = "Ending " + typeNum + ": " + typeList[typeNum] + " (Duplicate ending)";
        for (let i = 0; i < orderList.length; i++) {
            if (!saved[orderList[i]]) {
                endingHint = hintList[i];
                break;
            }
        }
        document.getElementById("endingStatusText").innerHTML = "Hint: " + endingHint;
		console.log("hi"); // remove
    } else { // if a newly acheived ending
		saved[typeNum] = true;
		localStorage.setItem("key", JSON.stringify(saved));
        document.getElementById("endingTypeText").innerHTML = "Ending " + typeNum + ": " + typeList[typeNum] + " (New ending!)";
        document.getElementById("endingStatusText").innerHTML = descList[typeNum];
    }
	document.getElementById("endingInfoText").innerHTML = unlockList[typeNum];
}

function restart() {
	location.reload();
}

function goBack() {
	window.location.href = "https://brookeplays.github.io/choices";
}


