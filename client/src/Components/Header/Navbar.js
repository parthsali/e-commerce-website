import React from 'react'
import './Navbar.css';


const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <img className='logo-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'></img>
                </div>
                <div className='nav-search-bar'>
                    <input className='search-box' type='text' />
                    <i class="fa-lg fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='side-menu-items'>
                    <div className='sign-in'>
                        Sign In
                    </div>
                    <div className='add-to-cart'>
                        <i class="fa-lg fa-solid fa-cart-shopping"></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar