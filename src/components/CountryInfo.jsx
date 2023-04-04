import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryInfo = ({ darkMode }) => {
  const [country, setCountry] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <>
      <section
        className={`transition-colors duration-300 ease-out ${
          darkMode ? 'bg-slate-800' : 'bg-slate-100'
        }`}
      >
        <div className={`max-w-7xl mx-auto min-h-screen px-6 pb-20`}>
          <div className="pt-10 pb-20">
            <Link
              to={'/'}
              className={`px-6 py-2 rounded shadow-md ${
                darkMode
                  ? 'text-slate-100 bg-slate-800 shadow-slate-900'
                  : 'bg-white text-slate-800'
              }`}
            >
              &larr; Back
            </Link>
          </div>
          {country.map((c) => (
            <div
              key={c.area}
              className="flex flex-col lg:flex-row justify-between lg:gap-20 text-slate-400"
            >
              <div className="flex-1 aspect-video">
                <img
                  src={c.flags.png}
                  alt={c.flags.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 mt-10">
                <h4
                  className={`text-3xl font-bold ${
                    darkMode ? 'text-slate-100' : 'text-slate-800'
                  }`}
                >
                  {c.name.common}
                </h4>
                <div className="flex flex-col md:flex-row justify-between flex-1 gap-10 mt-5">
                  <div className="space-y-2">
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Native Name:{' '}
                      </span>
                      {c.name.common}
                    </h4>
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Population:
                      </span>{' '}
                      {c.population}
                    </h4>
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Region:
                      </span>{' '}
                      {c.region}
                    </h4>
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Sub Region:
                      </span>{' '}
                      {c.subregion}
                    </h4>
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Capital:
                      </span>{' '}
                      {c.capital}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <h4>
                      <span
                        className={`font-semibold ${
                          darkMode ? 'text-slate-100' : 'text-slate-800'
                        }`}
                      >
                        Top Level Domain:
                      </span>{' '}
                      {c.tld}
                    </h4>
                    {Object.keys(country[0].currencies).map((curr, index) => (
                      <h4 key={index}>
                        <span
                          className={`font-semibold ${
                            darkMode ? 'text-slate-100' : 'text-slate-800'
                          }`}
                        >
                          Currencies:
                        </span>{' '}
                        {country[0].currencies[curr].name}
                      </h4>
                    ))}
                    <h4
                      className={`space-x-2 font-semibold ${
                        darkMode ? 'text-slate-100' : 'text-slate-800'
                      }`}
                    >
                      Languages:{' '}
                      {Object.values(country[0].languages).map((lang) => (
                        <span className="text-slate-400 font-normal" key={lang}>
                          {lang}
                        </span>
                      ))}
                    </h4>
                  </div>
                </div>
                {country[0].borders ? (
                  <div className="flex flex-col lg:flex-row gap-2 mt-10">
                    <h4
                      className={`font-semibold shrink-0 ${
                        darkMode ? 'text-slate-100' : 'text-slate-800'
                      }`}
                    >
                      Border Countries:
                    </h4>
                    <ul className="flex gap-4 flex-wrap">
                      {c.borders.map((border) => (
                        <li
                          className={`${
                            darkMode
                              ? 'bg-dark-blue text-slate-100'
                              : 'bg-white text-text-lightMode'
                          } inline-block px-8 rounded text-xs py-1 shadow-md`}
                          key={border}
                        >
                          {border}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CountryInfo;
