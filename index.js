let reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let showAnimations = Boolean;

startWithAnimations = () => {
	let button = document.querySelector(".toggle--animations");	
	if (typeof(button.animate) !== "function") {
		button.disabled = true;
		return showAnimations = false;
	}
}

toggleAnimations = () => {
	showAnimations = !showAnimations;
	let button = document.querySelector(".toggle--animations");
	button.textContent === "Disable animations 🔒"
	? button.textContent = "Enable animations 🔓"
	: button.textContent = "Disable animations 🔒";
}

toggleTheme = () => {
	const root = document.documentElement;
	let button = document.querySelector(".toggle--theme");
	if (root.hasAttribute("data-theme")) {
		root.removeAttribute("data-theme");
		button.textContent = "Dark theme 🔦";
	} else {
		root.setAttribute("data-theme", "dark");
		button.textContent = "Light theme 💡";
	}
}

rollDice = () => {
	const dice = document.querySelectorAll(".dice");
	if (showAnimations) {
		dice.forEach(die => {
			die.animate(animate, {duration: 750});
		});

		for(let i = 0; i < 12; i++) {
			setTimeout(() => {
				hideDice();
				showDice();
			}, i*70);
		}
	} else {
		hideDice();
		showDice();
	}
}

showDice = () => {
	const dice = document.querySelectorAll(".dice");
	hideDice();
	dice.forEach(die => {
		// die.animate(animate, {duration: 1000});
		const randomNumber = Math.floor(Math.random() * 6) + 1;
		const randomSide = "dice__side--" + randomNumber;
		const diceSide = die.querySelector("." + randomSide);
		diceSide.style.display = "block";
	});
}

hideDice = () => {
	const diceSides = document.querySelectorAll(".dice__side");
	diceSides.forEach(diceSide => {
		diceSide.style.display = "none";
	});
}

const animate = [
	{ transform: 'rotate(360deg)' }
];

document.addEventListener("DOMContentLoaded", function() {
	startWithAnimations();
	rollDice();
});