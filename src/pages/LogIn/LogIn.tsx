import { useState } from "react";
import { useUpdateEffect } from "react-use";

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

  const logInJudger = (username: string, password: string) => {
    if (username === "koki" && password === "pass") {
      setResultText("ログイン成功!!");
    } else if (username !== "koki" && password === "pass") {
      setResultText("ユーザ名が誤っています");
    } else if (username === "koki" && password !== "pass") {
      setResultText("パスワードが誤っています");
    } else {
      setResultText("ユーザ名・パスワードを正しく入力してください");
    }
  };

  const onClickLogInButton = () => {
    logInJudger(username, password);
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
      <h1 data-testid="login-title">Reactログインページ</h1>
      <input
        placeholder="ユーザ名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        data-testid="input-for-username"
      />
      <br />
      <input
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        data-testid="input-for-password"
      />
      <br />
      <button onClick={clearValues} data-testid="clear-button">
        やり直す
      </button>
      <button
        onClick={onClickLogInButton}
        disabled={isDisabled}
        data-testid="login-button"
      >
        ログイン
      </button>
      <h1 data-testid="result-text">{resultText}</h1>
    </>
  );
};

export default LogInPage;
