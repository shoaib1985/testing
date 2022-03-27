import React from "react";

const Navbar = ({ filterItems, menuItems }) => {
  return (
    <>
      <nav className="navbar" style={{ textAlign: "center" }}>
        <div className="btn-group">
          {menuItems.map((item, index) => {
            return (
              <button
                key={index}
                className="btn-group__items"
                onClick={() => {
                  filterItems(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
