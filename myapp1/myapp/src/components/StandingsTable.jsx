import React from "react";
import "../styles/standings.css";

export default function StandingsTable({ league }) {
  const standingsData = {
    laliga: {
      name: "LaLiga 2025/2026",
      teams: [
        { pos: 1, name: "Real Madrid", j: 10, g: 9, e: 0, p: 1, gf: 22, gc: 10, dif: 12, pts: 27 },
        { pos: 2, name: "Barcelona", j: 10, g: 7, e: 1, p: 2, gf: 25, gc: 12, dif: 13, pts: 22 },
        { pos: 3, name: "Villarreal", j: 10, g: 6, e: 2, p: 2, gf: 18, gc: 10, dif: 8, pts: 20 },
        { pos: 4, name: "Espanyol", j: 10, g: 5, e: 3, p: 2, gf: 14, gc: 11, dif: 3, pts: 18 },
        { pos: 5, name: "Atlético Madrid", j: 9, g: 4, e: 4, p: 1, gf: 16, gc: 10, dif: 6, pts: 16 },
        { pos: 6, name: "Real Betis", j: 9, g: 4, e: 4, p: 1, gf: 15, gc: 10, dif: 5, pts: 16 },
        { pos: 7, name: "Elche", j: 10, g: 3, e: 5, p: 2, gf: 11, gc: 10, dif: 1, pts: 14 },
        { pos: 8, name: "Athletic Club", j: 10, g: 4, e: 2, p: 4, gf: 9, gc: 10, dif: -1, pts: 14 },
        { pos: 9, name: "Getafe", j: 10, g: 4, e: 2, p: 4, gf: 10, gc: 12, dif: -2, pts: 14 },
        { pos: 10, name: "Sevilla FC", j: 10, g: 4, e: 1, p: 5, gf: 17, gc: 16, dif: 1, pts: 13 },
        { pos: 11, name: "Alavés", j: 9, g: 3, e: 3, p: 3, gf: 9, gc: 8, dif: 1, pts: 12 },
        { pos: 12, name: "Rayo Vallecano", j: 9, g: 3, e: 2, p: 4, gf: 11, gc: 10, dif: 1, pts: 11 },
        { pos: 13, name: "Osasuna", j: 9, g: 3, e: 1, p: 5, gf: 7, gc: 9, dif: -2, pts: 10 },
        { pos: 14, name: "Levante", j: 10, g: 2, e: 3, p: 5, gf: 14, gc: 18, dif: -4, pts: 9 },
        { pos: 15, name: "Mallorca", j: 10, g: 2, e: 3, p: 5, gf: 11, gc: 15, dif: -4, pts: 9 },
        { pos: 16, name: "Real Sociedad", j: 10, g: 2, e: 3, p: 5, gf: 10, gc: 14, dif: -4, pts: 9 },
        { pos: 17, name: "Valencia", j: 10, g: 2, e: 3, p: 5, gf: 10, gc: 16, dif: -6, pts: 9 },
        { pos: 18, name: "Celta Vigo", j: 9, g: 0, e: 7, p: 2, gf: 8, gc: 11, dif: -3, pts: 7 },
        { pos: 19, name: "Real Oviedo", j: 10, g: 2, e: 1, p: 7, gf: 7, gc: 19, dif: -12, pts: 7 },
        { pos: 20, name: "Girona", j: 10, g: 1, e: 4, p: 5, gf: 9, gc: 22, dif: -13, pts: 7 },
      ],
    },

    premier: {
      name: "Premier League 2025/2026",
      teams: [
        { pos: 1, name: "Arsenal", j: 9, g: 7, e: 1, p: 1, gf: 16, gc: 3, dif: 13, pts: 22 },
        { pos: 2, name: "Bournemouth", j: 9, g: 5, e: 3, p: 1, gf: 16, gc: 11, dif: 5, pts: 18 },
        { pos: 3, name: "Tottenham Hotspur", j: 9, g: 5, e: 2, p: 2, gf: 17, gc: 7, dif: 10, pts: 17 },
        { pos: 4, name: "Sunderland", j: 9, g: 5, e: 2, p: 2, gf: 11, gc: 7, dif: 4, pts: 17 },
        { pos: 5, name: "Manchester City", j: 9, g: 5, e: 1, p: 3, gf: 17, gc: 7, dif: 10, pts: 16 },
        { pos: 6, name: "Manchester United", j: 9, g: 5, e: 1, p: 3, gf: 15, gc: 14, dif: 1, pts: 16 },
        { pos: 7, name: "Liverpool", j: 9, g: 5, e: 0, p: 4, gf: 16, gc: 14, dif: 2, pts: 15 },
        { pos: 8, name: "Aston Villa", j: 9, g: 4, e: 3, p: 2, gf: 9, gc: 8, dif: 1, pts: 15 },
        { pos: 9, name: "Chelsea", j: 9, g: 4, e: 2, p: 3, gf: 17, gc: 11, dif: 6, pts: 14 },
        { pos: 10, name: "Crystal Palace", j: 9, g: 3, e: 4, p: 2, gf: 12, gc: 9, dif: 3, pts: 13 },
        { pos: 11, name: "Brentford", j: 9, g: 4, e: 1, p: 4, gf: 14, gc: 14, dif: 0, pts: 13 },
        { pos: 12, name: "Newcastle United", j: 9, g: 3, e: 3, p: 3, gf: 9, gc: 8, dif: 1, pts: 12 },
        { pos: 13, name: "Brighton & Hove Albion", j: 9, g: 3, e: 3, p: 3, gf: 14, gc: 15, dif: -1, pts: 12 },
        { pos: 14, name: "Everton", j: 9, g: 3, e: 2, p: 4, gf: 9, gc: 12, dif: -3, pts: 11 },
        { pos: 15, name: "Leeds United", j: 9, g: 3, e: 2, p: 4, gf: 9, gc: 14, dif: -5, pts: 11 },
        { pos: 16, name: "Burnley", j: 9, g: 3, e: 1, p: 5, gf: 12, gc: 17, dif: -5, pts: 10 },
        { pos: 17, name: "Fulham", j: 9, g: 2, e: 2, p: 5, gf: 9, gc: 14, dif: -5, pts: 8 },
        { pos: 18, name: "Nottingham Forest", j: 9, g: 1, e: 2, p: 6, gf: 5, gc: 17, dif: -12, pts: 5 },
        { pos: 19, name: "West Ham United", j: 9, g: 1, e: 1, p: 7, gf: 7, gc: 20, dif: -13, pts: 4 },
        { pos: 20, name: "Wolverhampton Wanderers", j: 9, g: 0, e: 2, p: 7, gf: 7, gc: 19, dif: -12, pts: 2 },
      ],
    },

    bundesliga: {
      name: "Bundesliga 2025/2026",
      teams: [
        { pos: 1, name: "Bayern Munich", j: 8, g: 8, e: 0, p: 0, gf: 30, gc: 4, dif: 26, pts: 24 },
        { pos: 2, name: "RB Leipzig", j: 8, g: 6, e: 1, p: 1, gf: 16, gc: 9, dif: 7, pts: 19 },
        { pos: 3, name: "VfB Stuttgart", j: 8, g: 6, e: 0, p: 2, gf: 13, gc: 7, dif: 6, pts: 18 },
        { pos: 4, name: "Borussia Dortmund", j: 8, g: 5, e: 2, p: 1, gf: 14, gc: 6, dif: 8, pts: 17 },
        { pos: 5, name: "Bayer Leverkusen", j: 8, g: 5, e: 2, p: 1, gf: 18, gc: 11, dif: 7, pts: 17 },
        { pos: 6, name: "Eintracht Frankfurt", j: 8, g: 4, e: 1, p: 3, gf: 21, gc: 18, dif: 3, pts: 13 },
        { pos: 7, name: "TSG Hoffenheim", j: 8, g: 4, e: 1, p: 3, gf: 15, gc: 13, dif: 2, pts: 13 },
        { pos: 8, name: "FC Cologne", j: 8, g: 3, e: 2, p: 3, gf: 12, gc: 11, dif: 1, pts: 11 },
        { pos: 9, name: "Werder Bremen", j: 8, g: 3, e: 2, p: 3, gf: 12, gc: 16, dif: -4, pts: 11 },
        { pos: 10, name: "1. FC Union Berlin", j: 8, g: 3, e: 1, p: 4, gf: 11, gc: 15, dif: -4, pts: 10 },
        { pos: 11, name: "SC Freiburg", j: 8, g: 2, e: 3, p: 3, gf: 11, gc: 13, dif: -2, pts: 9 },
        { pos: 12, name: "VfL Wolfsburg", j: 8, g: 2, e: 2, p: 4, gf: 9, gc: 13, dif: -4, pts: 8 },
        { pos: 13, name: "Hamburg SV", j: 8, g: 2, e: 2, p: 4, gf: 7, gc: 11, dif: -4, pts: 8 },
        { pos: 14, name: "St Pauli", j: 8, g: 2, e: 1, p: 5, gf: 8, gc: 14, dif: -6, pts: 7 },
        { pos: 15, name: "FC Augsburg", j: 8, g: 2, e: 1, p: 5, gf: 12, gc: 20, dif: -8, pts: 7 },
        { pos: 16, name: "Mainz", j: 8, g: 1, e: 1, p: 6, gf: 9, gc: 16, dif: -7, pts: 4 },
        { pos: 17, name: "1. FC Heidenheim 1846", j: 8, g: 1, e: 1, p: 6, gf: 7, gc: 16, dif: -9, pts: 4 },
        { pos: 18, name: "Borussia Monchengladbach", j: 8, g: 0, e: 3, p: 5, gf: 6, gc: 18, dif: -12, pts: 3 },
      ],
    },
  };

  const currentLeague = standingsData[league];

  if (!currentLeague) return <p>No hay datos disponibles para esta liga.</p>;

  return (
    <div className="table-container">
      <h2>{currentLeague.name}</h2>
      <table className="standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>J</th>
            <th>G</th>
            <th>E</th>
            <th>P</th>
            <th>GF</th>
            <th>GC</th>
            <th>Dif</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {currentLeague.teams.map((t) => (
            <tr key={t.pos}>
              <td>{t.pos}</td>
              <td>{t.name}</td>
              <td>{t.j}</td>
              <td>{t.g}</td>
              <td>{t.e}</td>
              <td>{t.p}</td>
              <td>{t.gf}</td>
              <td>{t.gc}</td>
              <td>{t.dif > 0 ? `+${t.dif}` : t.dif}</td>
              <td>{t.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
