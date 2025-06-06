// Cursor circle
const moveCircle = (e) => {
	const circle = document.querySelector("#cursor-circle");
	const posY = e.pageY;
	const posX = e.pageX;

	circle.style.top = `${posY - 20}px`;
	circle.style.left = `${posX - 20}px`;
};
window.addEventListener("mousemove", moveCircle);

// Active nav item based on page position
const activeLink = () => {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll("#nav-links a");
	let index = sections.length;

	while (--index && window.scrollY + 250 < sections[index].offsetTop) {}

	navLinks.forEach((link) => link.classList.remove("active"));
	navLinks[index].classList.add("active");
};
activeLink();
window.addEventListener("scroll", activeLink);

// Interactive word toggle
const interactive = document.querySelector("#interactive");

interactive.addEventListener("click", () => {
	interactive.classList.toggle("toggle-inter");
});
