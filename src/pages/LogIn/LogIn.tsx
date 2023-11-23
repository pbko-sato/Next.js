import { useState } from "react";
import { useUpdateEffect } from "react-use";
import { useRouter } from "next/navigation";
import Head from "next/head";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resultText, setResultText] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const clearValues = () => {
    setUsername("");
    setPassword("");
    setResultText("");
  };

  const logInJudger = (username: string, password: string): boolean => {
    let result = false;
    if (username === "koki" && password === "pass") {
      result = true;
    } else if (username !== "koki" && password === "pass") {
      setResultText("ユーザ名が誤っています");
    } else if (username === "koki" && password !== "pass") {
      setResultText("パスワードが誤っています");
    } else {
      setResultText("ユーザ名・パスワードを正しく入力してください");
    }
    return result;
  };

  const router = useRouter();

  const onClickLogInButton = () => {
    logInJudger(username, password);
    if (logInJudger(username, password)) {
      router.push("/Top/Top", "/Top/");
    }
  };

  const isDisabledJudger = (username: string, password: string) => {
    if (username && password) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  useUpdateEffect(() => {
    isDisabledJudger(password, username);
  }, [username, password]);

  return (
    <>
      <Head>
        <title>ログイン</title>
      </Head>
      <h1 data-testid="login-title">Reactログインページ</h1>
      <input
        placeholder="ユーザ名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        data-testid="login-input-for-username"
      />
      <br />
      <input
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="login-input-for-password"
        type="password"
      />
      <br />
      <button onClick={clearValues} data-testid="login-clear-button">
        やり直す
      </button>
      <button
        onClick={onClickLogInButton}
        disabled={isDisabled}
        data-testid="login-login-button"
      >
        ログイン
      </button>
      <h1 data-testid="login-result-text">{resultText}</h1>
    </>
  );
};

export default LogInPage;
