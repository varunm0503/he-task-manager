import "./styles.css";
import { PointsTally } from "./PointsTally";

import { TEAMS } from './__mocks__/teams';
import { MATCH_RESULTS } from './__mocks__/matchResults';
import { FIXTURES } from "./__mocks__/fixtures";
import { POINTS_SYSTEM } from './__mocks__/pointsSystem';

import React from 'react';

//do not change anything in App Component. 
export default function App() {
  return (
    <div className="App">
      <PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />
    </div>
  );
}