document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const closeBtn = document.getElementById('closeBtn');
    const mobileNav = document.getElementById('mobileNav');
    let overlay = document.querySelector('.overlay');

    if (!hamburgerBtn) {
        console.log("Creating hamburger button as it was not found");
        const newHamburgerBtn = document.createElement('button');
        newHamburgerBtn.id = 'hamburgerBtn';
        newHamburgerBtn.className = 'hamburger-btn';
        newHamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';

        const header = document.getElementById('header') || document.querySelector('header');
        if (header) {
            header.appendChild(newHamburgerBtn);
        } else {
            newHamburgerBtn.style.position = 'fixed';
            newHamburgerBtn.style.top = '20px';
            newHamburgerBtn.style.right = '20px';
            newHamburgerBtn.style.zIndex = '100';
            document.body.appendChild(newHamburgerBtn);
        }

        hamburgerBtn = newHamburgerBtn;
    }

    if (!overlay) {
        console.log("Creating overlay as it was not found");
        const newOverlay = document.createElement('div');
        newOverlay.className = 'overlay';
        document.body.appendChild(newOverlay);
        overlay = newOverlay;
    }

    function toggleMobileNav(show) {
        if (show) {
            mobileNav.classList.add('active');
            overlay.classList.add('active');
            console.log("Mobile menu opened");
        } else {
            mobileNav.classList.remove('active');
            overlay.classList.remove('active');
            console.log("Mobile menu closed");
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileNav(true);
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            toggleMobileNav(false);
        });
    }

    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href.startsWith('#')) {
                e.preventDefault();

                toggleMobileNav(false);

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 400);
                }
            } else {
                toggleMobileNav(false);
            }
        });
    });

    overlay.addEventListener('click', function () {
        toggleMobileNav(false);
    });

    const galaxyBg = document.getElementById('galaxyBg');
    if (galaxyBg) {
        galaxyBg.innerHTML = '';

        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            galaxyBg.appendChild(star);
        }
    }

    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    const heroText = document.getElementById('heroText');
    const heroImg = document.getElementById('heroImg');

    if (heroText) heroText.classList.add('visible');
    if (heroImg) heroImg.classList.add('visible');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.service-card, .project-card, .testimonial, .contact-form').forEach(el => {
        observer.observe(el);
    });

    setTimeout(() => {
        if (window.location.hash) {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }, 500);
}); 


