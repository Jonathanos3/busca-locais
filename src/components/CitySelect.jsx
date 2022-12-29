import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCity } from "../redux/actions";

export const CitySelect = () => {
  const cities = useSelector((state) => state.cities);
  const dispatch = useDispatch();

  const selectCity = (cityId) => {
    const city = cities.find((value) => value.id === parseInt(cityId));
    dispatch(setCity(city));
  };

  return (
    <div className="input-group">
      <label htmlFor="city">Cidade:</label>
      <select
        name="city"
        id="city"
        disabled={!cities.length}
        onChange={(event) => selectCity(event.target.value)}
      >
        <option value={null}>Selecione a cidade </option>

        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.nome}
          </option>
        ))}
      </select>
    </div>
  );
};
