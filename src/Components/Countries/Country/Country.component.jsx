import React from 'react';
import PropTypes from 'prop-types';
import '../Styles/Country.styles.css';

const Country = ({ country }) => {
    const { Country, TotalConfirmed, TotalDeaths } = country;
    return (
        <div style={{
            backgroundImage: `url('https://www.uni-jena.de/unijenamedia/studium/faq+f%C3%BCr+studierende/symbolbild+virus.jpg?height=428&width=760')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }} className='case-card'>
            <h2 className='card-item'>{Country}</h2>
            <div className='card-body'>
                <h3 className='card-item'>Total Confirmed: {TotalConfirmed}</h3>
                <h4 className='card-item'>Total Deaths: {TotalDeaths}</h4>
            </div>
        </div>
    );
}

Country.propTypes = {
    country: PropTypes.object.isRequired
};

export default Country;