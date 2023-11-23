import Head from "next/head";
import { useRouter } from "next/navigation";

const TopPage = () => {
  const router = useRouter();
  const onClickLogInAgainButton = () => {
    router.push("/LogIn/LogIn", "/Login/");
  };

  return (
    <>
      <Head>
        <title>トップ</title>
      </Head>
      <h1 data-testid="top-title">Reactトップページ</h1>
      <h3 data-testid="top-text">ログイン御苦労。</h3>
      <button
        onClick={onClickLogInAgainButton}
        data-testid="top-login-again-button"
      >
        もう一度ログインする
      </button>
    </>
  );
};

export default TopPage;
