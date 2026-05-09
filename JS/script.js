const toggleBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
const loginBtn = document.querySelector('.login-btn');
const overlay = document.querySelector('.login-overlay');
const loginSubmit = document.querySelector('.login-submit')

loginBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});
overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target === loginSubmit) {
        overlay.style.display = 'none';
    }
});