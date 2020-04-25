import React from 'react'
import AutoItems from './AutoItems'
import {searchIt} from '../services/search'

export default function Auto(props) {
    return (
        <div style={{
          
            width:"30em",
            display: "flex",
            flexWrap: "wrap",
            width: "75em"
            
        }}>
            {props.autos.filter(searchIt(props.searchTerm)).map((auto, i)=> {
                return(
                    <AutoItems
                    onDelete={props.onDelete}
                    auto={auto}
                    key={auto._id}
                    onUpdate={props.onUpdate}
                    />
                )
            })}
        </div>
    )
}
