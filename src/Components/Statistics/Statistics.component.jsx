import React from 'react';
import './Styles/Statistics.styles.css';

const Statistics = ({ global }) => {
    return (
        <section className='statistics'>
            <div style={{
                backgroundColor: 'rgb(133, 46, 46)',
                color: '#fff'
            }} className='stat-item'>
                New Confirmed: {global.NewConfirmed}
            </div>
            <div style={{
                backgroundColor: 'rgb(133, 46, 46)',
                color: '#fff'
            }} className='stat-item'>
                New Deaths: {global.NewDeaths}
            </div>
            <div style={{
                backgroundColor: 'rgb(133, 60, 60)',
                color: '#fff'
            }} className='stat-item'>
                Total Confirmed: {global.TotalConfirmed}
            </div>
            <div style={{
                backgroundColor: 'rgb(133, 60, 60)',
                color: '#fff'
            }} className='stat-item'>
                Total Deaths: {global.TotalDeaths}
            </div>
        </section>
    );
}

export default Statistics;