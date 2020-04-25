import React from 'react'

export default function AttractionItems(props) {
    return (
        <div className="ui card" style={{width:"22em", height: "25em", padding:"20px"}}>
            <div className="content">
                {props.attraction.map((attraction)=>{
                    return(
                        <div>
                            <div className="header">{props.attraction.name}</div>
                            <hr/>
                            <div className="meta">{props.attraction.ranking}</div>
                            <div className="meta">{props.attraction.ranking_geo}</div>
                            <div className="meta">{props.attraction.price}</div>
                            <div className="meta">{props.attraction.address}</div>
                            <div className="meta">{props.attraction.phone}</div>
                            <hr/>
                            <div className="meta">{props.attraction.website}</div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
{console.log(props.attraction)}

