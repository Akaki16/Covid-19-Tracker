import React from 'react';
import PropTypes from 'prop-types';
import Country from './Country/Country.component.jsx';
import './Styles/Countries.styles.css';

const Countries = ({ countries }) => {
    return (
        <section className='cases-list'>
            {countries.map(country => {
                return (
                    <Country
                        key={country.ID}
                        country={country}
                    />
                )
            })}
        </section>
    );
}

Countries.propTypes = {
    countries: PropTypes.array.isRequired
};

export default Countries;