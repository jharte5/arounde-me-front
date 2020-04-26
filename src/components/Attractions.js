import React from 'react'
import AttractionItems from './AttractionItems'

export default function Attractions(props) {

    // const filtered = props.attraction.filter((attraction)=> this.props.searchTerm === attraction )
    return (
        <div>   
            {props.attraction && <AttractionItems attraction = {props.attraction[0]} key={attraction.location_id}/>}
        </div>
    )
}

