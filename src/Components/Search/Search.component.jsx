import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Search.styles.css';

const Search = ({
    handleClick,
    inputRef,
    buttonRef,
    handleSearch
}) => {

    return (
        <div className='search'>
            <div>
                <input
                    ref={inputRef}
                    type='search'
                    autoFocus
                    placeholder='Filter countries...'
                    onKeyUp={handleSearch}
                />
            </div>
            <div>
                <button ref={buttonRef} onClick={handleClick} type='button'>
                    Use Advanced Search
                </button>
            </div>
        </div>
    );
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Search;