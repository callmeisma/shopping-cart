import React, { useState, useEffect } from "react";
// import uniqid from 'uniqid';
import { Link } from "react-router-dom";

function Cart(props) {
  const [totalCost, setTotalCost] = useState(0);

  const qtyUp = (product) => {
    props.setCart([...props.cart, { ...product }]);
  };

  const removeItem = (productToRemove) => {
    props.setCart(props.cart.filter((product) => product !== productToRemove));
  };

  const totalSum = () => {
    var total = 0;
    if (props.cart.length === 0) {
      setTotalCost(total);
    } else {
      for (var item in props.cart) {
        setTotalCost((total += props.cart[item].price));
      }
    }
  };

  function CheckoutButton() {
    if (props.cart.length !== 0) {
      return (
        <Link to="/checkout">
          <button className="btn btn-dark p-3 fs-6 text-uppercase">
            checkout
          </button>
        </Link>
      );
    } else {
      return null;
    }
  }

  const getQuantity = (name) => {
    let quantity = 0;
    for (let i = 0; i < props.cart.length; i++) {
      if (props.cart[i].name === name) {
        quantity += 1;
      }
    }
    return quantity;
  };

  function removeDuplicates() {
    let x = props.cart.filter(
      (value, index, self) =>
        index ===
        self.findIndex((t) => t.place === value.place && t.name === value.name)
    );
    return x;
  }

  useEffect(() => {
    totalSum();
  }, [props.cart.length]);

  return (
    <div className="cart d-flex flex-grow-1 p-4">
      {props.cart.length === 0 ? (
        <div className="d-flex flex-grow-1 align-items-center justify-content-evenly">
          <h2>Your cart is currently empty.</h2>
          <div className="py-5">
            <h4>Want to shop?</h4>
            <p>
              This is the perfect opportunity to shop for the gear you've been
              wanting.
            </p>
            <Link to="/shop">
              <button className="btn btn-dark p-3 my-2 fs-6 text-uppercase">
                continue shopping
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-grow-1 align-items-center justify-content-evenly">
          <div className="cartItemized d-flex flex-column">
            {removeDuplicates().map((product, idx) => {
              return (
                <div
                  id={product.path}
                  key={idx}
                  className="d-flex align-items-center justify-contents-evenly"
                >
                  <div className="d-flex flex-column">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="thumbnail"
                    />
                  </div>
                  <div className="p-4">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <div
                      className="btn-group m-3"
                      role="group"
                      aria-label="quantity count"
                    >
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        aria-label="remove one"
                        onClick={() => removeItem(product)}
                      >
                        -
                      </button>
                      <button className="btn btn-outline-dark" disabled>
                        {getQuantity(product.name)}
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-dark"
                        aria-label="add one"
                        onClick={() => qtyUp(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cartCost d-flex flex-column align-items-end">
            <h2>Cart Total</h2>
            <h1>${totalCost}</h1>
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
