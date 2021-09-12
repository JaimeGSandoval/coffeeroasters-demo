import AbstractView from './AbstractView';

class Plan extends AbstractView {
  constructor() {
    super();
    this.setTitle('Plan:Coffeeroasters');
  }

  getHtml() {
    return `
    <main>
      <section class="plan-about-section">
        <picture>
          <source srcset="./images/mobile/hero-blackcup.webp">
          <img src="./images/mobile/hero-blackcup.jpg" alt="White cupcake" class="hero-about">
        </picture>

        <span class="plan-title">Create a plan</span>
        <p class="plan-description">
          Build a subscription plan that best fits your needs. We offer an assortment of the best
          artisan coffees from around the globe delivered fresh to your door.
        </p>

      </section>

      <section class="plan-how-to-section">

        <div class="plan-step-box">
          <span class="plan-step-number">01</span>
          <h3 class="plan-step-title">Pick your coffee</h3>
          <p class="plan-step-description">
            Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div class="plan-step-box">
          <span class="plan-step-number">02</span>
          <h3 class="plan-step-title">Choose the frequency</h3>
          <p class="plan-step-description custom-step-padding-1">
            Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.
          </p>
        </div>

        <div class="plan-step-box">
          <span class="plan-step-number">03</span>
          <h3 class="plan-step-title">Receive and enjoy!</h3>
          <p class="plan-step-description custom-step-padding-1">
            We ship your product within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.
          </p>
        </div>
      </section>

      <section class="options-section">

        <div class="option-container">
          <h1 class="option-title-question">How do you drink your coffee?</h1>
          <img src="./icons/icon-arrow.svg" alt="Arrow icon" class="arrow" data-arrow>
          <div class="options-container">

            <div class="option-box" data-option data-option-first>
              <h2 class="option-title" data-option-title data-option-title-first>Capsules</h2>
              <p class="option-description" data-option-description data-option-description-first>
                Compatible with Nespresso systems and and similar brewers
              </p>
            </div>

            <div class="option-box" data-option>
              <h2 class="option-title" data-option-title>Filter</h2>
              <p class="option-description" data-option-description>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>

            <div class="option-box" data-option data-option-last>
              <h2 class="option-title" data-option-title data-option-title-last>Espresso</h2>
              <p class="option-description" data-option-description data-option-description-last>
                Dense and finely ground beans for an intense, flavorful experience
              </p>
            </div>

          </div>
        </div>


        <div class="option-container">
          <h1 class="option-title-question">What type of coffee?</h1>
          <img src="./icons/icon-arrow.svg" alt="Arrow icon" class="arrow" data-arrow>
          <div class="options-container">
            <div class="option-box" data-option data-option-first>
              <h2 class="option-title" data-option-title data-option-title-first>Single Origin</h2>
              <p class="option-description" data-option-description data-option-description-first>
                Distinct, high quality coffee from a specific family-owned farm
              </p>
            </div>

            <div class="option-box" data-option>
              <h2 class="option-title" data-option-title>Decaf</h2>
              <p class="option-description" data-option-description>
                Just like regular coffee, except the caffeine has been removed
              </p>
            </div>

            <div class="option-box" data-option data-option-last>
              <h2 class="option-title" data-option-title data-option-title-last>Blended</h2>
              <p class="option-description" data-option-description data-option-description-last>
                Combination of two or three dark roasted beans of organic coffees
              </p>
            </div>
          </div>
        </div>


        <div class="option-container">
          <h1 class="option-title-question">How much would you like?</h1>
          <img src="./icons/icon-arrow.svg" alt="Arrow icon" class="arrow" data-arrow>
          <div class="options-container">
            <div class="option-box" data-option data-option-first>
              <h2 class="option-title" data-option-title data-option-title-first>250g</h2>
              <p class="option-description" data-option-description data-option-description-first>
                Perfect for the solo drinker. Yields about 12 delicious cups.
              </p>
            </div>

            <div class="option-box" data-option>
              <h2 class="option-title" data-option-title>500g</h2>
              <p class="option-description" data-option-description>
                Perfect option for a couple. Yields about 40 delectable cups.
              </p>
            </div>

            <div class="option-box" data-option data-option-last>
              <h2 class="option-title" data-option-title data-option-title-last>1000g</h2>
              <p class="option-description" data-option-description data-option-description-last>
                Perfect for offices and events. Yields about 90 delightful cups.
              </p>
            </div>
          </div>
        </div>


        <div class="option-container">
          <h1 class="option-title-question">Want us to grind them?</h1>
          <img src="./icons/icon-arrow.svg" alt="Arrow icon" class="arrow" data-arrow>
          <div class="options-container">
            <div class="option-box" data-option data-option-first>
              <h2 class="option-title" data-option-title data-option-title-first>Whole Bean</h2>
              <p class="option-description" data-option-description data-option-description-first>
                Best choice if you cherish the full sensory experience
              </p>
            </div>

            <div class="option-box" data-option>
              <h2 class="option-title" data-option-title>Filter</h2>
              <p class="option-description" data-option-description>
                For pour over or drip methods like Aeropress, Chemex, and V60
              </p>
            </div>

            <div class="option-box" data-option data-option-last>
              <h2 class="option-title" data-option-title data-option-title-last>Cafetiére</h2>
              <p class="option-description" data-option-description data-option-description-last>
                Course ground beans specially suited for french press coffee
              </p>
            </div>
          </div>
        </div>


        <div class="option-container">
          <h1 class="option-title-question">How often should we deliver?</h1>
          <img src="./icons/icon-arrow.svg" alt="Arrow icon" class="arrow" data-arrow>
          <div class="options-container">
            <div class="option-box" data-option data-option-first>
              <h2 class="option-title" data-option-title data-option-title-first>Every week</h2>
              <p class="option-description" data-option-description data-option-description-first>
                $14.00 per shipment. Includes free first-class shipping.
              </p>
            </div>

            <div class="option-box" data-option>
              <h2 class="option-title" data-option-title>Every 2 weeks</h2>
              <p class="option-description" data-option-description>
                $17.25 per shipment. Includes free priority shipping.
              </p>
            </div>

            <div class="option-box" data-option data-option-last>
              <h2 class="option-title" data-option-title data-option-title-last>Every month</h2>
              <p class="option-description" data-option-description data-option-description-last>
                $22.50 per shipment. Includes free priority shipping.
              </p>
            </div>
          </div>
        </div>

      </section>

      <section class="order-container">
        <div class="order-summary-text-box">
          <h1 class="order-summary-title">order summary</h1>
          <p class="order-summary-text">“I drink coffee as filter, with a Decaf type of bean. 250g ground ala Cafetiére,
            sent to me Every Week.”</p>
        </div>
      </section>

      <div class="create-plan-order-container">
        <button class="create-plan-order" data-plan>create my plan</button>
      </div>
    </main>

    <footer class="footer">
      <div class="footer-container">
        <img src="./icons/footer-logo.svg" class="footer-logo" alt="logo">
        <ul class="footer-nav">
          <li>
            <a href="/" class="footer-nav-link" data-footer-link>home</a>
          </li>
          <li>
            <a href="/about" class="footer-nav-link" data-footer-link>about us</a>
          </li>
          <li>
            <a href="/plan" class="footer-nav-link" data-footer-link>create a plan</a>
          </li>
        </ul>

        <div class="social-icons-box">
          <a href="#">
            <img src="./icons/icon-facebook.svg" class="mobile-footer-logo" alt="facebook logo">
          </a>
          <a href="#">
            <img src="./icons/icon-twitter.svg" class="mobile-footer-logo" alt="twitter logo">
          </a>
          <a href="#">
            <img src="./icons/icon-instagram.svg" class="mobile-footer-logo" alt="instagram logo">
          </a>
        </div>
      </div>
    </footer>
    `;
  }
}

export default Plan;
