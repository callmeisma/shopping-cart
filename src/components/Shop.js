import React from 'react';
import Inventory from './Inventory.json';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <div className="App">
      <h1>Shop</h1>
      {Inventory.map(product => (
        <h2 key={product.name}>
          <Link to={`/shop/${product.path}`}>{product.name}</Link>
        </h2>
      ))}
    </div>
  );
}

export default Shop;