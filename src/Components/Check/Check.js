import React from 'react';
import shef from '../../images/chef-cook-food-33614.png';
import redMan from '../../images/adult-blur-blurred-background-687824.png';
import shopMan from '../../images/architecture-building-city-2047397.png';
import './Check.css'

const Check = () => {
    return (
        <div className='px-[40px]'>
            <div>
                <h1 className='text-3xl'>Why you Choose us </h1>
                <p className='w-[500px] py-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur mollitia vitae temporibus a quae animi? Culpa optio mollitia tempore</p>
            </div>
            <div className='items grid grid-cols-3 gap-6 py-5'>
                <div className='item'>
                    <div>
                        <img className='w-[500px] rounded-lg' src={redMan} alt="" />
                    </div>
                    <div className='content py-8 flex shadow-lg rounded-lg'>
                        <div className='icon px-5'>
                            <span className='text-2xl'><i class="fa fa-car" aria-hidden="true"></i></span>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Fast Delevary</h1>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores repellat eveniet aspernatur fugit repellendus provident explicabo rem neque porro.</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <img className='w-[500px] rounded-lg' src={shef} alt="" />
                    </div>
                    <div className='content py-8 flex shadow-lg rounded-lg'>
                        <div className='icon px-5'>
                            <span className='text-2xl'><i class="fa fa-bell" aria-hidden="true"></i></span>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>A Good Auto Responder</h1>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores repellat eveniet aspernatur fugit repellendus provident explicabo rem neque porro.</p>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <img className='w-[500px] rounded-lg' src={shopMan} alt="" />
                    </div>
                    <div className='content py-8 flex shadow-lg rounded-lg'>
                        <div className='icon px-5'>
                            <span className='text-2xl'><i class="fa fa-truck" aria-hidden="true"></i></span>
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>Home Delevary</h1>
                            <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores repellat eveniet aspernatur fugit repellendus provident explicabo rem neque porro.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Check;