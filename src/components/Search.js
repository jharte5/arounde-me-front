import React from 'react'

export default function Search(props) {
    return (
        <div>
            <form>
                <div>
                    <input
                    onChange={props.handleChange}
                    type="text"
                    placeholder="Type Services Here... "
                    value={props.searchTerm}
                    style={{
                        alignItems:"center",
                        display:"flex",
                        justifyContent: "center",
                        flexDirection:"row",
                        marginTop:"100px"
                    }}
                    />
                </div>
            </form>
        </div>
    )
}

