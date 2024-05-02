// Ancora do ex. 1
const aExercicio1 = document.createElement('a');
aExercicio1.setAttribute('href', '/index.html');
aExercicio1.innerHTML = 'Home';

const liExercicio1 = document.createElement('li');
liExercicio1.appendChild(aExercicio1);

const ulNav = documentcreateElement('ul');
ulNav.appendChild(liExercicio1);

const nav = document.createElement('nav');
nav.classList.add('menu-navegacao');
nav.appendChild(ulNav);
const divMenuLogo = document.create
// document.body.insertBefore(nav, document.body.firstChild);
document.body.insertAdjacentElement('afterbegin', nav);
document.body.append(nav);

const linkNavbar = document.createElement('link');
linkNavbar.setAttribute('rel', 'stylesheet');
linkNavbar.setAttribute('href', '/cc/navbar.css');

 document.head.appendChild(linkNavbar);