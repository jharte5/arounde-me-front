import React from 'react'

export default function FoodItems(props) {
    return (
        <div>
            <h1>food</h1>
            {props.food.map((food)=> {
               
                return (
                    <div>
                        <p>{food.name}</p>
                        <p>{food.ranking}</p>
                        <p>{food.ranking_geo}</p>
                        <p>{food.price}</p>
                        <p>{food.address}</p>
                        <p>{food.phone}</p>
                        <p>{food.website}</p>
                    </div>
                )
            }) }
        </div>
    )
}
