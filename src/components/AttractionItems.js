import React from 'react'

export default function AttractionItems(props) {
    return (
                    <div>
                        {console.log(props.attraction)}
                        <h1>{props.attraction.name}</h1>
                        <p>{props.attraction.ranking}</p>
                        <p>{props.attraction.ranking_geo}</p>
                        <p>{props.attraction.price}</p>
                        <p>{props.attraction.address}</p>
                        <p>{props.attraction.phone}</p>
                        <p>{props.attraction.website}</p>
                    </div>
    )
}
