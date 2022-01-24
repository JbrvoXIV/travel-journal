import React from 'react'

const Card = (props) => {

    const image = props.imageUrl;

    return (
        <section className='card-section'>
            <img src={image} alt="Vacation Spot" className='card-img'/>
            <div className='card-info'>
                <div className="location-link-header">
                    <p className="location">
                    <i className="fas fa-map-marker-alt"></i>{props.location}
                    </p>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer" className="link">
                        View on Google Maps
                    </a>
                    <h2 className="attraction-name">{props.title}</h2>
                </div>
                <div className="date-description">
                    <p className="date">
                        <b>{`${props.startDate} - ${props.endDate}`}</b>
                    </p>
                    <p className="description">{props.description}</p>
                </div>
            </div>
        </section>
    )
}

export default Card