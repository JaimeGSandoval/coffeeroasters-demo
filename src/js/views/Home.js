import AbstractView from './AbstractView';

class Home extends AbstractView {
  constructor() {
    super();
    this.setTitle('Coffeeroasters');
  }

  getHtml() {
    return `<h1>Home Page</h1>`;
  }
}

export default Home;
