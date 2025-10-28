import React, { useState } from "react";
import StandingsTable from "../components/StandingsTable";
import "../styles/standings.css";

export default function StandingsPage() {
  const [selectedLeague, setSelectedLeague] = useState("laliga");

  const leagues = {
    laliga: "LaLiga",
    premier: "Premier League",
    bundesliga: "Bundesliga",
  };

  return (
    <div className="standings-container">
      <h1>🏆 Tablas de Posiciones</h1>

      <div className="select-league">
        <label htmlFor="league">Selecciona una liga:</label>
        <select
          id="league"
          value={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          {Object.entries(leagues).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <StandingsTable league={selectedLeague} />
    </div>
  );
}
