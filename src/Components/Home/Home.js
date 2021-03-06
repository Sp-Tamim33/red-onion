import React from 'react';
import Background from '../../images/bannerbackground.png'
import Check from '../Check/Check';
import Footer from '../Footer/Footer';
import MealHeader from '../Meal/MealHeader';


var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: `url(${Background})`
};

const Home = () => {
    return (
        <div>
            <div className='home-bg flex justify-center items-center' style={sectionStyle}>
                <div>
                    <h1 className='text-4xl text-center'>Best food waiting for your belly</h1>
                    <div class="flex rounded-md overflow-hidden py-10">
                        <input type="text" class="w-full rounded-md rounded-r-none px-3 focus:outline-none" placeholder='Search your food' />
                        <button class="bg-red-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">Search</button>
                    </div>
                </div>
            </div>
            <div className='py-8'>
                <MealHeader></MealHeader>
            </div>
            <div>
                <Check></Check>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;