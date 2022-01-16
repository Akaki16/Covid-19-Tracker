const setTheme = (themeColor, inputRef, buttonRef, modalRef) => {
    if (themeColor === '#333') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        inputRef.current.style.background = 'transparent';
        inputRef.current.style.border = '2px solid #fff';
        inputRef.current.style.color = '#fff';
        buttonRef.current.style.background = '#333';
        buttonRef.current.style.color = '#fff';
        buttonRef.current.style.border = '2px solid #fff';
        modalRef.current.style.backgroundColor = '#333';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
        inputRef.current.style.border = '2px solid rgb(52, 126, 185)';
        inputRef.current.style.color = '#333';
        buttonRef.current.style.background = 'rgb(52, 126, 185)';
        buttonRef.current.style.border = 'none';
        modalRef.current.style.backgroundColor = '#fff';
    }
}

const totalActive = (countryCases) => {
    return countryCases[countryCases.length - 1].Active;
}

const totalConfirmed = (countryCases) => {
    return countryCases[countryCases.length - 1].Confirmed;
}

const totalDeaths = (countryCases) => {
    return countryCases[countryCases.length - 1].Deaths;
}

export default
{
    setTheme,
    totalActive,
    totalConfirmed,
    totalDeaths,
};