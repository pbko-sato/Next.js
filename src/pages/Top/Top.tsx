import Head from "next/head";
import { useRouter } from "next/navigation";
import ButtonUtil from "@/utils/ButtonUtil";
import "../../styles/main.css";
import "../../styles/utilComponents/ButtonUtil.css";
import PagePaths from "@/utils/PagePaths";
import Link from "next/link";

export const TopPage = () => {
  const router = useRouter();
  const onClickLogInAgainButton = () => {};

  return (
    <div className="main">
      <Head>
        <title>トップ</title>
      </Head>
      <h1 data-testid="top-title">Reactトップページ</h1>
      <h3 data-testid="top-text">ログイン御苦労。</h3>
      <Link href={PagePaths.LOGIN_PAGE.url}>
        <ButtonUtil
          content="もう一度ログインする"
          testId="top-login-again-button"
          onClick={onClickLogInAgainButton}
          disabled={false}
          className="button"
        />
      </Link>
    </div>
  );
};

export default TopPage;
