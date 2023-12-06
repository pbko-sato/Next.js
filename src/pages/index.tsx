import type { NextPage } from "next";
import React from "react";
import LogInPage from "./LogIn/LogIn";

const Home: NextPage = () => {
  return (
    <div className="main">
      <LogInPage />
    </div>
  );
};

export default Home;
