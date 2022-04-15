import React from 'react';
import logo from '../../images/logo2.png'

const Footer = () => {
    return (
        <div className='py-10 dark:bg-slate-900 text-white grid grid-cols-3 px-[40px]'>
            <div className="left-logo w-[150px]">
                <img src={logo} alt="" />
            </div>
            <div></div>
            <div>
                <div className='flex justify-evenly ml-[-30px]'>
                    <div>
                        <a className='block py-1' href="home">About online tool</a>
                        <a className='block py-1' href="home">Read our bolg</a>
                        <a className='block py-1' href="home">Sign up to delevey</a>
                        <a className='block py-1' href="home">Add your resturant</a>
                    </div>
                    <div className='mx-5'>
                        <a className='block py-1' href="home">Get Help</a>
                        <a className='block py-1' href="home">Read FAQs</a>
                        <a className='block py-1' href="home">View all cities</a>
                        <a className='block py-1' href="home">Resturants near me</a>
                    </div>
                </div>
            </div>
            <div className=' text-gray-500 py-10'>
                Copyright @ 2022 Red-Onion
            </div>
        </div>
    );
};

export default Footer;