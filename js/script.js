document.addEventListener('DOMContentLoaded', function() {
    // ===== Mobile Navigation Toggler =====
    const navToggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const navLinks = document.querySelectorAll('.nav li a');
    
    navToggler.addEventListener('click', () => {
        aside.classList.toggle('open');
        navToggler.classList.toggle('open');
    });

    // Close mobile nav when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (aside.classList.contains('open')) {
                aside.classList.remove('open');
                navToggler.classList.remove('open');
            }
        });
    });

    // ===== Sticky Header =====
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            aside.classList.add('sticky');
        } else {
            aside.classList.remove('sticky');
        }
    });

    // ===== Active Section Highlight =====
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Responsive Adjustments =====
    function handleResponsive() {
        if (window.innerWidth < 992) {
            aside.style.left = '-270px';
            navToggler.style.display = 'flex';
        } else {
            aside.style.left = '0';
            navToggler.style.display = 'none';
        }
    }

    // Initialize and handle resize
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
});