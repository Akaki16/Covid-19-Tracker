import React from 'react';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import functionService from './Services/functionService';
import Header from './Components/Header/Header.component';
import Statistics from './Components/Statistics/Statistics.component';
import Search from './Components/Search/Search.component';
import Countries from './Components/Countries/Countries.component';
import Modal from './Components/Modal/Modal.component';

const App = () => {
  const [statistics, setStatistics] = useState([]);
  const [countries, setCountries] = useState([]);
  const [dark, setIsDark] = useState(false);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [modalVisible, setIsModalVisible] = useState(false);
  const [countryName, setCountryName] = useState('');
  const [countryTotalCases, setCountryTotalCases] = useState([]);
  const [reversed, setIsReversed] = useState(false);
  const inputRef = useRef(HTMLInputElement);
  const buttonRef = useRef(HTMLButtonElement);
  const modalRef = useRef(HTMLDivElement);

  const themeColor = dark ? '#333' : 'whitesmoke';
  const visible = modalVisible ? 'block' : 'none';
  const flexWrap = reversed ? 'wrap-reverse' : 'wrap';

  useEffect(() => {
    // get global statistics
    // get all countries covid19 data
    async function getCountriesData() {
      try {
        const countriesData = await axios.get('https://api.covid19api.com/summary');
        setStatistics(countriesData.data.Global);
        setCountries(countriesData.data.Countries);
      } catch (err) {
        alert("Couldn't get covid data");
      }
    }

    getCountriesData();
  }, []);

  useEffect(() => {

    functionService.setTheme(
      themeColor,
      inputRef,
      buttonRef,
      modalRef
    );

  }, [themeColor]);

  useEffect(() => {
    function closeModal() {
      window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
          setIsModalVisible(false);
        }
      });
    }

    closeModal();
  }, []);

  useEffect(() => {
    async function getCovidData(country) {
      try {
        const response = await axios.get(`https://api.covid19api.com/total/country/${country}`);
        setCountryTotalCases(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    if (countryName) {
      getCovidData(countryName);
    } else if (countryName.length === 0) {
      setCountryTotalCases([]);
    }

  }, [countryName]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredCountries = countries.filter(country => {
      return country.Country.toLowerCase().includes(searchValue);
    });
    setFilteredCountries(filteredCountries);
  }
  
  return (
    <div>
      <Header handleDarkMode={() => setIsDark(!dark)} />
      <Statistics global={statistics} />
      <Search
        inputRef={inputRef}
        buttonRef={buttonRef}
        handleSearch={handleSearch}
        handleClick={() => setIsModalVisible(true)}
      />
      <Countries
        countries={filteredCountries.length > 0 ? filteredCountries : countries}
      />
      <Modal
        modalDisplay={visible}
        handleModalClose={() => setIsModalVisible(false)}
        handleCountryName={countryName}
        handleCountryNameChange={(e) => setCountryName(e.target.value.toLowerCase())}
        handleTotalCases={() => console.log('total')}
        handleLiveCases={() => console.log('live')}
        statsDisplay={countryTotalCases.length > 1 ? 'visible' : 'hidden'}
        itemDisplay={countryTotalCases.length > 1 ? 'block' : 'none'}
        handleTotalActive={countryTotalCases.length > 1 ? functionService.totalActive(countryTotalCases) : null}
        handleTotalConfirmed={countryTotalCases.length > 1 ? functionService.totalConfirmed(countryTotalCases) : null}
        handleTotalDeaths={countryTotalCases.length > 1 ? functionService.totalDeaths(countryTotalCases) : null}
        cases={countryTotalCases}
        handleReverse={() => setIsReversed(!reversed)}
        reversed={flexWrap}
        modalRef={modalRef}
      />
    </div>
  );
}

export default App;