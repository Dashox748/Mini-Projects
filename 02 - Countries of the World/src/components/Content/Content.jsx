import "./content.css";
import React, { useRef, useState } from "react";
import RenderIfVisible from 'react-render-if-visible'


function Content({
  countriesList,
  inputHandle,
  listSelectHandle,
  fetchCountryInfo,
  countryInfo,
  showCountryInfo,
  buttonHandle,
  search,
  darkMode,
}) {
  const [active, setActive] = useState(false);

  return !showCountryInfo ? (

          <div  className="content__container">


      <div className="content__container-filters" >
        <input
          onChange={(e) => inputHandle(e)}
          className={
            darkMode ? "search_bar search_light" : "search_bar search-dark"
          }
          placeholder="Search for a country..."
          value={search}
        ></input>
        <div
          className={
            darkMode
              ? "filter-region-list filter_light"
              : "filter-region-list filter_dark"
          }
          onClick={() => setActive(!active)}
        >
          Filter By Region
          <ul className={active ? "active" : null}>
            <li onClick={() => listSelectHandle("Africa")}>Africa</li>
            <li onClick={() => listSelectHandle("America")}>America</li>
            <li onClick={() => listSelectHandle("Asia")}>Asia</li>
            <li onClick={() => listSelectHandle("Europe")}>Europe</li>
            <li onClick={() => listSelectHandle("Oceania")}>Oceania</li>
            <li onClick={() => listSelectHandle("")}>None</li>
          </ul>
        </div>
      </div>
              <div className="content__container-countries"  >
        {countriesList &&
        countriesList.map((country, index) => {
            return (

                    <div
                        className={darkMode ? "light_shadow" : "dark_shadow"}
                        key={index}
                        onClick={() => {
                            fetchCountryInfo(country.countryName);
                        }}
                        >
                        <img
                            className="flag_cursor"
                            src={country.flagImg}
                            alt="country flag"
                        />

                        <div
                            className={
                            darkMode
                            ? "country-info country-light"
                            : "country-info country-dark"
                        }
                            >
                            <h1>{country.countryName}</h1>
                            <p>
                                <span>Population: </span>
                                {country.population}

                            </p>

                            <p>
                                <span>Region: </span>
                                {country.region}
                            </p>
                            <p>
                                <span>Capital: </span>
                                {country.capital}
                            </p>

                        </div>
                    </div>


            );
          })}
      </div>
    </div>
  ) : (
    <div className="country-info__container">
      <button onClick={() => buttonHandle()} className="back-button">
        Back
      </button>
      <div className="country-info__container-whole">
        <img src={countryInfo.flags.png} alt="" />
        <div className="country-info__container-description">
          <h1>{countryInfo.name}</h1>
          <div className="country-info__container-description-flex">
            <div className="country-info__container-description-left">
              <p>
                <span>Native Name: </span>
                {countryInfo.nativeName && countryInfo.nativeName}
              </p>
              <p>
                <span>Population: </span> {countryInfo.population}
              </p>
              <p>
                <span>Region: </span> {countryInfo.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryInfo.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {countryInfo.capital}
              </p>
            </div>
            <div className="country-info__container-description-right">
              <p>
                <span>Top Level Domain: </span>
                {countryInfo.topLevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {countryInfo.currencies.map((xd) => xd.name)}
              </p>
              <p>
                <span>Languages: </span>
                {countryInfo.languages.map((xd) => xd.name)}
              </p>
            </div>
          </div>
          <div className="border__countries">
            <span>Border Countries:</span>
            {countryInfo.borders &&
              countryInfo.borders.map((country, index) => (
                <button onClick={() => fetchCountryInfo(country)} key={index}>
                  {country}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
