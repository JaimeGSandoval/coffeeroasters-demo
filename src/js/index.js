import Home from './views/Home';
import About from './views/About';
import Plan from './views/Plan';
import '../sass/main.scss';

const navigateTo = (url) => {
  history.pushState(null, null, url);

  router();
};

const router = () => {
  // create possible routes
  const routes = [
    { path: '/', view: Home },
    { path: '/about', view: About },
    { path: '/plan', view: Plan },
  ];

  // map through routes to find the one that matches the pathname
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: window.location.pathname === route.path,
    };
  });

  // find the truthy match that'll be our route
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
    };
  }

  // create new view based on route
  const view = new match.route.view();

  document.getElementById('app').innerHTML = view.getHtml();
};

// every time the back or forward browser navigation is clicked set the route
window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
