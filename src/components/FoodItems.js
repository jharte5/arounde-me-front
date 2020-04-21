import React from 'react'

export default function FoodItems(props) {
    return (
        <div>
            <h1>food</h1>
            {props.food.map((food)=> {
               
                return (
                    <div>
                        <p>{food.name}</p>
                        <p>{food.location_string}</p>
                    </div>
                )
            }) }
        </div>
    )
}
