import { useCallback } from "react";

export const PredictionRow = ({ fixture, onPredict }) => {
    const fixtureId = fixture.id;

    const onSelectTeam1 = useCallback((value) => {
        onPredict({ fixtureId, value: 'team1' });
    }, [fixtureId]);

    const onSelectTeam2 = useCallback((value) => {
        onPredict({ fixtureId, value: 'team2' });
    }, [fixtureId]);

    const onSelect = useCallback((e) => {
        onPredict({ fixtureId, value: e.target.value });
    }, [fixtureId]);

    return (
        <tr>
          <td> <input type="radio" onChange={onSelectTeam1}/> <label>{fixture.team1} </label></td>
          <td> <input type="radio" onChange={onSelectTeam2}/> <label>{fixture.team2} </label> </td>
          <td> <select onChange={onSelect}>
          <option value="team1">-</option>
          <option value="team1">{fixture.team1}</option>
          <option value="team2">{fixture.team2}</option>
          <option value="draw">Draw</option>
            </select> </td>
        </tr>
      )
};