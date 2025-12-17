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
    <div className="products">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <img src={p.image} alt={p.name} width="150" />

            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <p>Stock: {p.stock}</p>

            <Link to={`/product/${p._id}`}>
              <button>View</button>
            </Link>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
