import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-page">
      <h2 className="page-title">Our Products</h2>
      
      <div className="product-gallery">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <div className="product-image">
              <img src={p.image} alt={p.name} />
            </div>
            
            <div className="product-info">
              <h3>{p.name}</h3>
              <p className="product-price">₹{p.price}</p>
              <p className="product-stock">In Stock: {p.stock}</p>
            </div>
            
            <div className="product-actions">
              <Link to={`/product/${p._id}`}>
                <button className="btn btn-view">View Details</button>
              </Link>
              <button className="btn btn-cart" onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
