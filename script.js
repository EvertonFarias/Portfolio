
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


//for move the form
let isDragging = false;
let offsetX = 0;
let offsetY = 0;


formHidden.addEventListener('mousedown', (e) => {

    isDragging = true;
    

    offsetX = e.clientX - formHidden.offsetLeft;
    offsetY = e.clientY - formHidden.offsetTop;
    

    document.body.style.userSelect = 'none';
});


document.addEventListener('mousemove', (e) => {
    if (isDragging) {

        let left = e.clientX - offsetX;
        let top = e.clientY - offsetY;
        

        formHidden.style.left = left + 'px';
        formHidden.style.top = top + 'px';
    }
});

document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        document.body.style.userSelect = '';
    }
});
