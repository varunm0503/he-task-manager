import "./styles.css";
import { UserProfile } from "./UserProfile";
import React from 'react';

const user = {
  firstName: "John",
  lastName: "Stacker",
  address: {
    street: "77339 Konopelski Crossing",
    suburb: "North Marylee",
    city: "New York",
    postCode: "10002",
  },
  phoneNumber: "01-76729193",
};

//do not change anything in App Component. 
export default function App() {
  return (
    <div className="App">
      <UserProfile user={user} encryptPhoneNumber={true}/>
    </div>
  );
}