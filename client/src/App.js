import React from "react";
import Main from "./Main Home Page/Main";
import Network from './Main Home Page/Header/Network/Network';
import Message from './Main Home Page/Header/Messaging/Messaging';

import "./App.css";
import { Profile } from "./Main Home Page/Header/Messaging/Profile/Profile";
import SignIn from "./Sign in Page/SignIn";

function App() {
  return (
    <div className="app">
      {/* <Main /> */}
      {/* <Message /> */}
      {/* <Profile /> */}
      <SignIn />
      {/* <Network /> */}
    </div>
  );
}

export default App;
