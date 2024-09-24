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

  const [predictionsState, setPredictionsState] = useState({});

  const onPredict = useCallback(({ fixtureId, value }) => {
    setPredictionsState((prevState) => ({
      ...prevState,
      [fixtureId]: value,
    }))
  }, [setPredictionsState]);


  const answer = useMemo(() => {
    const predictionResults = fixtures.reduce((acc, fixture) => {
      if (predictionsState[fixture.id]) {
        acc.push({
          ...fixture,
          result: predictionsState[fixture.id],
        });
      } 
      return acc;
    }, []);
    return [...matchResults, ...predictionResults].reduce((acc, match) => {
      let team1points;
      let team2points;
      if (match.result === 'team1') {
        team1points = pointsSystem.win;
        team2points = pointsSystem.loss;
      } else if (match.result === 'team2') {
        team1points = pointsSystem.loss;
        team2points = pointsSystem.win;
      } else if (match.result === 'draw'){
        team1points = pointsSystem.draw;
        team2points = pointsSystem.draw;
      }

      acc[match.team1] = {
        points: (acc[match.team1]?.points || 0) + team1points,
        matchesPlayed: (acc[match.team1]?.matchesPlayed || 0) + 1,
      }

      acc[match.team2] = {
        points: (acc[match.team2]?.points || 0) + team2points,
        matchesPlayed: (acc[match.team2]?.matchesPlayed || 0) + 1,
      }

      return acc;
    }, {});
  }, [teams, pointsSystem, matchResults, predictionsState, fixtures]);

  return (
    <div className="pointsTally">
     <Standings teams={teams} calculatedPoints={answer} />
    <Predictions fixtures={fixtures} predictionsState={predictionsState} onPredict={onPredict} />
  </div>
  );
});