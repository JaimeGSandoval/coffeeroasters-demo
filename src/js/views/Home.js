import AbstractView from './AbstractView';

class Home extends AbstractView {
  constructor() {
    super();
    this.setTitle('Coffeeroasters');
  }

  getHtml() {
    return ``;
  }
}

export default Home;
