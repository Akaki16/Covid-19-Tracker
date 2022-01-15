import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/InfoCard.styles.css';

const InfoCard = ({ item }) => {
    const { Country, Date, Active, Confirmed, Deaths, Recovered } = item;
    return (
        <div className='info-card'>
            <h2>{Country}</h2>
            <p>{Date}</p>
            <p>Active: {Active}</p>
            <p>Confirmed: {Confirmed}</p>
            <p>Deaths: {Deaths}</p>
            <p>Recovered: {Recovered}</p>
        </div>
    );
}

InfoCard.propTypes = {
    item: PropTypes.object.isRequired
};

export default InfoCard;