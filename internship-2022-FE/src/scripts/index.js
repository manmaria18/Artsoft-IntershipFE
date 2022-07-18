import '../styles/main.scss';

// import FrontPage from './FrontPage';
// import {Modal} from 'bootstrap';

// const modalNode = document.getElementById('exampleModal');
// new Modal(modalNode);

// const frontPage = new FrontPage(document.getElementById('modalButton'));
// frontPage.registerEvents();

import AppRouter from './AppRouter';





new AppRouter({
  elements: '.page',
  routes: [
    {
      match: '/',
      target: 'home',
    },
    {
      match: '/admin',
      target: 'admin',
    },
  ],
});


// const modalPencil = new FrontPage(document.getElementById('modalPencil'));
// modalPencil.registerEvents();

//button.registerEvents();
//cta.registerEvents();
//cta.changeBgColor();
//modalButton.registerEvents();