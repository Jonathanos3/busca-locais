import React from "react";
import "./App.css";
import { CityCard } from "./components/CityCard";
import { CitySelect } from "./components/CitySelect";
import { StatesSelect } from "./components/StatesSelect";

export default function App() {
  return (
    <div className="container">
      <div className="column">
        <StatesSelect />
        <CitySelect />
        <CityCard />
      </div>
    </div>
  );
}
