import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { PointsTally } from "../PointsTally";

import { TEAMS } from '../__mocks__/teams';
import { MATCH_RESULTS } from '../__mocks__/matchResults';
import { FIXTURES } from "../__mocks__/fixtures";
import { POINTS_SYSTEM } from '../__mocks__/pointsSystem';

jest.mock('../logger', () => ({
  logger: {
    log: jest.fn(),
  }
}));


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