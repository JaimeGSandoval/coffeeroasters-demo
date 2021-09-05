import AbstractView from './AbstractView';

class Home extends AbstractView {
  constructor() {
    super();
    this.setTitle('Coffeeroasters');
  }

  getHtml() {
    return `
    <section class="hero-section">
      <picture>
        <source srcset="./images/mobile/hero-coffeepress.webp">
        <img src="./images/mobile/hero-coffeepress.jpg" alt="image of coffee beans" class="hero">
      </picture>
      <span class="centered-text-top">great coffee</span>
      <span class="centered-text-bottom">made simple.</span>
      <span class="hero-description">
        Start your mornings with the world’s best coffees. Try our expertly curated artisan
        coffees from our best roasters delivered directly to your door, at your schedule.
      </span>
      <button class="create-plan-btn">create a plan</button>
    </section>
    `;
  }
}

export default Home;
