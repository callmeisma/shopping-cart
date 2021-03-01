import React, { useState, useEffect} from 'react';
import Inventory from './Inventory.json';

function ProductDetail(props) {
    useEffect(() => {
        getProd();
    });

    const [prod, setProd] = useState({});
    

    const getProd = () => {
        let prodId = props.match.params.id;
        let result = Inventory.find( ({ path }) => path === prodId );
        setProd(result);        
    }

    const addCart = () => {
        // if (prod in props.cart) {console.log('in cart');}
        props.setCart([...props.cart, prod])
    }
    
    return (
        <div className="App">
            <h1>{prod.name}</h1>
            <img alt={prod.name} src={prod.image}></img>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            <button onClick={addCart}>Add to Cart</button>
        </div>
    );
}

export default ProductDetail;