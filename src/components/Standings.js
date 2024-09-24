import React from 'react';
import { TeamRow } from './TeamRow';

// This component shows points scored by each team
// You can add necessary props to this component
export const Standings = ({ teams, calculatedPoints }) => {
    return (
        <table>
        <caption>
       Standings
     </caption>
        <thead>
       <tr>
         <th scope="col">Team</th>
         <th scope="col">Matches Played</th>
         <th scope="col">Points</th>
       </tr>
     </thead>
     <tbody>
       {teams.map((team) => {
         return (
          <TeamRow
            key={team}
            team={team}
            matchesPlayed={calculatedPoints[team].matchesPlayed}
            points={calculatedPoints[team].points}
            />
         );
       })}
       
   
     </tbody>
     </table>
    )
};