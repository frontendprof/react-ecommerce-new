
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <ul className="left">
                <li><a href="https://google.com">UzbExress</a></li>
            </ul>

            <ul className="right">
                <li><a href="https://google.com">
                    <span className="shCart">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span className="cartCount">0</span>
                    </span>
                </a></li>

            </ul>
            
        </nav>
    )
}

export default Navbar
