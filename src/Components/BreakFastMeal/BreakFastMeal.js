import React from 'react';

const BreakFastMeal = (props) => {
    return (
        <div>
            <div class="max-w-sm bg-white border rounded-lg transition-shadow ease-in-out delay-4000 hover:border-gray-200 hover:shadow-lg">
                <div className='p-5'>
                    <img className='w-[180px] mx-auto' src={props.meal.img} alt="" />
                </div>
                <div class="p-5">
                    <a href="/home">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight">{props.meal.name}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.meal.title}</p>
                    <p className='text-2xl font-semibold mb-5'>${props.meal.price}</p>
                    <a href="/home" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BreakFastMeal;