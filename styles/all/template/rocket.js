document.addEventListener('DOMContentLoaded', function () {
	const rocket = document.getElementById('rocket-top');
	if (!rocket) return;

	let shownOnce = false;

	window.addEventListener('scroll', function () {
		if (window.scrollY > 500 && !shownOnce) {
			rocket.classList.add('show');
			shownOnce = true;
		}

		if (window.scrollY < 200) {
			rocket.classList.remove('show');
			shownOnce = false;
		}
	});

	rocket.addEventListener('click', function () {
		rocket.classList.add('fly');

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

		setTimeout(() => {
			rocket.classList.remove('fly');
			rocket.classList.remove('show');
		}, 1100);
	});
});
