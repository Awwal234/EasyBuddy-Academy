const openMenu = document.getElementById('openMenu');
const cancel = document.getElementById('cancel');
const board = document.getElementById('menu-drop');

openMenu.onclick = function () {
	openMenu.style.display = 'none';
	board.style.display = 'block';
};

cancel.onclick = function () {
	openMenu.style.display = 'block';
	board.style.display = 'none';
};

var about,
	team,
	waitlist,
	lmore,
	nontech,
	tech,
	instructor,
	firstMore,
	instruct;
about = document.getElementById('about');
team = document.getElementById('team');
waitlist = document.getElementById('waitlist');
lmore = document.getElementById('lmore');
nontech = document.getElementById('nontech');
tech = document.getElementById('tech');
instructor = document.getElementById('instructor');
firstMore = document.getElementById('firstMore');
instruct = document.getElementById('instruct');

about.onclick = () => (window.location.href = 'comingsoon.html');
team.onclick = () => (window.location.href = 'comingsoon.html');
waitlist.onclick = () => (window.location.href = 'waitlist.html');
lmore.onclick = () => (window.location.href = 'comingsoon.html');
nontech.onclick = () => (window.location.href = 'waitlist.html');
tech.onclick = () => (window.location.href = 'waitlist.html');
instructor.onclick = () => (window.location.href = 'comingsoon.html');
firstMore.onclick = () => (window.location.href = '#lmore');
instruct.onclick = () => (window.location.href = 'instructorpage.html');
