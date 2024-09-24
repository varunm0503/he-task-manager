import { PredictionRow } from './PredictionRow';

// This component is used to show predictions
// You can add necessary props to this component
export const Predictions = ({ fixtures }) => {
    return (
        <table className="fixtures">
        <caption>Predictions</caption>
        <thead>
    <tr>
      <th scope="col">Team1</th>
      <th scope="col">Team2</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
      {fixtures.map((fixture, index) => {
        return (
            <PredictionRow key={index} fixture={fixture} />
        )
      })}
    </tbody>
      </table>
    );
}