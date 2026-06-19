import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Welcome to Shop Hub</h1>
        <p>
          Discover amazing products at unbeatable prices.
        </p>

        <Link to="/products">
          <button className="btn">Shop Now</button>
        </Link>
      </section>

      <section className="features">
        <div className="card">
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly.</p>
        </div>

        <div className="card">
          <h3>Secure Payment</h3>
          <p>100% safe and secure transactions.</p>
        </div>

        <div className="card">
          <h3>Best Quality</h3>
          <p>Top-rated products from trusted brands.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
