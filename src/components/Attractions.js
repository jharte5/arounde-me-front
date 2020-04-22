import React from 'react'
import AttractionItems from './AttractionItems'
import {searchIt} from '../services/search'

export default function Attractions(props) {
    return (
        <div>   
            {/* {props.attraction.filter(searchIt(props.searchTerm)).map((attraction, i)=> { */}
                {/* // return( */}
            <AttractionItems 
            attraction = {props.attraction}
            />
                {/* // ) */}
             {/* })} */}
        </div>
    )
}

