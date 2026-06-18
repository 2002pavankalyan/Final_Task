import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            #1 Online Store
          </span>

          <h1>
            Discover Premium
            <br />
            Products Today
          </h1>

          <p>
            Shop thousands of quality
            products with fast delivery
            and secure payments.
          </p>

          <Link
            to="/products"
            className="hero-btn"
          >
            Explore Products →
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          🚚 Fast Delivery
        </div>

        <div className="feature-card">
          💳 Secure Payment
        </div>

        <div className="feature-card">
          ⭐ Premium Quality
        </div>

        <div className="feature-card">
          📞 24/7 Support
        </div>
      </section>
    </>
  );
}

export default Home;