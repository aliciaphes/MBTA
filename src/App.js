import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { DateBlock } from "./components/Date/container";
import { Clock } from "./components/Clock/container";
import { StationSelector } from "./components/StationSelector/container";
import { Table } from "./components/Table/container";

const OPTIONS = [
  { value: "place-north", label: "North Station" },
  { value: "place-sstat", label: "South Station" },
];

function App() {
  const [selectedStation, setSelectedStation] = useState(OPTIONS[0].value);

  return (
    <div className="App">
      <h2>UPCOMING DEPARTURES</h2>
      <DateBlock />
      <Clock />
      <StationSelector options={OPTIONS} setSelection={setSelectedStation} />
      <Table selectedStation={selectedStation} />
      <footer>
        <p>The app refreshes approximately every minute</p>
      </footer>
    </div>
  );
}

export default App;
