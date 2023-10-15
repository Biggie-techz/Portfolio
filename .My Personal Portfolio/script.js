function hamburger() {
    let menu = document.getElementById('menu');
    let menuContent = document.getElementById('menu-content')
    menu.classList.toggle('active')
    menuContent.classList.toggle('active')
}
function theme() {
    let theme = document.querySelector('.theme');
    theme.classList.toggle('active')
}