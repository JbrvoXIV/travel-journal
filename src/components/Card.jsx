import React from 'react'

const Card = (props) => {
    return (
        <section className='card-section'>
            <img src={`../images/${props.imageUrl}`} className='card-img'/>
            <div className='card-info'>
                <div className="location-link">
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
                        View on Google Maps
                    </a>
                </div>
                <h2 className="attraction-name">{props.title}</h2>
                <p className="date">
                    <b>{`${props.startDate} - ${props.endDate}`}</b>
                </p>
                <p className="description">{props.description}</p>
            </div>
        </section>
    )
}

export default Card