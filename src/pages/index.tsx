import type { NextPage } from "next";
import React from "react";
import LogInPage from "./LogIn/LogIn";
import ButtonUtil from "@/utils/ButtonUtil";
import { useRouter } from "next/navigation";
import PagePaths from "@/utils/PagePaths";
import "../styles/main.css";
import "../styles/utilComponents/ButtonUtil.css";

const Home: NextPage = () => {
  const router = useRouter();
  const onClickIndexForLoginButton = () => {
    router.push(PagePaths.LOGIN_PAGE.url, PagePaths.LOGIN_PAGE.as);
  };

  return (
    <div className="main">
      <ButtonUtil
        content="ログインする"
        testId="index-for-login-button"
        onClick={onClickIndexForLoginButton}
        disabled={false}
        className="button"
      />
    </div>
  );
};

export default Home;
