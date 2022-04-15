import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo2.png"

const Header = () => {
    return (
        <div>
            <header className='flex justify-between items-center px-[70px] py-5'>
                <div className="logo w-[150px]">
                    <Link to='/'><img src={logo} alt="" /></Link>
                </div>
                <nav className='flex justify-between items-center'>
                    <div className="icon px-3 text-lg">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                    <div className="buttons px-3 text-xl">
                        <Link className='mx-5 font-semibold' to='/login'>Login</Link>
                        <Link className='mx-4 font-semibold px-4 py-2 rounded-3xl bg-red-600 text-white' to='/signup'>Sign Up</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;