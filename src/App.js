import "./styles.css";
import { PointsTally } from "./PointsTally";

import { TEAMS } from './data/teams';
import { MATCH_RESULTS } from './data/matchResults';
import { FIXTURES } from "./data/fixtures";
import { POINTS_SYSTEM } from './data/pointsSystem';

import React from 'react';

//do not change anything in App Component. 
export default function App() {
  return (
    <div className="App">
      <PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />
    </div>
  );
}