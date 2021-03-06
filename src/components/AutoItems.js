import React from 'react'
import Button from './Button'

export default function AutoItems({onDelete, onUpdate, auto:{service, name, city, price, address, phone, website, _id:id}}) {
    return (
        <div className="ui card" style={{width:"22em", height: "25em", padding:"20px"}}>
            <div className="content">
                <div className="header">{service}</div>
                <hr/>
                <div className="meta">{name}</div>
                <div className="meta">{city}</div>
                <div className="meta">{price}</div>
                <div className="meta">{address}</div>
                <div className="meta">{phone}</div>
                <hr/>
                <div className="meta">{website}</div>
                <Button
                className="ui primary button"
                style={{margin:'10px 15px', backgroundColor:'red'}}
                onClick={() => {
                    return onDelete(id);
                }}
                >
                    Don't Touch It!
                </Button>
            </div>
        </div>
    )
}
