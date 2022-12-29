import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCities, getStates } from "../redux/actions";

export const StatesSelect = () => {
  const states = useSelector((state) => state.states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStates());
  }, []);

  const selectState = (id) => {
    dispatch(getCities(id));
  };

  return (
    <div className="container-uf">
      <h1 className="titulo">Buscando Ufs</h1>
      <label htmlFor="state">Uf:</label>
      <select
        name="state"
        id="state"
        onChange={(event) => selectState(event.target.value)}
      >
        <option value="">Selecione o estado</option>

        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.sigla} - {state.nome}
          </option>
        ))}
      </select>
    </div>
  );
};
