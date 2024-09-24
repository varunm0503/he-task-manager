import { useCallback } from "react";

// This component is used to render a prodection row for each fixture
// Do not make changes to data-test-id as that can affect your test results
// You can add necessary props to this component to make it functional
export const PredictionRow = ({ fixture }) => {
    const fixtureId = fixture.id;

    const onSelectTeam1 = useCallback((value) => {

    }, []);

    const onSelectTeam2 = useCallback((value) => {

    }, []);

    const onSelect = useCallback((e) => {

    }, []);

    return (
        <tr data-testid={`fixture-${fixtureId}`}>
          <td> <input data-testid={`fixture-${fixtureId}-team1`} type="radio" onChange={onSelectTeam1} checked={false}/> <label>{fixture.team1} </label></td>
          <td> <input data-testid={`fixture-${fixtureId}-team2`} type="radio" onChange={onSelectTeam2} checked={false}/> <label>{fixture.team2} </label> </td>
          <td> <select data-testid={`fixture-${fixtureId}-select`} onChange={onSelect} value="-">
          <option value="-">-</option>
          <option value="team1">{fixture.team1}</option>
          <option value="team2">{fixture.team2}</option>
          <option value="draw">Draw</option>
            </select> </td>
        </tr>
      )
};