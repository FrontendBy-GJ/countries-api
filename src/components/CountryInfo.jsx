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
        <div className={`mx-auto min-h-screen max-w-7xl px-6 pb-20`}>
          <div className="pb-20 pt-10">
            <Link
              to={'/'}
              className={`rounded px-6 py-2 shadow-md ${
                darkMode
                  ? 'bg-slate-800 text-slate-100 shadow-slate-900'
                  : 'bg-white text-slate-800'
              }`}
            >
              &larr; Back
            </Link>
          </div>
          {country.map((c) => (
            <div
              key={c.area}
              className="flex flex-col justify-between text-slate-400 lg:flex-row lg:gap-20"
            >
              <div className="aspect-video flex-1">
                <img
                  src={c.flags.png}
                  alt={c.flags.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-10 flex-1">
                <h4
                  className={`text-3xl font-bold ${
                    darkMode ? 'text-slate-100' : 'text-slate-800'
                  }`}
                >
                  {c.name.common}
                </h4>
                <div className="mt-5 flex flex-1 flex-col justify-between gap-10 md:flex-row">
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
                      {c.population.toLocaleString()}
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
                        <span className="font-normal text-slate-400" key={lang}>
                          {lang}
                        </span>
                      ))}
                    </h4>
                  </div>
                </div>
                {country[0].borders ? (
                  <div className="mt-10 flex flex-col gap-2 lg:flex-row">
                    <h4
                      className={`shrink-0 font-semibold ${
                        darkMode ? 'text-slate-100' : 'text-slate-800'
                      }`}
                    >
                      Border Countries:
                    </h4>
                    <ul className="flex flex-wrap gap-4">
                      {c.borders.map((border) => (
                        <li
                          className={`${
                            darkMode
                              ? 'bg-dark-blue text-slate-100'
                              : 'bg-white text-text-lightMode'
                          } inline-block rounded px-8 py-1 text-xs shadow-md`}
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
