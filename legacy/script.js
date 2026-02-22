document.addEventListener('DOMContentLoaded', () => {

    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeText = document.querySelector('.welcome-text');
    const welcomeSubtext = document.querySelector('.welcome-subtext');
    const heroBio = document.getElementById('hero-bio');

    // --- Welcome Screen Logic ---
    // Prevent scrolling while welcome screen is up
    document.body.style.overflow = 'hidden';

    // Start fade in animations for text immediately after load
    setTimeout(() => {
        welcomeText.classList.remove('opacity-0', 'translate-y-10');
        welcomeSubtext.classList.remove('opacity-0', 'translate-y-10');
    }, 100);

    // Fade out and remove welcome screen after 2.5 seconds
    setTimeout(() => {
        welcomeScreen.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = ''; // Restore scrolling

        // Start typing effect after welcome screen fades
        setTimeout(typeBio, 1000);
    }, 2500);

    // Completely remove from DOM after fade out completes
    setTimeout(() => {
        welcomeScreen.remove();
    }, 3500);

    // --- Typing Effect Logic ---
    const bioText = "Data Analyst and Full-Stack Developer experienced in Power BI, SQL, and Python, with a track record of building automated dashboards and data-driven applications using the MERN stack. Adept at data extraction, transformation, and visualization. Passionate about solving real-world challenges with end-to-end technology solutions.";
    let charIndex = 0;

    function typeBio() {
        if (charIndex < bioText.length) {
            heroBio.innerHTML = bioText.substring(0, charIndex + 1) + '<span class="cursor"></span>';
            charIndex++;
            setTimeout(typeBio, 30); // Typing speed
        } else {
            heroBio.innerHTML = bioText; // Remove cursor when done
        }
    }

    // --- Material Ripple Effect ---
    const materialBtns = document.querySelectorAll('.material-btn');
    materialBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });

    // --- Theme Dropdown and Switching Logic ---
    const themeDropdownBtn = document.getElementById('themeDropdownBtn');
    const themeDropdownMenu = document.getElementById('themeDropdownMenu');
    let dropdownOpen = false;

    themeDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent clicking button from immediately closing it
        dropdownOpen = !dropdownOpen;
        if (dropdownOpen) {
            themeDropdownMenu.classList.remove('hidden');
            themeDropdownMenu.classList.add('flex');
        } else {
            themeDropdownMenu.classList.add('hidden');
            themeDropdownMenu.classList.remove('flex');
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (dropdownOpen && !themeDropdownMenu.contains(e.target) && e.target !== themeDropdownBtn) {
            dropdownOpen = false;
            themeDropdownMenu.classList.add('hidden');
            themeDropdownMenu.classList.remove('flex');
        }
    });

    const themeButtons = document.querySelectorAll('.theme-btn');
    const htmlElement = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    if (savedTheme !== 'default') {
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');

            if (theme === 'default') {
                htmlElement.removeAttribute('data-theme');
                localStorage.setItem('portfolio-theme', 'default');
            } else {
                htmlElement.setAttribute('data-theme', theme);
                localStorage.setItem('portfolio-theme', theme);
            }

            // Close dropdown after selecting a theme
            dropdownOpen = false;
            themeDropdownMenu.classList.add('hidden');
            themeDropdownMenu.classList.remove('flex');
        });
    });

    // --- Interactive Rive Integration ---
    // Make sure the Rive runtime is loaded (handled via CDN in index.html)
    // Instantiating a placeholder public vehicle animation.
    // The user can replace the `src` with their own .riv file path or URL.
    try {
        const heroRiveCanvas = document.getElementById('rive-hero-canvas');
        if (typeof rive !== 'undefined' && heroRiveCanvas) {
            new rive.Rive({
                src: 'https://cdn.rive.app/animations/vehicles.riv', // Placeholder URL
                canvas: heroRiveCanvas,
                autoplay: true,
                stateMachines: 'bumpy',
                onLoad: () => {
                    console.log("Rive animation loaded successfully.");
                }
            });
        }
    } catch (error) {
        console.warn("Rive error:", error);
    }

});
