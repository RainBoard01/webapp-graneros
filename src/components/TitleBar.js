import React from 'react'

const TitleBar = props => {
    return (
        <div className='TitleBar'>
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default TitleBar
