import { useRef } from "react";
import { logger } from "./logger";

const reportDiff = (newValues, oldValues) => {
  const newValuesKeys = Object.keys(newValues);
  const oldValuesKeys = Object.keys(oldValues);

  const alreadyIncludedKeys = [];

  newValuesKeys.forEach((newStateKey) => {
    if (newValues[newStateKey] !== oldValues[newStateKey]) {
      logger.log(newStateKey, newValues[newStateKey], oldValues[newStateKey]);
      alreadyIncludedKeys.push(newStateKey);
    }
  });

  oldValuesKeys.forEach((oldStateKey) => {
    if (
      !alreadyIncludedKeys.includes(oldStateKey) &&
      newValues[oldStateKey] !== oldValues[oldStateKey]
    ) {
      logger.log(oldStateKey, newValues[oldStateKey], oldValues[oldStateKey]);
    }
  });
};

// All changes are needed to be made in this hook. 
// Argument structure can be changed. 
// Pass whatever arguments you feel are necessary
// Use "logger.log(key, newValue, oldValue);" 
// to log all keys along with new value and old values 
// which caused component to re-render
export const useWhyDidComponentReRender = ({ state, props }) => {
  const stateRef = useRef(state);
  const propsRef = useRef(props);

  reportDiff(state, stateRef.current);
  reportDiff(props, propsRef.current);

  stateRef.current = state;
  propsRef.current = props;
};