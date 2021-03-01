import React from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="App">
      <h1>Chekout</h1>
      <p>Payments not accepted at this time.</p>
      <Link to='/cart'>
          <button>Back</button>
        </Link>
    </div>
  );
}

export default Checkout;