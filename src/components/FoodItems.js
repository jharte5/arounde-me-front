import React from 'react'

export default function FoodItems(props) {
    console.log(props.food )
    return (
        <div>
        
        {props.food && <div className="ui card" style={{width:'31em'}}>
            <img className="header" style={{width:'31em',height:'18em'}} src={props.food.photo.images.medium.url}/>
            <div className="header">{props.food.name}</div>
            <hr/>
            <div className="meta">{props.food.ranking}</div>
            <div className="meta">{props.food.ranking_geo}</div>
            <div className="meta">{props.food.price}</div>
            <div className="meta">{props.food.address}</div>
            <div className="meta">{props.food.phone}</div>
            <hr/>
            <div className="meta">{props.food.website}</div> 
            </div>
        }
        </div>
    )
}
