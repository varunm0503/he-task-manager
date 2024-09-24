import { PredictionRow } from './PredictionRow';

export const Predictions = ({ fixtures, onPredict }) => {
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
            <PredictionRow key={index} fixture={fixture} onPredict={onPredict} />
        )
      })}
    </tbody>
      </table>
    );
}