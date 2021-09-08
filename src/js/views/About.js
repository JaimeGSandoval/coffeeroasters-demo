import AbstractView from './AbstractView';

class About extends AbstractView {
  constructor() {
    super();
    this.setTitle('About:Coffeeroasters');
  }

  getHtml() {
    return `
    <main>
      <section class="hero-about-section">
        <picture>
          <source srcset="./images/mobile/hero-whitecup.webp">
          <img src="./images/mobile/hero-whitecup.jpg" alt="White cupcake" class="hero-about">
        </picture>

        <span class="about-us-title">about us</span>
        <p class="about-us-description">
          Coffeeroasters began it's journey of exotic discovery in 1998, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew
          -
          in every shipment.
        </p>

      </section>

      <section class="about-commitment-section">
        <picture>
          <source srcset="./images/mobile/commitment.webp">
          <img src="./images/mobile/commitment.jpg" alt="Image of coffee worker" class="commitment-img">
        </picture>

        <h1 class="commitment-title">Our commitment</h1>
        <p class="commitment-description">
          We’re built on a simple mission and a commitment to doing good along the way. We want to
          make it easy for you to discover and brew the world’s best coffee at home. It all starts
          at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
          a year trying to understand the challenges and opportunities in each of these places.
          We collaborate with exceptional coffee growers and empower a global community of farmers
          through with well above fair-trade benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the finest blends, we roast
          each lot to highlight tasting profiles distinctive to their native growing region.
        </p>
      </section>

      <section class="quality-section">
        <picture>
          <source srcset="./images/mobile/quality.webp">
          <img src="./images/mobile/quality.jpg" alt="Image of coffee worker" class="quality-img">
        </picture>

        <div class="quality-text-box">
          <h1 class="quality-title">Uncompromising quality</h1>
          <p class="quality-description">
            Although we work with growers who pay close attention to all stages of harvest and processing,
            we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the
            coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast
            consistent, user-friendly coffee, so that brewing is easy and enjoyable.
          </p>

        </div>
      </section>

      <div class="headquarters-section">
        <h1 class="headquarters-title">Our headquarters</h1>
        <div class="address-container">
          <img src="./icons/uk.svg" alt="UK icon" class="country-icons">
          <h2 class="country-title">united kingdom</h2>
          <div class="address-text-box">
            <span class="address-text">68 Asfordby Rd</span>
            <span class="address-text">Alcaston</span>
            <span class="address-text">SY61YA</span>
            <span class="address-text">+44 1241 918425</span>
          </div>
        </div>

        <div class="address-container">
          <img src="./icons/canada.svg" alt="Canada icon" class="country-icons">
          <h2 class="country-title">canada</h2>
          <div class="address-text-box">
            <span class="address-text">1582 Eglinton Avenue</span>
            <span class="address-text">Toronto</span>
            <span class="address-text">Ontario M4P 1A6</span>
            <span class="address-text">+1 416 485 2997</span>
          </div>
        </div>

        <div class="address-container">
          <img src="./icons/canada.svg" alt="Australia icon" class="country-icons">
          <h2 class="country-title">australia</h2>
          <div class="address-text-box">
            <span class="address-text">36 Swanston Street</span>
            <span class="address-text">Kewell</span>
            <span class="address-text">Victoria</span>
            <span class="address-text">+614 9928 3629</span>
          </div>
        </div>
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

export default About;
