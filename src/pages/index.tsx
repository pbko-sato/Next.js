import type { NextPage } from "next";
import React from "react";
import LogInPage from "./LogIn/LogIn";

const Home: NextPage = () => {
  return (
    <>
      <h2 data-testid="h2">hello world!!</h2>
      <LogInPage />
    </>
  );
};

export default Home;
