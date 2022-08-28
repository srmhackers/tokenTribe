import React from "react";

function Navbar({ menuState, setMenuState }) {
  return (
    <div className="nav">
      <button
        style={menuState === "merches" ? { backgroundColor: "#5D0951" } : {}}
        className="n"
        onClick={() => setMenuState("merches")}
      >
        Merches
      </button>
      <button
        style={
          menuState === "accessories" ? { backgroundColor: "#5D0951" } : {}
        }
        className="n"
        onClick={() => setMenuState("accessories")}
      >
        Accessories
      </button>
      <button
        style={menuState === "tickets" ? { backgroundColor: "#5D0951" } : {}}
        className="n"
        onClick={() => setMenuState("tickets")}
      >
        NFT tickets
      </button>
    </div>
  );
}

export default Navbar;
