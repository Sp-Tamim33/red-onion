import React, { useEffect, useState } from 'react';
import DinnerMeal from '../DinnerMeal/DinnerMeal';

const Dinner = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setMeals(data))
    }, [])
    return (
        <div className='grid grid-cols-3 py-10 px-10 text-center ml-10 gap-4'>
            {
                meals.map(meal => <DinnerMeal key={meal.id} meal={meal}></DinnerMeal>)
            }
        </div>
    );
};

export default Dinner;