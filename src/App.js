import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function addCart(item) {
    setCart(cart.concat([item]));
    setTotal(total + item.price);
  }

  function BakeryItem({ item }) {
    return (
      <div class="bakeryItem">
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} class="bk-img"></img>
      <div class="bakeryPrice">
      <p>${item.price}</p>
      <button class="cartButton" onClick={() => addCart(item)}>Add to Cart</button>
      </div>
      </div>
    )
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div class="parent">
      

      <div class="item-container">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          <BakeryItem item={item}/>
        
        
      ))}
      </div>

      <div class="cart">
        <h2 class="cart-text">Cart</h2>
        {cart.map((item, index) => (
          <p class="cart-item">{item.name} : {item.price}</p>
        )

        )}

        <h6 class="cart-item">Total Price: {total}</h6>
      </div>
      </div>
      </div>
  );
}

export default App;
