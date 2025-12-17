function Cart({ cart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <img src={item.image} width="100" />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
