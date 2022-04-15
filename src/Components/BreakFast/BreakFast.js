import React, { useEffect, useState } from 'react';
import BreakFastMeal from '../BreakFastMeal/BreakFastMeal';

const BreakFast = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className='grid grid-cols-3 py-10 px-10 text-center ml-10 gap-4'>
            {
                meals.map(meal => <BreakFastMeal key={meal.id} meal={meal}></BreakFastMeal>)
            }
        </div>
    );
};

export default BreakFast;