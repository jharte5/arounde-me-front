import React from 'react'
import FoodItems from './FoodItems'

export default function Food(props) {
    console.log(props.food)
     return (
        <div>
       {props.food && <FoodItems food={props.food[0]} /> }
            
        {/* //    {props.food.map((food) => {
        //    return(<div key={food.name}><FoodItems food={food} /></div>)    
        //    }
        //    )}*/}
            
        </div>
    )
}
