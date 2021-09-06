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

    <section class="collection-section">
      <h1 class="collection-header-text">our collection</h1>

      <div class="coffee-box">
        <div class="coffee-img-container">
          <picture>
            <source srcset="./images/coffee/gran-espresso.webp">
            <img src="./images/coffee/gran-espresso.png" alt="Gran espresso coffee" class="coffee-img">
          </picture>
        </div>

        <h2 class="coffee-title">gran espresso</h2>
        <p class="coffee-description">
          Light and flavorful blend with cocoa and black pepper for an intense experience
        </p>
      </div>

      <div class="coffee-box">
        <div class="coffee-img-container">
          <picture>
            <source srcset="./images/coffee/planalto.webp">
            <img src="./images/coffee/planalto.png" alt="Planalto coffee" class="coffee-img">
          </picture>
        </div>

        <h2 class="coffee-title">planalto</h2>
        <p class="coffee-description">
          Brazilian dark roast with rich velvety body, and hints of fruits and nuts
        </p>
      </div>

      <div class="coffee-box">
        <div class="coffee-img-container">
          <picture>
            <source srcset="./images/coffee/piccollo.webp">
            <img src="./images/coffee/piccollo.png" alt="Piccollo coffee" class="coffee-img">
          </picture>
        </div>

        <h2 class="coffee-title">piccillo</h2>
        <p class="coffee-description">
          Mild and smooth blend featuring notes of toasted almond and dried cherry
        </p>
      </div>

      <div class="coffee-box">
        <div class="coffee-img-container">
          <picture>
            <source srcset="./images/coffee/danche.webp">
            <img src="./images/coffee/danche.png" alt="danche coffee" class="coffee-img">
          </picture>
        </div>

        <h2 class="coffee-title">danche</h2>
        <p class="coffee-description">
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
    </section>

    <section class="choose-us-section">

      <div class="choose-description-container">
        <h2 class="choose-title">Why choose us?</h2>
        <p class="choose-description">
          A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience
          on every level.
        </p>
      </div>

      <div class="perks-bg">
        <div class="perks-container">

          <div class="perk-box">
            <img src="./icons/icon-coffee-bean.svg" alt="Coffee bean icon" class="perk-icon">
            <h3 class="perk-title">Best quality</h3>
            <p class="perk-description">
              Discover an endless variety of the world's artisan coffee from each of our roasters.
            </p>
          </div>

          <div class="perk-box">
            <img src="./icons/icon-gift.svg" alt="Gift icon" class="perk-icon">
            <h3 class="perk-title">Exclusive Benefits</h3>
            <p class="perk-description exclusive-padding">
              Special offers and swag when you subscribe, including 30% off your first shipment.
            </p>
          </div>

          <div class="perk-box">
            <img src="./icons/icon-truck.svg" alt="Truck icon" class="perk-icon">
            <h3 class="perk-title">Free shipping</h3>
            <p class="perk-description exclusive-padding">
              We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

export default Home;
