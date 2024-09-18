export const logger = {
  log: (key, newValue, prevValue) => {
    console.log(
      `Key changed: ${key},New Value: ${JSON.stringify(newValue)}, PreviousValue: ${JSON.stringify(
        prevValue
      )}`
    );
  },
};