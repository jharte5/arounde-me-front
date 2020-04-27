import React from 'react'
import AttractionItems from './AttractionItems'

export default function Attractions(props) {
    const number = Math.floor(Math.random() * 15);
    return (
        <div>
            {props.attraction && <AttractionItems attraction = {props.attraction[number]} />}
        </div>
    )
}

