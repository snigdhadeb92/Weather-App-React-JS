import React, { useEffect, useState } from 'react';
import './css/style.css';

export const Tempapp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5a01470e62c4cbb22845da9c1ee1887e`;
      const response = await fetch(url);
      const resjson = await response.json();
      //console.log(resjson);
      setCity(resjson.main);

    }
    fetchApi();
  }, [search])
  return (
    
    <div className='container body'>
    <h3>Weather App</h3>
    <>
    
      <div className='box'>
        <input type='search' onChange={(event) => { setSearch(event.target.value) }} />

      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <div className='info'>

            <h2 className='location'>
              <i className="fas fa-street-view"></i> {search}
            </h2>
            <h1 className='temp'>
             {city.temp}°C
            </h1>
            <h3 className='temp_max_min'>
              Max: {city.temp_max}°C || Min: {city.temp_min}°C
            </h3>
          </div>
        </div>
      )

      }


    </>
    </div>
  )
}

export default Tempapp;
