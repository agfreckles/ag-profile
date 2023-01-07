import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import history from "./utils/history";
import Profile from "./features/Profile";
import Resume from "./features/resume/Resume";
import "./statics/css/index.scss";
import Certificate from "./features/certificates/Certificates";

const App = () => {
  return (
    <main>
      <BrowserRouter history={history}>
        <Routes>
          <Route path="/" exact element={<Profile />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/certifications" element={<Certificate />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
