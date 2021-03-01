import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
            <Link className='link' to='/'>
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link className='link' to='/about'>
                    <li>About</li>
                </Link>
                <Link className='link' to='/shop'>
                    <li>Shop</li>
                </Link>
                <Link className='link' to='/cart'>
                    <li>Cart ({props.cart.length})</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;