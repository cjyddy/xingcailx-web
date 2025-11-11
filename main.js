// Mobile nav toggle
(function () {
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.querySelector('.site-nav');
	if (!toggle || !nav) return;
	toggle.addEventListener('click', function () {
		const isOpen = nav.classList.toggle('open');
		toggle.setAttribute('aria-expanded', String(isOpen));
	});
})();

// Smooth scroll for in-page anchors
(function () {
	const links = document.querySelectorAll('a[href^="#"]');
	const header = document.querySelector('.site-header');
	const headerHeight = header ? header.offsetHeight : 0;

	function smoothScrollTo(target) {
		const el = document.querySelector(target);
		if (!el) return;
		const top = el.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 6);
		window.scrollTo({ top, behavior: 'smooth' });
	}

	links.forEach(function (link) {
		link.addEventListener('click', function (e) {
			const href = link.getAttribute('href');
			if (!href || href === '#') return;
			if (href.startsWith('#')) {
				e.preventDefault();
				// close nav on mobile
				const nav = document.querySelector('.site-nav');
				if (nav && nav.classList.contains('open')) {
					nav.classList.remove('open');
					const toggle = document.querySelector('.nav-toggle');
					if (toggle) toggle.setAttribute('aria-expanded', 'false');
				}
				smoothScrollTo(href);
			}
		});
	});
})();

// Fake contact form submission
(function () {
	const form = document.querySelector('.contact-form');
	if (!form) return;
	form.addEventListener('submit', function () {
		alert('感谢您的留言，我们会尽快与您联系！');
		form.reset();
	});
})();



