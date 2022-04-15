import React from 'react';
import { Outlet } from 'react-router-dom';

import CustomLink from '../CustomLink/CustomLink';

const Meal = () => {
    return (
        <div>
            <header className='text-center'>
                <nav>
                    <CustomLink className='px-5 font-semibold text-xl' to='/all'>All</CustomLink>
                    <CustomLink className='px-5 font-semibold text-xl' to='/breakfast'>Breakfast</CustomLink>
                    <CustomLink className='px-5 font-semibold text-xl' to='/lunch'>Lunch</CustomLink>
                    <CustomLink className='px-5 font-semibold text-xl' to='/dinner'>Dinner</CustomLink>
                </nav>
            </header>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Meal;