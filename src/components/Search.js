import React from 'react'

export default function Search() {
    return (
        <div>
            <form>
                <div>
                    <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Search.. "
                    value={searchTerm}
                    />
                </div>
            </form>
        </div>
    )
}

