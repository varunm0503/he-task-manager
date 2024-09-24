import { useState, useCallback, useMemo, memo } from "react";

import { Standings } from './components/Standings';
 import { Predictions } from './components/Predictions';

// Nothing has to be changed in rendering of UserProfile
// This is just to understand the component and wo
// You can pass any arguments to use useWhyDidComponentReRender whichever you feel are necessary
export const PointsTally = memo((props) => {
  const { teams, matchResults, fixtures, pointsSystem } = props;

  const [predictionsState, setPredictionsState] = useState();

  const onPredict = useCallback(({ fixtureId, value }) => {
    setPredictionsState((prevState) => ({
      ...prevState,
      [fixtureId]: value,
    }))
  }, [setPredictionsState]);


  const answer = useMemo(() => {
    return matchResults.reduce((acc, match) => {
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
  }, [teams, pointsSystem, matchResults]);

  return (
    <div className="userProfile">
     <Standings teams={teams} calculatedPoints={answer} />
    <Predictions fixtures={fixtures} predictionsState={predictionsState} onPredict={onPredict} />
  
  </div>
  );
});