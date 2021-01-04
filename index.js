rollDices = () => {
	const dices = document.querySelectorAll(".dice");
	const diceSides = document.querySelectorAll(".dice__side");
	diceSides.forEach(diceSide => {
		diceSide.style.display = "none";
	});
	dices.forEach(dice => {
		const randomNumber = Math.floor(Math.random() * 6) + 1;
		const randomSide = "dice__side--" + randomNumber;
		const diceSide = dice.querySelector("." + randomSide);
		diceSide.style.display = "block";
	});
}