"use strict";
document.addEventListener("DOMContentLoaded", () => {
	//add DOM variables
	const submitBtn = document.getElementById("submit-btn");
	const waterLevel = document.getElementById("water-level");
	const address = document.getElementById("address");

	//function to verify typed input
    const verifyInput = function (e) {
        console.log('firing');
		let arrayInput = [];
        let regex = /d+/gi;
        
		//collect keyboard values
        arrayInput.push(e.target.value);
        console.log(arrayInput);

		//check if value is a valid number
        console.log(regex.test(arrayInput));
		if (regex.test(arrayInput)) {
			console.log("input is okay");
        } else {
            //console.log("regex did not pass");
        }
	};

	//function to verify all input
	const verifyAllInput = function (e) {
		e.preventDefault();
		console.log("Verify from submit");
		console.log(e.target.value);
	};

	//check input as it is typed in
	address.addEventListener("keyup", verifyInput);
	waterLevel.addEventListener("keyup", verifyInput);
	submitBtn.addEventListener("click", verifyAllInput);
});
