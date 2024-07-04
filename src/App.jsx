import React from "react";
import Categories from "./components/Categories";
import Courses from "./components/Courses";
import Popular from "./components/Popular";

const App = () => {
  return (
    <div className="font-sfPro">
      <Categories />
      <Courses />
      <Popular />
    </div>
  );
};

export default App;
