import { useState, useCallback, memo } from "react";

import { useWhyDidComponentReRender } from "./useWhyDidComponentReRender";

// Nothing has to be changed in rendering of UserProfile
// This is just to understand the component and wo
// You can pass any arguments to use useWhyDidComponentReRender whichever you feel are necessary
export const UserProfile = memo((props) => {
  const { user, encryptPhoneNumber } = props;
  const [showDetails, setShowDetails] = useState(false);

  const onToggle = useCallback(() => {
    setShowDetails((prevState) => !prevState);
  }, [setShowDetails]);

  useWhyDidComponentReRender({ state: { showDetails }, props });

  return (
    <div className="userProfile">
     <div className="userProfile__header">
      <div className="userProfile__name">
      <div className="userProfile__firstName">{user?.firstName}</div>
      <div className="userProfile__lastName">{user?.lastName}</div>
      </div>
      <div className="userProfile-header-right">
      <input
        type="checkbox"
        className="userProfile__showdetails"
        data-testid="toggle-checkbox"
        onClick={onToggle}
      />
      {showDetails ? "Hide Details" : "Show Details"}
      </div>  
      </div>
      {showDetails ? (
        <div>
          <div className="userProfile__address">
            <div>{user.address?.street}</div>
            <div>{user.address?.suburb}</div>
            <div>{user.address?.city}</div>
            <div>{user.address?.postCode}</div>
          </div>
          <div className="userProfile__phoneNumber">{encryptPhoneNumber ? `${user?.phoneNumber.slice(0, user?.phoneNumber.length - 4)}XXXX` : user?.phoneNumber}</div>
        </div>
      ) : null}
    </div>
  );
});