const nam = document.getElementById('name');
const email = document.getElementById('email');
const errmssg = document.getElementById('err');
const button = document.getElementById('button');
const hom = document.getElementById('home');

hom.onclick = () => (window.location.href = 'index.html');

button.addEventListener('click', (e) => {
	if (nam.value.length <= 1) {
		e.preventDefault();
		errmssg.style.display = 'block';
		errmssg.innerHTML = 'Enter a valid name';

		setTimeout(() => {
			errmssg.style.display = 'none';
		}, 3000);

		return false;
	} else if (typeof 0 === nam.value) {
		e.preventDefault();
		errmssg.style.display = 'block';
		errmssg.innerHTML = 'Name should be in alphabets';

		setTimeout(() => {
			errmssg.style.display = 'none';
		}, 3000);

		return false;
	} else if (email.value.length <= 1) {
		e.preventDefault();
		errmssg.style.display = 'block';
		errmssg.innerHTML = 'Enter a valid email';

		setTimeout(() => {
			errmssg.style.display = 'none';
		}, 3000);

		return false;
	} else {
		window.location.href = '';
	}
});

console.log(nam, email, button, errmssg);
console.log(typeof 0);
