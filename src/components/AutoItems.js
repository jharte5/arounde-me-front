import React from 'react'
import Button from './Button'

export default function AutoItems({onDelete, onUpdate, auto:{service, _id:id}}) {
    return (
        <div className="ui card" style={{width:"75%", padding:"20px"}}>
            <div className="content">
                <div className="header">{service}</div>
            </div>
        </div>
    )
}
