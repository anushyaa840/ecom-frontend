function Cart({ cart, updateQuantity, removeFromCart }) {
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h2 className="page-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>🛒 Your cart is empty</p>
          <a href="/products"><button className="btn btn-primary">Continue Shopping</button></a>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">₹{item.price}</p>
                </div>
                
                <div className="cart-item-quantity">
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity-display">{item.quantity}</span>
                  <button 
                    className="quantity-btn" 
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div className="cart-item-total">
                  <p>₹{item.price * item.quantity}</p>
                </div>
                
                <button 
                  className="btn btn-remove" 
                  onClick={() => removeFromCart(item._id)}
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="summary-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>₹{totalPrice}</span>
            </div>
            <button className="btn btn-checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
