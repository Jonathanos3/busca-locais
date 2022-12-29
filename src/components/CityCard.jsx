import React from "react";
import { useSelector } from "react-redux";

export const CityCard = () => {
  const city = useSelector((state) => state.city);

  if (!city) {
    return null;
  }

  return (
    <div className="container-info">
      <h1 className="info">Informações</h1>
      <ul>
        <li>
          Microrregião: <span> {city.microrregiao.nome}</span>
        </li>
        <li>
          Mesorregião: <span>{city.microrregiao.mesorregiao.nome}</span>
        </li>
        <li>
          UF: <span>{city.microrregiao.mesorregiao.UF.sigla}</span>{" "}
        </li>
        <li>
          Região do Município:
          <span> {city.microrregiao.mesorregiao.UF.regiao.nome} </span>{" "}
        </li>
      </ul>
    </div>
  );
};
