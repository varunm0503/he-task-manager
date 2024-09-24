// You do not change anything in this component.
// Test cases depend on this component.
// Just use this component in "Standings" file.
export const TeamRow = ({ team, matchesPlayed, points }) => {
    return (
        <tr data-testid={`data-${team}`}>
              <th scope="row">{team}</th>
              <td data-testid={`matches-played-${team}`}>{matchesPlayed}</td>
              <td data-testid={`points-${team}`}>{points}</td>
            </tr>
              );
};