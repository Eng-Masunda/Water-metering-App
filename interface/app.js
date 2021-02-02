"use strict";
document.addEventListener("DOMContentLoaded", () => {
	//add DOM variables
	const waterLevelDiv = document.getElementById("water-lvl-div");
	const addressDiv = document.getElementById("address-div");
	const waterLevel = document.getElementById("water-level");
	const address = document.getElementById("address");
	const submitBtn = document.getElementById("submit-btn");

	//function checks for input and shows error message
	//function that shows error message
	const showError = (idInput = "someID", errorMsg = "You have an error") => {
		//if tag already exists, don't add
		if (waterLevelDiv.contains(errorParagraph) === false) {
			console.log("its working");
		}
		//create error paragraph, id and add class
		let errorParagraph = document.createElement("p");
		errorParagraph.className = "error-msg";
		errorParagraph.id = idInput;

		//add arrow to error paragraph
		let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
		errorParagraph.innerHTML = arrow;
		//add text to paragraph
		let txtNode = document.createTextNode(errorMsg);

		errorParagraph.appendChild(txtNode);
		//add paragraph to container
		waterLevelDiv.appendChild(errorParagraph);
	};
	//function that clears error messages

	//function to verify user input before sending
	const verifyInput = (e) => {
		//check for user input
		showError();
		e.preventDefault();
		//verify user input
	};

	//send data when submit button is clicked
	submitBtn.addEventListener("click", verifyInput);

	/*
	//function to verify typed input
	/*
	1)check for user input
	2)trim extra space
	3)check if input uses alphanumeric characters only
	4) make sure input is less than 100 characters for address and less than 10 characters for water level
	5) if error is present show error 
	

	const shakeMeterInput = () => {
		if (waterLevel.classList.contains("animate-input")) {
			waterLevel.classList.remove("animate-input");
		} else {
			waterLevel.classList.add("animate-input");
		}
	};

	const shakeAddressInput = () => {
		if (address.classList.contains("animate-input")) {
			address.classList.remove("animate-input");
		} else {
			address.classList.add("animate-input");
		}
	};

	const removeErrorMsg1 = () => {
		if (document.getElementById("error-msg1") !== null) {
			//remove red bg-color
			document.getElementById("address").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg1").remove();
		}
	};

	const removeErrorMsg2 = () => {
		if (document.getElementById("error-msg2") !== null) {
			//remove red bg-color
			document.getElementById("water-level").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg2").remove();
		}
	};

	const removeErrorMsg3 = () => {
		if (document.getElementById("error-msg3") !== null) {
			//remove red bg-color
			document.getElementById("water-level").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg3").remove();
		}
	};

	const removeErrorMsg4 = () => {
		if (document.getElementById("error-msg4") !== null) {
			//remove red bg-color
			document.getElementById("water-level").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg4").remove();
		}
	};

	const removeErrorMsg5 = () => {
		if (document.getElementById("error-msg5") !== null) {
			//remove red bg-color
			document.getElementById("address").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg5").remove();
		}
	};

	const removeErrorMsg6 = () => {
		if (document.getElementById("error-msg6") !== null) {
			//remove red bg-color
			document.getElementById("address").classList.remove("animate-input");
			//remove error tag
			document.getElementById("error-msg6").remove();
		}
	};

	const errorTagMeter = () => {
		//if tag already exists, don't add

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
	};

	const errorTagAddress = () => {
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
	};

	const errorTagNaN = () => {
		//add error tag only if it does not already exist
		let result = waterLevelDiv.contains(errorParagraph); 
		if (result === false) {
			//create error paragraph, id and add class
			let errorParagraph = document.createElement("p");
			errorParagraph.className = "error-msg";
			errorParagraph.id = "error-msg3";
			//add arrow to error paragraph
			let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
			errorParagraph.innerHTML = arrow;
			//add text to paragraph
			let txtNode = document.createTextNode(
				"  Please enter numeric values only!"
			);
			errorParagraph.appendChild(txtNode);
			//add paragraph to container
			waterLevelDiv.appendChild(errorParagraph);
		}
	};

	const errorTagMeterValue = () => {
		//create error paragraph, id and add class
		let errorParagraph = document.createElement("p");
		errorParagraph.className = "error-msg";
		errorParagraph.id = "error-msg4";
		//add arrow to error paragraph
		let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
		errorParagraph.innerHTML = arrow;
		//add text to paragraph
		let txtNode = document.createTextNode("  Enter correct meter reading");
		errorParagraph.appendChild(txtNode);
		//add paragraph to container
		waterLevelDiv.appendChild(errorParagraph);
	};

	const errorTagInvalidAddress = () => {
		//create error paragraph, id and add class
		let errorParagraph = document.createElement("p");
		errorParagraph.className = "error-msg";
		errorParagraph.id = "error-msg5";
		//add arrow to error paragraph
		let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
		errorParagraph.innerHTML = arrow;
		//add text to paragraph
		let txtNode = document.createTextNode("  Address is invalid");
		errorParagraph.appendChild(txtNode);
		//add paragraph to container
		addressDiv.appendChild(errorParagraph);
	};

	const errorTagAddressValue = () => {
		//create error paragraph, id and add class
		let errorParagraph = document.createElement("p");
		errorParagraph.className = "error-msg";
		errorParagraph.id = "error-msg6";
		//add arrow to error paragraph
		let arrow = '<i class= "fas fa-arrow-circle-left" ></i >';
		errorParagraph.innerHTML = arrow;
		//add text to paragraph
		let txtNode = document.createTextNode("  Address too long");
		errorParagraph.appendChild(txtNode);
		//add paragraph to container
		addressDiv.appendChild(errorParagraph);
	};

	const checkForWaterLevelInput = () => {
		if (
			waterLevel.value === "" &&
			document.getElementById("error-msg2") === null
		) {
			//create error tag for water meter reading
			errorTagMeter();
			//animate water meter input
			shakeMeterInput();
		}
	};

	const checkForAddressInput = () => {
		if (
			address.value === "" &&
			document.getElementById("error-msg1") === null
		) {
			//create error tag
			errorTagAddress();
			//animate address input
			shakeAddressInput();
		}
	};

	const verifyAddressInput = () => {
		let houseAddress = address.value.trim();

		//check if input is alphanumeric
		let regex = /\w+/;
		if (!regex.test(houseAddress)) {
			//animate water meter input
			shakeAddressInput();
			//show error tag
			errorTagInvalidAddress();
		} else {
			//remove error tag
			removeErrorMsg5();
		}

		//Number of characters must not go above max
		let addressArr = houseAddress.split("");
		if (addressArr.length > 100) {
			//animate water meter input
			shakeAddressInput();
			//show error tag
			errorTagAddressValue();
		} else {
			//remove error tag
			removeErrorMsg6();
		}
	};

	const verifyMeterInput = () => {
		let meterReading = waterLevel.value.trim();
		//check if input is numeric
		let regex = /\d+/;
		if (!regex.test(meterReading)) {
			//animate water meter input
			shakeMeterInput();
			//show error tag
			errorTagNaN();
		} else {
			//remove error tag
			removeErrorMsg3();
		}

		//Number of characters must not go above max
		let meterArr = meterReading.split("");
		if (meterArr.length > 10) {
			//animate water meter input
			shakeMeterInput();
			//show error tag
			errorTagMeterValue();
		} else {
			//remove error tag
			removeErrorMsg4();
		}
	};

	const verifyInput = function (e) {
		if (waterLevel.value !== "" && address.value !== "") {
			verifyAddressInput();
			verifyMeterInput();
			e.preventDefault();
		} else {
			//CHECK USER INPUT
			checkForWaterLevelInput();
			checkForAddressInput();
			e.preventDefault();
		}

		//if user input has errors then show error and prevent form from sending

		//if user input is correct then send
	};

	//check input when user clicks submit
	submitBtn.addEventListener("click", verifyInput);

	//remove error msgs
	waterLevel.addEventListener("keyup", removeErrorMsg2);
	waterLevel.addEventListener("keyup", removeErrorMsg3);
	waterLevel.addEventListener("keyup", removeErrorMsg4);

	address.addEventListener("keyup", removeErrorMsg1);
	address.addEventListener("keyup", removeErrorMsg5);
	address.addEventListener("keyup", removeErrorMsg6);

	*/
});
