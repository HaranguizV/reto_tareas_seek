import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import App from "./App";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="main-content">
          <Routes>
            <Route element={<App />} path="/" exact={true} />
            <Route element={<Tasks />} path="/tasks" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
