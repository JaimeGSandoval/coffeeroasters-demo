import Home from './views/Home';
import About from './views/About';
import Plan from './views/Plan';
import '../sass/main.scss';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  console.log(window.location);

  router();
};

const router = () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/about', view: About },
    { path: '/plan', view: Plan },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: window.location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
    };
  }

  const view = new match.route.view();

  document.getElementById('app').innerHTML = view.getHtml();
};

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
