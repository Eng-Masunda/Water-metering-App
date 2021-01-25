"use strict";
document.addEventListener("DOMContentLoaded", () => {
	//add DOM variables
	const waterLevelDiv = document.getElementById("water-lvl-div");
	const addressDiv = document.getElementById("address-div");
	const waterLevel = document.getElementById("water-level");
	const address = document.getElementById("address");
	const submitBtn = document.getElementById("submit-btn");

	//function to verify typed input
	/*
	1)check for user input
	2)trim extra space
	3)check if input uses alphanumeric characters only
	4) make sure input is less than 100 characters for address and less than 10 characters for water level
	5) if error is present show error 
	*/
	const removeErrorMsg1 = () => {
		if (document.getElementById("error-msg1") !== null) {
			document.getElementById("error-msg1").remove();
			document
				.getElementById("error-msg1")
				.classList.remove("animate-water-level-input");
			document
				.getElementById("error-msg1")
				.style.backgroundColor = "white";
				
		}
	};

	const removeErrorMsg2 = () => {
		if (document.getElementById("error-msg2") !== null) {
			document.getElementById("error-msg2").remove();
			document
				.getElementById("error-msg2")
				.classList.remove("animate-water-level-input");
			document.getElementById("error-msg2").style.backgroundColor =
				"white";
		}
	};

	const checkWaterLevelInput = () => {
		if (
			waterLevel.value === "" &&
			document.getElementById("error-msg2") === null
		) {
			//create error paragraph, id and add class
			let errorParagraph = document.createElement("p");
			errorParagraph.className = "error-msg";
			errorParagraph.id = "error-msg2";
			//add arrow to error paragraph
			let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
			errorParagraph.innerHTML = arrow;
			//add text to paragraph
			let txtNode = document.createTextNode("  Please enter input here!");
			errorParagraph.appendChild(txtNode);
			//add paragraph to container
			waterLevelDiv.appendChild(errorParagraph);
			//animate water meter input
			if (waterLevel.classList.contains("animate-water-level-input")) {
				waterLevel.classList.remove("animate-water-level-input");
			} else {
				waterLevel.classList.add("animate-water-level-input");
			}
		}
	};

	const checkAddressInput = () => {
		if (
			address.value === "" &&
			document.getElementById("error-msg1") === null
		) {
			//create error paragraph, id and add class
			let errorParagraph = document.createElement("p");
			errorParagraph.className = "error-msg";
			errorParagraph.id = "error-msg1";
			//add arrow to error paragraph
			let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
			errorParagraph.innerHTML = arrow;
			//add text to paragraph
			let txtNode = document.createTextNode("  Please enter input here!");
			errorParagraph.appendChild(txtNode);
			//add paragraph to container
			addressDiv.appendChild(errorParagraph);
			//animate address input
			if (address.classList.contains("animate-water-level-input")) {
				address.classList.remove("animate-water-level-input");
			} else {
				address.classList.add("animate-water-level-input");
			}
		}
	};

	const verifyInput = function (e) {
		//CHECK USER INPUT
		checkWaterLevelInput();
		checkAddressInput();

		if (waterLevel.value !== "" && address.value !== "") {
			console.log("we have input");
		}

		//if user input has errors then show error and prevent form from sending

		//if user input is correct then send
		e.preventDefault();
	};

	//check input when user clicks submit
	submitBtn.addEventListener("click", verifyInput);
	waterLevel.addEventListener("keyup", removeErrorMsg2);
	address.addEventListener("keyup", removeErrorMsg1);
});
