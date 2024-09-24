import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { PointsTally } from "../PointsTally";

import { TEAMS } from '../__mocks__/teams';
import { MATCH_RESULTS } from '../__mocks__/matchResults';
import { FIXTURES } from "../__mocks__/fixtures";
import { POINTS_SYSTEM } from '../__mocks__/pointsSystem';


describe("Test #1", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should correct matches played and points for each team", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    const alphaPointsElement = screen.getByTestId('points-Alpha');
    expect(alphaPointsElement.innerHTML).toBe('7');
    const alphaMatchesElement = screen.getByTestId('matches-played-Alpha');
    expect(alphaMatchesElement.innerHTML).toBe('3');

    const bravoPointsElement = screen.getByTestId('points-Bravo');
    expect(bravoPointsElement.innerHTML).toBe('4');
    const bravoMatchesElement = screen.getByTestId('matches-played-Bravo');
    expect(bravoMatchesElement.innerHTML).toBe('3');

    const charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    const charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('3');

    const deltaPointsElement = screen.getByTestId('points-Delta');
    expect(deltaPointsElement.innerHTML).toBe('0');
    const deltaMatchesElement = screen.getByTestId('matches-played-Delta');
    expect(deltaMatchesElement.innerHTML).toBe('2');

    const echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('0');
    const echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('3');

    const foxtrotPointsElement = screen.getByTestId('points-Foxtrot');
    expect(foxtrotPointsElement.innerHTML).toBe('6');
    const foxtrotMatchesElement = screen.getByTestId('matches-played-Foxtrot');
    expect(foxtrotMatchesElement.innerHTML).toBe('2');
  });
  
});

describe("Test #2", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should update matches played and points for each team when updated predictions using radio button in predictions table: team1", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    let deltaPointsElement = screen.getByTestId('points-Delta');
    expect(deltaPointsElement.innerHTML).toBe('0');
    let deltaMatchesElement = screen.getByTestId('matches-played-Delta');
    expect(deltaMatchesElement.innerHTML).toBe('2');

    let echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('0');
    let echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('3');

    userEvent.click(screen.getByTestId("fixture-400-team1"));

    deltaPointsElement = screen.getByTestId('points-Delta');
    expect(deltaPointsElement.innerHTML).toBe('3');
    deltaMatchesElement = screen.getByTestId('matches-played-Delta');
    expect(deltaMatchesElement.innerHTML).toBe('3');

    echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('0');
    echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('4');
  });

  test("should update matches played and points for each team when updated predictions using radio button in predictions table: team2", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    let charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    let charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('3');

    let foxtrotPointsElement = screen.getByTestId('points-Foxtrot');
    expect(foxtrotPointsElement.innerHTML).toBe('6');
    let foxtrotMatchesElement = screen.getByTestId('matches-played-Foxtrot');
    expect(foxtrotMatchesElement.innerHTML).toBe('2');

    userEvent.click(screen.getByTestId("fixture-406-team2"));

    charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('4');

    foxtrotPointsElement = screen.getByTestId('points-Foxtrot');
    expect(foxtrotPointsElement.innerHTML).toBe('9');
    foxtrotMatchesElement = screen.getByTestId('matches-played-Foxtrot');
    expect(foxtrotMatchesElement.innerHTML).toBe('3');
  });
  
});

describe("Test #3", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should update matches played and points for each team when updated predictions using select button in predictions table: team2", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    let charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    let charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('3');

    let echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('0');
    let echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('3');

    userEvent.selectOptions(screen.getByTestId("fixture-403-select"), 'team2');

    charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('4');

    echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('3');
    echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('4');
  
  });

  test("should update matches played and points for each team when updated predictions using select button in predictions table: draw", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    let charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('5');
    let charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('3');

    let echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('0');
    let echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('3');

    userEvent.selectOptions(screen.getByTestId("fixture-403-select"), 'draw');

    charliePointsElement = screen.getByTestId('points-Charlie');
    expect(charliePointsElement.innerHTML).toBe('6');
    charlieMatchesElement = screen.getByTestId('matches-played-Charlie');
    expect(charlieMatchesElement.innerHTML).toBe('4');

    echoPointsElement = screen.getByTestId('points-Echo');
    expect(echoPointsElement.innerHTML).toBe('1');
    echoMatchesElement = screen.getByTestId('matches-played-Echo');
    expect(echoMatchesElement.innerHTML).toBe('4');
  
  });
  
});

describe("Test #4", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should update dropdown value when a fixture result is selected from radio button", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    userEvent.click(screen.getByTestId("fixture-402-team2"));

    expect(screen.getByTestId("fixture-402-select")).toHaveValue('team2');
  
  });

  test("should update radio value when a fixture result is selected from select dropdown", async () => {

    render(<PointsTally teams={TEAMS} matchResults={MATCH_RESULTS} fixtures={FIXTURES} pointsSystem={POINTS_SYSTEM} />);

    userEvent.click(screen.getByTestId("fixture-404-team2"));

    expect(screen.getByTestId("fixture-404-team1").checked).toBe(false);
    expect(screen.getByTestId("fixture-404-team2").checked).toBe(true);

    userEvent.selectOptions(screen.getByTestId("fixture-404-select"), 'team1');

    expect(screen.getByTestId("fixture-404-team1").checked).toBe(true);
    expect(screen.getByTestId("fixture-404-team2").checked).toBe(false);

    userEvent.selectOptions(screen.getByTestId("fixture-404-select"), 'draw');
    expect(screen.getByTestId("fixture-404-team1").checked).toBe(false);
    expect(screen.getByTestId("fixture-404-team2").checked).toBe(false);
  
  });
  
  
});