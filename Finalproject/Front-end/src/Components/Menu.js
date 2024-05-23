import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <p>
        Each event catering menu is tailored to your specific needs,
        requirements, and budget.
        <br />
        but here are some of our client favorites.
      </p>
      <h1 id="h4">BREAK FAST</h1> 
      <div className="menubar">
        <div>
          <h2>IDLY</h2>A Delightful way to Quench your Thirst.
        </div>
        <div>
        <h2 className="h3">DOSAI</h2>
         Asian style vegan soup with fresh flavors and coconut milk
        </div>
        <div className="divs">
          <h2>BOORI</h2>A Delightful way to Quench your Thirst.
        </div>
        <div className="divs">
        <h2>UTHAPAM</h2> Thai Green Asian style vegan soup with fresh flavors and coconut mi
        </div>
      </div>
      <div className="menubar">
      <div>
        <h3>Rumali Butter Roti</h3>
         Soft, Extremely thin and one of India's most popular flat breads.
        </div>
        <div className="divs">
        <h3>Jalapeno Poppers</h3>
        Oven Baked and Absolutely Delicious Jalapeno peppers stuffed with rich chees
        </div>
        <div className="divs">
        <h3>Veg. Jalfrezi</h3>
        Veggies and paneer tossed in a spicy and tangy curry, pairs well with naan
        <div/>
        </div>
      </div>
    </div>
  );
}
