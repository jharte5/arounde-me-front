import React from 'react'
import AttractionItems from './AttractionItems'
import PropTypes from 'prop-types'

const Attractions = (props)=> {
    const number = Math.floor(Math.random() * 13);
    return (
        <div>
            {props.attraction && <AttractionItems attraction = {props.attraction[number]} />}
        </div>
    )
}
Attractions.propTypes = {
    onUpdate: PropTypes.func,
    autos: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            ranking: PropTypes.string.isRequired,
            ranking_geo: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    )
}

export default Attractions