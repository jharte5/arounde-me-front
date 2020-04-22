import React from 'react'

export default function AttractionItems(props) {
    return (
        <div>
            <h1>attraction</h1>
            {props.attraction.map((attraction)=> {
                console.log(props)
                return (
                    <div>
                        <p>{attraction.name}</p>
                        <p>{attraction.ranking}</p>
                        <p>{attraction.ranking_geo}</p>
                        <p>{attraction.price}</p>
                        <p>{attraction.address}</p>
                        <p>{attraction.phone}</p>
                        <p>{attraction.website}</p>
                    </div>
                )
            }) }
        </div>
    )
}
