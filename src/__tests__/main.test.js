import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { UserProfile } from "../UserProfile";

jest.mock('../logger', () => ({
  logger: {
    log: jest.fn(),
  }
}));
const { logger } = require('../logger');


describe("Test #1", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should log changed props", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const newUser = {
      firstName: "Ashley",
      lastName: "Terry",
      address: {
        street: "77340 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-768291293",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    rerender(<UserProfile user={newUser} encryptPhoneNumber/>);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['user', newUser, user]);

  });
  
});

describe("Test #2", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should log changed state", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    userEvent.click(screen.getByTestId('toggle-checkbox'));

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['showDetails', true, false]);

  });
  
});

describe("Test #3, () => {
  beforeEach(() => jest.clearAllMocks());


  test("should when prop which was previously present but now removed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    rerender(<UserProfile user={user} />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['encryptPhoneNumber', undefined, true]);

  });
  
});

describe("Test #4", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should not log for a prop which mutated and changed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    userEvent.click(screen.getByTestId('toggle-checkbox'));

    user.address = {
      street: "77300 Cape Street",
      suburb: "South Marylee",
      city: "New York",
      postCode: "10002",
    };

    rerender(<UserProfile user={user} encryptPhoneNumber />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['showDetails', true, false]);

  });
  
});

describe("Test #5", () => {
  beforeEach(() => jest.clearAllMocks());

  test("Test #1 should log changed props", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const newUser = {
      firstName: "Ashley",
      lastName: "Terry",
      address: {
        street: "77340 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-768291293",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    rerender(<UserProfile user={newUser} encryptPhoneNumber/>);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['user', newUser, user]);

  });

  test("Test #2 should log changed state", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    userEvent.click(screen.getByTestId('toggle-checkbox'));

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['showDetails', true, false]);

  });

  test("Test #3 should when prop which was previously present but now removed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    rerender(<UserProfile user={user} />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['encryptPhoneNumber', undefined, true]);

  });

  test("Test #4 should not log for a prop which mutated and changed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber/>);

    userEvent.click(screen.getByTestId('toggle-checkbox'));

    user.address = {
      street: "77300 Cape Street",
      suburb: "South Marylee",
      city: "New York",
      postCode: "10002",
    };

    rerender(<UserProfile user={user} encryptPhoneNumber />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['showDetails', true, false]);

  });

  test("Test #5 should log prop which is unused in the component but passed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber />);

    rerender(<UserProfile user={user} encryptPhoneNumber encryptAddress />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['encryptAddress', true, undefined]);

  });
  beforeEach(() => jest.clearAllMocks());

  test("should log prop which is unused in the component but passed", async () => {

    const user = {
      firstName: "John",
      lastName: "Stacker",
      address: {
        street: "77339 Konopelski Crossing",
        suburb: "North Marylee",
        city: "New York",
        postCode: "10002",
      },
      phoneNumber: "01-767291s93",
    };

    const { rerender } = render(<UserProfile user={user} encryptPhoneNumber />);

    rerender(<UserProfile user={user} encryptPhoneNumber encryptAddress />);

    expect(logger.log.mock.calls.length).toBe(1);
    expect(logger.log.mock.calls[0]).toEqual(['encryptAddress', true, undefined]);

  });
});