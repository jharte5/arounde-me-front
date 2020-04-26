import React from 'react'
import AttractionItems from './AttractionItems'
import {searchIt} from '../services/search'

export default function Attractions(props) {

    // const filtered = props.attraction.filter((attraction)=> this.props.searchTerm === attraction )
    return (
        <div>   
            {props. attraction && props.attraction.map((attraction, i)=> {
                return(
                    
                    <AttractionItems 
                    attraction = {attraction}
                    key={attraction.location_id}
                    />
                )
            })}
        </div>
    )
}

