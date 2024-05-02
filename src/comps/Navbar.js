import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#f0f0f0", padding: "10px 20px" }}>
      <Link
        to="/pixa"
        style={{ textDecoration: "none", color: "black", fontSize: "20px" }}
      >
        Pixa
      </Link>
    </nav>
  );
};

export default Navbar;
