import AbstractView from './AbstractView';

class About extends AbstractView {
  constructor() {
    super();
    this.setTitle('About:Coffeeroasters');
  }

  getHtml() {
    return `<h1>About page</h1>`;
  }
}

export default About;
