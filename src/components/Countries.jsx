import React, { useEffect, useMemo, useState } from 'react';
import Country from './Country';
import Inputs from './Inputs';

const Countries = ({ darkMode }) => {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState('');
  const [options, setOptions] = useState(false);
  const [region, setRegion] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  function getAllCountries() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }

  const searchResults = useMemo(() => {
    return countries.filter((country) => {
      return country.name.common.toLowerCase().includes(input.toLowerCase());
    });
  }, [countries, input]);

  const filterResults = useMemo(() => {
    return countries.filter((country) => {
      return country.region.includes(region);
    });
  }, [countries, region]);

  const countryRegions = [
    'Africa',
    'Americas',
    'Antarctic',
    'Asia',
    'Europe',
    'Oceania',
  ];

  return (
    <section
      className={`min-h-screen pb-20 transition-colors duration-300 ease-out ${
        darkMode ? 'bg-darkModeBG' : 'bg-lightModeBG'
      }`}
    >
      <Inputs
        darkMode={darkMode}
        regions={countryRegions}
        options={options}
        onSearchChange={(e) => setInput(e.target.value)}
        searchValue={input}
        onClick={() => setOptions(!options)}
        onKeyDown={(e) => (e.key === 'Enter' ? setOptions(true) : '')}
        onOptionClick={(e) => setRegion(e.target.innerText)}
        onOptionKeyDown={(e) =>
          e.key === 'Enter' ? setRegion(e.target.innerText) : ''
        }
      />

      <div className="mx-auto grid grid-cols-1 place-content-center gap-10 px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-6 xl:max-w-7xl xl:grid-cols-4">
        {input
          ? searchResults.map((country, index) => (
              <Country key={index} country={country} darkMode={darkMode} />
            ))
          : region
          ? filterResults.map((country, index) => (
              <Country key={index} country={country} darkMode={darkMode} />
            ))
          : countries.map((country, index) => (
              <Country key={index} country={country} darkMode={darkMode} />
            ))}
      </div>
    </section>
  );
};

export default Countries;
