import React from 'react'

export default function FoodItems(props) {
    return (
        <div>
            {props.food.map((food)=> {
                return (
                    <div>
                        <h1>{food.name}</h1>
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
