const toggle = document.getElementById('toggle'); 
const menu = document.getElementById('menu');     
const close = document.getElementById('close');   

toggle.addEventListener('click', () => {
    toggle.style.display = 'none';
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.style.display = 'flex';
});