import Head from "next/head";
import { useRouter } from "next/navigation";
import ButtonUtil from "@/utilComponents/ButtonUtil";
import "../../styles/main.css";
import "../../styles/utilComponents/ButtonUtil.css";

const TopPage = () => {
  const router = useRouter();
  const onClickLogInAgainButton = () => {
    router.push("/LogIn/LogIn", "/Login/");
  };

  return (
    <div className="main">
      <Head>
        <title>トップ</title>
      </Head>
      <h1 data-testid="top-title">Reactトップページ</h1>
      <h3 data-testid="top-text">ログイン御苦労。</h3>
      <ButtonUtil
        content="もう一度ログインする"
        testId="top-login-again-button"
        onClick={onClickLogInAgainButton}
        disabled={false}
        className="button"
      />
    </div>
  );
};

export default TopPage;
