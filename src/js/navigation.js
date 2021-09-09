// import Home from './views/Home';
// import About from './views/About';
// import Plan from './views/Plan';

// const mobileNavOpen = () => {
//   document.querySelector('.mobile-nav-page').classList.toggle('show');
// };

// document
//   .querySelector('.hamburger-menu')
//   .addEventListener('click', mobileNavOpen);

// const mobileNavClose = () => {
//   document.querySelector('.mobile-nav-page').classList.toggle('show');
// };

// document
//   .querySelector('.mobile-close')
//   .addEventListener('click', mobileNavClose);

// const navigateTo = (url) => {
//   history.pushState(null, null, url);

//   router();
// };

// const router = () => {
//   // create possible routes
//   const routes = [
//     { path: '/', view: Home },
//     { path: '/about', view: About },
//     { path: '/plan', view: Plan },
//   ];

//   // map through routes to find the one that matches the pathname
//   const potentialMatches = routes.map((route) => {
//     return {
//       route: route,
//       isMatch: window.location.pathname === route.path,
//     };
//   });

//   // find the truthy match that'll be our route
//   let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

//   if (!match) {
//     match = {
//       route: routes[0],
//     };
//   }

//   // create new view based on route
//   const view = new match.route.view();

//   document.getElementById('app').innerHTML = view.getHtml();
// };

// // every time the back or forward browser navigation is clicked set the route
// window.addEventListener('popstate', router);

// document.addEventListener('DOMContentLoaded', () => {
//   document.body.addEventListener('click', (e) => {
//     e.preventDefault();
//     if (e.target.matches('[data-footer-link]')) {
//       navigateTo(e.target.href);
//     } else if (e.target.matches('[data-link]')) {
//       navigateTo(e.target.href);
//       mobileNavClose();
//     } else if (e.target.matches('[data-plan]')) {
//       navigateTo('/plan');
//     }
//   });

//   router();
// });
