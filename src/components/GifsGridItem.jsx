import React from 'react'

export const GifsGridItem = ({ title, url }) => {
    return (
        <div className='gifs__grid-item'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
