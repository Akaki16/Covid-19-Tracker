import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Modal.styles.css';
import InfoCard from './InfoCard/InfoCard.component';

const Modal = ({
    handleModalClose,
    modalDisplay,
    handleCountryName,
    handleCountryNameChange,
    handleTotalActive,
    handleTotalConfirmed,
    handleTotalDeaths,
    cases,
    statsDisplay,
    itemDisplay,
    reversed,
    handleReverse,
    modalRef
}) => {
    const currentDate = new Date().getFullYear();
    return (
        <div style={{display: modalDisplay}} className='modal'>
            <div ref={modalRef} className='modal-content'>
                <div className='modal-header'>
                    <h2>Advanced Search</h2>
                    <i onClick={handleModalClose} className="fas fa-times-circle fa-2x"></i>
                </div>
                <div className='modal-body'>
                    <div className='country-search-form'>
                        <div>
                            <input
                                type='search'
                                placeholder='Enter a country name'
                                autoFocus
                                value={handleCountryName}
                                onChange={handleCountryNameChange}
                            />
                        </div>
                    </div>
                    <div style={{
                        display: itemDisplay,
                        textAlign: 'center',
                        position: 'relative',
                        top: '10px'
                    }}>
                        <p>From 2020 to {currentDate}</p>
                    </div>
                    <div style={{visibility: statsDisplay}} className='stats-container'>
                        <div className='stat-item'>
                            Total Active: <span>{handleTotalActive}</span>
                        </div>
                        <div className='stat-item'>
                            Total Confirmed: <span>{handleTotalConfirmed}</span>
                        </div>
                        <div className='stat-item'>
                            Total Deaths: <span>{handleTotalDeaths}</span>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <button style={{display: itemDisplay}} className='reverse-btn' onClick={handleReverse} type='button'>Reverse <i className="fas fa-history"></i></button>
                    </div>
                    <div style={{flexWrap: reversed}} className='total-cases-list'>
                        {cases.map((item, i) => {
                            return (
                                <InfoCard
                                    key={i}
                                    item={item}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

Modal.defaultProps = {
    modalDisplay: 'none',
    statsDisplay: 'hidden',
    itemDisplay: 'none',
    reversed: 'wrap'
};

Modal.propTypes = {
    modalDisplay: PropTypes.string.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    handleCountryName: PropTypes.string.isRequired,
    handleCountryNameChange: PropTypes.func.isRequired,
    handleTotalActive: PropTypes.number,
    handleTotalConfirmed: PropTypes.number,
    handleTotalDeaths: PropTypes.number,
    cases: PropTypes.array.isRequired
};

export default Modal;