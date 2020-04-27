import React from 'react'
import FoodItems from './FoodItems'
import PropTypes from 'prop-types'

const Food = (props) => {
    console.log(props.food)
        return (
        <div>
        {props.food && <FoodItems food={props.food[0]} /> }
            
        {/* //    {props.food.map((food) => {
        //    return(<div key={food.name}><FoodItems food={food} /></div>)    
        //    }
        //    )}*/}
            
        </div>
    )
}
Food.propTypes = {
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

export default Food