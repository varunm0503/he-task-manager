import { useState, useCallback, useMemo, memo } from "react";

import { Standings } from './components/Standings';
import { Predictions } from './components/Predictions';

// This component renders Standings and Predictions Table
// You are given props. Refer to ./__mocks__/ directory for structure 
// 1. teams: This prop gives an array of all teams
// 2. matchResults: This prop gives an array of all matches played till now
//    and result in those matches.
// 3. fixtures: This prop gives an array of all matches/fixtures
//    which have not yet been played
// 4. points system: This prop defines points earned for a win/loss/draw


// Task 1. You need to fix matches played and points scored by each team
// Task 2. You need to predict result of each fixture and update points system based on it
// Task 2.1: You can update prediction using radio button
// Task 2.2: You can also update predction using select box with an option of draw
// Task 3: You also need to ensure that changing result from either radio button or select 
//         should reflect changes in the other component as well 
export const PointsTally = memo((props) => {
  const { teams, matchResults = [], fixtures = [], pointsSystem } = props;

  return (
    <div className="pointsTally">
     <Standings teams={teams} />
    <Predictions fixtures={fixtures} />
  </div>
  );
});