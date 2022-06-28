const menu = document.querySelector('#mobile-menu');
const menulist = document.querySelector('.navbar_menu');
menu.addEventListener('click',function(){
    menu.classList.toggle('isactive');
    menulist.classList.toggle('active');
});