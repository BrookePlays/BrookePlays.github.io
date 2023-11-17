function onLoad() {
    if (localStorage.getItem("key") == null) { // if erased or first-timer
        // index 0 is debug, indexes 1-10 are endings respectively
        const saved = [false, false, false, false, false, false, false, false, false, false, false];
        // saving
        localStorage.setItem("key", JSON.stringify(saved));
	}
	let saved = JSON.parse(localStorage.getItem("key")); // receive
	if (saved[0]) {
		document.getElementById("demo").innerHTML = saved;
		console.log("load: " + localStorage.getItem("key")); // remove later
	} else {
		document.getElementById("demo").innerHTML = "";
	}
	
}

window.addEventListener('keydown', function (e) {
	let saved = JSON.parse(localStorage.getItem("key")); // receive
	console.log("receive: " + saved); // remove
	if (e.key == "d" && saved[0] == false) { // debug
		saved[0] = true;
		alert("Debug mode activated.");
	} else if (e.key == "d" && saved[0] == true) {
		saved[0] = false;
		alert("Debug mode deactivated.");
		document.getElementById("demo").innerHTML = "";
		
	} else if (e.key == "Escape" && (getComputedStyle(myForm).display == "none")) { // menu
		openForm();
	} else if (e.key == "Escape" && (getComputedStyle(myForm).display == "block")) {
		closeForm();
	}
	if (saved[0]) {
		if (e.key == "1" && saved[1] == false) { // enabling endings (oh god im so sorry)
			saved[1] = true;
		} else if (e.key == "2" && saved[2] == false) {
			saved[2] = true;
		} else if (e.key == "3" && saved[3] == false) {
			saved[3] = true;
		} else if (e.key == "4" && saved[4] == false) {
			saved[4] = true;
		} else if (e.key == "5" && saved[5] == false) {
			saved[5] = true;
		} else if (e.key == "6" && saved[6] == false) {
			saved[6] = true;
		} else if (e.key == "7" && saved[7] == false) {
			saved[7] = true;
		} else if (e.key == "8" && saved[8] == false) {
			saved[8] = true;
		} else if (e.key == "9" && saved[9] == false) {
			saved[9] = true;
		} else if (e.key == "0" && saved[10] == false) {
			saved[10] = true;
		} else if (e.key == "1" && saved[1] == true) { // disabling endings (i should use a nested for-loop)
			saved[1] = false;
		} else if (e.key == "2" && saved[2] == true) {
			saved[2] = false;
		} else if (e.key == "3" && saved[3] == true) {
			saved[3] = false;
		} else if (e.key == "4" && saved[4] == true) {
			saved[4] = false;
		} else if (e.key == "5" && saved[5] == true) {
			saved[5] = false;
		} else if (e.key == "6" && saved[6] == true) {
			saved[6] = false;
		} else if (e.key == "7" && saved[7] == true) {
			saved[7] = false;
		} else if (e.key == "8" && saved[8] == true) {
			saved[8] = false;
		} else if (e.key == "9" && saved[9] == true) {
			saved[9] = false;
		} else if (e.key == "0" && saved[10] == true) {
			saved[10] = false;
		}

		document.getElementById("demo").innerHTML = saved;
		console.log("change"); // remove
	}

	localStorage.setItem("key", JSON.stringify(saved)); // save
	console.log("done: " + saved); //remove
}, false);

function openForm() {
	document.getElementById("myForm").style.display = "block";
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

function deleteData() {
	if (confirm("Do you want to delete all your progress?")) {
		alert("Save data deleted.");
		localStorage.clear();
		onLoad(); // so reload isn't needed
	}
}

function openMessage() {
    // retreiving
    let saved = JSON.parse(localStorage.getItem("key"));

    if ((saved[0] ==  true) || (saved[1] + saved[2] + saved[3] + saved[4] + saved[5] + saved[6] + saved[7] + saved[8] + saved[9] + saved[10]) == 10) {
        window.location.href = "https://brookeplays.io/choices/message";
    } else {
        alert("You need to collect all ten endings to unlock this.");
        console.log(saved);
    }
}

function startGame() {
	window.location.href = "https://brookeplays.io/choices/game";
}
