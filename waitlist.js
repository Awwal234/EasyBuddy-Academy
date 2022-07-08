const mail = document.getElementById('mail');
const btn = document.getElementById('btn');
const num = 0;
const num2 = 5;
const home = document.getElementById('home');
const homep = 'index.html';

btn.onclick = function () {
	if (mail.value.length === num || mail.value.length === num2) {
		const err = document.getElementById('errmsg');
		const message = 'enter a valid email address';
		err.style.display = 'block';
		err.innerHTML = message;

		setInterval(() => {
			err.style.display = 'none';
		}, 3000);

		return false;
	}
};

mail.onload = function () {
	mail.value = '';
};

home.addEventListener('click', () => {
	window.location.href = homep;
});
