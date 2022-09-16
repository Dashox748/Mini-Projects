import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import { useState, useEffect } from "react";

function App() {
  const [CountriesList, setCountriesList] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const inputHandle = (e) => {
    setSearch(e.target.value);
  };
  const listSelectHandle = (value) => {
    setRegion(value);
  };

  let newData;

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((response) =>
      response.json().then((data) => {
        newData = data.map((country) => {
          return {
            countryName: country.name.common,
            capital: country.capital,
            region: country.region,
            population: country.population,
            flagImg: country.flags.png,
          };
        });
        setCountriesList(newData);
      })
    );
  }, []);
  const fetchCountryInfo = (country) => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((response) =>
        response.json().then((data) => setCountryInfo(data[0]))
      )
      .finally(() => {
        setShowCountryInfo(true);
      });
  };
  const buttonHandle = () => {
    setShowCountryInfo(!showCountryInfo);
  };

  const darkModeHandle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={
        darkMode ? "app__container light_app" : "app__container dark_app"
      }
    >
      <Header darkModeHandle={darkModeHandle} darkMode={darkMode} />
      <Content
        inputHandle={inputHandle}
        listSelectHandle={listSelectHandle}
        countriesList={CountriesList.filter((country) =>
          country.region.includes(region)
        ).filter((country) =>
          country.countryName.toLowerCase().includes(search.toLowerCase())
        )}
        fetchCountryInfo={fetchCountryInfo}
        countryInfo={countryInfo}
        showCountryInfo={showCountryInfo}
        buttonHandle={buttonHandle}
        search={search}
        darkMode={darkMode}
      />
    </div>
  );
}

export default App;
