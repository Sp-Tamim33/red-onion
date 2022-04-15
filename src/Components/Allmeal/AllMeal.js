import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const AllMeal = () => {
    const [meals, setMeal] = useState([]);

    useEffect(() => {
        fetch('allmeal.json')
            .then(res => res.json())
            .then(data => setMeal(data))
    }, [])

    return (
        <div className='grid grid-cols-3 py-10 px-10 text-center ml-10 gap-4'>
            {meals.map(meal => <Meal key={meal.id} meal={meal}></Meal>)}
        </div>
    );
};

export default AllMeal;