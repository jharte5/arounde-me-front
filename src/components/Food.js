import React from 'react'
import {searchIt} from '../services/search'



export default function Food(props) {


    return (
        <div>
            {props.blogs.filter(searchIt(props.searchTerm)).map((blog,i)=>{
                return(
                    <div>

                    </div>
                )
            })}
        </div>
    )
}
