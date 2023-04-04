import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './components/Countries';
import CountryInfo from './components/CountryInfo';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <BrowserRouter>
        <Header darkMode={darkMode} onClick={handleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Countries darkMode={darkMode} />} />
            <Route
              path="/country/:name"
              element={<CountryInfo darkMode={darkMode} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
