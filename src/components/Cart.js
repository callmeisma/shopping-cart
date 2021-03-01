import React, { useState, useEffect } from 'react';
// import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

function Cart(props) {
  const [totalCost, setTotalCost] = useState(0);
 
  const qtyUp = (product) => {
    props.setCart([...props.cart, {...product}])
  }

  const removeItem = (productToRemove) => {
    props.setCart(props.cart.filter((product) => product !== productToRemove))
  }

  const totalSum = () => {
    var total = 0;
    if (props.cart.length === 0) {
      setTotalCost(total);
    } else {
        for (var item in props.cart) {
          setTotalCost(total += props.cart[item].price);
        }
    }
  }

  function CheckoutButton() {
    if (props.cart.length !== 0) {
      return <Link to='/checkout'><button>Proceed</button></Link>
    } else {
      return null
    }
  }

  function DisplayCart() {
    // TODO: Combine duplicate objects in cart and display as one with multiple quantities.
    // Reference how to return jsx from CheckoutButton function.
  }

  useEffect(() => {
    totalSum();
  }, [props.cart.length]);
  
  return (
    <div className="App">
      <h1>Cart</h1>
      <div>
        <h2>Cart Total: ${totalCost}</h2>
        <CheckoutButton />
      </div>
      {props.cart.length === 0 ? (<p>Your cart is empty</p>) : (
        props.cart.map((product, idx) => {
          return <div id={product.path} key={idx}>
            <h3>{product.name}</h3>
            <img alt={product.name} src={product.image}/>
            <p>{product.price}</p>
            <button onClick={() => qtyUp(product)}>+</button>
            <button onClick={() => removeItem(product)}>X</button>
          </div>
        },)
      )}
    </div>
  );
}

export default Cart;