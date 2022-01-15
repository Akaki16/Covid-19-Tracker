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
    let totalActive = 0;
    for (let i = 0; i < countryCases.length; i++) {
        totalActive += countryCases[i].Active;
    }
    return totalActive;
}

const totalConfirmed = (countryCases) => {
    let totalConfirmed = 0;
    for (let i = 0; i < countryCases.length; i++) {
        totalConfirmed += countryCases[i].Confirmed;
    }
    return totalConfirmed;
}

const totalDeaths = (countryCases) => {
    let totalDeaths = 0;
    for (let i = 0; i < countryCases.length; i++) {
        totalDeaths += countryCases[i].Deaths;
    }
    return totalDeaths;
}

const totalRecovered = (countryCases) => {
    let totalRecovered = 0;
    for (let i = 0; i < countryCases.length; i++) {
        totalRecovered += countryCases[i].Recovered;
    }
    return totalRecovered;
}

export default
{
    setTheme,
    totalActive,
    totalConfirmed,
    totalDeaths,
    totalRecovered
};