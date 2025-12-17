import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-details">
      <button className="btn btn-back" onClick={() => navigate('/products')}>← Back to Products</button>
      
      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="details-description">{product.description}</p>
          <h2 className="details-price">₹{product.price}</h2>
          <p className="details-stock">
            {product.stock > 0 ? `✅ In Stock: ${product.stock} available` : '❌ Out of Stock'}
          </p>
          
          <button 
            className="btn btn-add-cart" 
            onClick={() => {
              addToCart(product);
              alert('Product added to cart!');
            }}
            disabled={product.stock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
