import { Link } from 'react-router-dom';

const Country = ({ country, darkMode }) => {
  const { flags, capital, name, population, region } = country;

  return (
    <Link to={`/country/${name.official}`}>
      <article
        className={`rounded-lg shadow-md h-full ${
          darkMode ? 'bg-dark-blue text-white' : 'bg-white text-text-lightMode'
        }`}
      >
        <img
          src={flags.png}
          alt={flags.alt}
          className="aspect-video w-full object-cover rounded-tl-lg rounded-tr-lg"
        />
        <div className="p-6 space-y-2">
          <h2 className="text-xl font-extrabold">{name.common}</h2>
          <p className="pt-4 font-semibold">
            Population: <span className="font-normal">{population}</span>
          </p>
          <p className="font-semibold">
            Region: <span className="font-normal">{region}</span>
          </p>
          {capital ? (
            <p className="pb-4 font-semibold">
              Capital: <span className="font-normal">{capital}</span>
            </p>
          ) : (
            ''
          )}
        </div>
      </article>
    </Link>
  );
};

export default Country;
