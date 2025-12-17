import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <img src='/myshop/banner-1.jpg' alt='banner' className='hero-banner' />
        <div className="hero-content">
          <h1>Welcome to AS Shop 🛒</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products">
            <button className="btn btn-primary">Shop Now</button>
          </Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>🚚 Free Delivery</h3>
          <p>On orders above ₹500</p>
        </div>
        <div className="feature-card">
          <h3>💳 Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
        <div className="feature-card">
          <h3>🔄 Easy Returns</h3>
          <p>7-day return policy</p>
        </div>
        <div className="feature-card">
          <h3>⭐ Quality Products</h3>
          <p>Verified and authentic</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
