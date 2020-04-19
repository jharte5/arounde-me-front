import React from 'react'

export default function Search(props) {
    return (
        <div>
            <form>
                <div>
                    <input
                    onChange={props.handleChange}
                    type="text"
                    placeholder="Search.. "
                    value={props.searchTerm}
                    />
                </div>
            </form>
        </div>
    )
}

