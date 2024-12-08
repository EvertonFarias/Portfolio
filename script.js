
const menuButton = document.querySelector('abbr');
const menuOverlay = document.getElementById('menu-overlay');
const menuLinks = menuOverlay.querySelectorAll('a'); 




menuButton.addEventListener('click', () => {
    menuOverlay.style.display = (menuOverlay.style.display === 'none' || menuOverlay.style.display === '') ? 'flex' : 'none';
});


menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.style.display = 'none';
    }
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.style.display = 'none'; 
    });
});

const emailButton = document.getElementById("btn-email");
const formHidden = document.getElementById("form-hidden");


emailButton.addEventListener('click', () => {
    formHidden.style.display = formHidden.style.display === 'flex' ? 'none' : 'flex';
    formHidden.classList.toggle('show');
});

formHidden.addEventListener('click', (e) => {
    if (e.target === formHidden) {
        formHidden.style.display = 'none';
        formHidden.classList.remove('show');
    }
});



