import React from "react";
const Navbar = () => {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contactus" },
  ];
  return (
    <header className="header">
      <div className="logo">space for logo</div>
      <nav className="nav">
        <ul className="nav-links">
          {navlinks.map((items) => (
            <li key={items.path} className="nav-item">
              <a href={items.path}>{items.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="auth-login">login</button>
        <button className="auth-signup">signup</button>
      </div>
    </header>
  );
};
export default Navbar;
