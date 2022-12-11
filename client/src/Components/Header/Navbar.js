import React from 'react'
import './Navbar.css';


const Navbar = () => {
    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    {/* <img className='logo-img' src='#'>logo</img> */}
                    Logo
                </div>
                <div className='nav-search-bar'>
                    <input className='search-box' placeholder='Search Item' type='text' />
                    <i class="fa-lg fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='side-menu-items'>
                    <div className='sign-in'>
                        Sign In
                    </div>
                    <div className='add-to-cart'>
                        <p className='item-number'>1</p>
                        <i class="fa-2x fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className='user-acc'>
                        <i class="fa-lg fa-solid fa-user"></i>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar