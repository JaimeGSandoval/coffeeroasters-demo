import AbstractView from './AbstractView';

class Plan extends AbstractView {
  constructor() {
    super();
    this.setTitle('Plan:Coffeeroasters');
  }

  getHtml() {
    return `<h1>Plan Page</h1>`;
  }
}

export default Plan;
