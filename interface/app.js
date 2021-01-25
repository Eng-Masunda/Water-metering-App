"use strict";
document.addEventListener("DOMContentLoaded", () => {
	//add DOM variables
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
	const verifyInput = function (e) {
		//check for user input
		if (address.value === "") {
			address.insertAdjacentHTML(
				"afterend",
				'<p class="error-msg"><i class="fas fa-arrow-circle-left"></i>Please enter input here...</p>'
			);
		}

		if (waterLevel.value === "") {
			waterLevel.insertAdjacentHTML(
				"afterend",
				'<p class="error-msg"><i class="fas fa-arrow-circle-left"></i>Please enter input here...</p>'
			);
		}

		if (waterLevel.value !== "" && address.value !== "") {
			console.log("we have input");
		}

		//if user input has errors then show error and prevent form from sending

		//if user input is correct then send
		e.preventDefault();
	};

	//check input when user clicks submit
	submitBtn.addEventListener("click", verifyInput);
});
