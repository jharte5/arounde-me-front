import React from 'react'
import FoodItems from './FoodItems'



export default function Food(props) {
    return (
        <div>
            <FoodItems 
            food = {props.food}
            key= {props.name}/>
        </div>
    )
}
