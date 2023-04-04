import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, onClick }) => {
  return (
    <header
      className={`drop-shadow-md transition-colors duration-300 ease-out ${
        darkMode
          ? 'bg-dark-blue text-slate-50'
          : 'bg-lightModeBG text-dark-blue'
      }`}
    >
      <div className="flex justify-between py-5 max-w-7xl mx-auto px-6">
        <h1>Where in the world?</h1>
        <ThemeToggle onClick={onClick} darkMode={darkMode} />
      </div>
    </header>
  );
};

export default Header;
