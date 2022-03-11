import Main from "./Main Home Page/Main";
import Network from "./Main Home Page/Header/Network/Network";
import Message from "./Main Home Page/Header/Messaging/Messaging";
import SignIn from "./Sign in Page/SignIn";
import SignUp from "./Sign up Page/SignUp";

import Profile from "./ProfileTemp/ProfileA/Profile";
import ProfileB from "./ProfileTemp/ProfileB/Profile";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="main" element={<Main />} />
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<SignUp />} />
          <Route path="network" element={<Network />} />
          <Route path="message" element={<Message />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profileB" element={<ProfileB />} />
        </Routes>
  </BrowserRouter>,
  rootElement
);