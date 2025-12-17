import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        background: "#5b4b63",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        color: "white",
      }}
    >
      <h2>AS-shopping</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
