import React from 'react'
import AutoItems from './AutoItems'
import {searchIt} from '../services/search'
import PropTypes from 'prop-types'

const Auto = (props) => {
    let terms = ['auto', 'body', 'repair','car','wash', 'tire','gas']
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
                    
                    auto={auto}
                    key={auto._id}
                    onUpdate={props.onUpdate}
                    />
                )
            })}
        </div>
    )
}
Auto.propTypes = {
    onUpdate: PropTypes.func,
    autos: PropTypes.arrayOf(
        PropTypes.shape({
            service: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            address: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
            website: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired
        })
    )
}
export default Auto