/**
 * Equathora Waitlist Page - Main JavaScript
 * Handles smooth scrolling and interactive features
 */

// Smooth scroll for navbar anchor links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Optional: Analytics tracking for waitlist clicks
const trackWaitlistClick = (source) => {
    console.log(`Waitlist button clicked from: ${source}`);
    // Add your analytics tracking code here (Google Analytics, etc.)
};

// Add event listeners to all waitlist buttons
document.querySelectorAll('a[href*="forms.gle"], a[href*="google.com/forms"]').forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent.trim();
        trackWaitlistClick(buttonText);
    });
});
