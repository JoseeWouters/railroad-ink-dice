toggleTheme = () => {
	const root = document.documentElement;
	root.hasAttribute("data-theme") ? root.removeAttribute("data-theme") : root.setAttribute("data-theme", "dark");
}

rollDice = () => {
	const dice = document.querySelectorAll(".dice");
	const diceSides = document.querySelectorAll(".dice__side");
	diceSides.forEach(diceSide => {
		diceSide.style.display = "none";
	});
	dice.forEach(die => {
		const randomNumber = Math.floor(Math.random() * 6) + 1;
		const randomSide = "dice__side--" + randomNumber;
		const diceSide = die.querySelector("." + randomSide);
		diceSide.style.display = "block";
	});
}



document.addEventListener("DOMContentLoaded", function() {
	rollDice();
});