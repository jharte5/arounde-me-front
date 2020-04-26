import React from 'react'

export default function FoodItems(props) {
    console.log(props.food )
    return (


        <div>
        
        {props.food && <div>
                        <img style={{
                            width:500,height:300
                        }} src={props.food.photo.images.medium.url}/>
                     <h1>{props.food.name}</h1>
                       <p>{props.food.ranking}</p>
                       <p>{props.food.ranking_geo}</p>
                       <p>{props.food.price}</p>
                       <p>{props.food.address}</p>
                       <p>{props.food.phone}</p>
                       <p>{props.food.website}</p> 
                   </div>}
                    
               
         
        </div>
    )
}
