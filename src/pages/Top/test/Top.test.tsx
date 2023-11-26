import { render, screen } from "@testing-library/react";
import TopPage from "../Top";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

const renderer = () => {
  render(<TopPage />);
};

describe("TopPage", () => {
  beforeEach(() => {
    renderer();
  });
  describe("表示テスト", () => {
    describe("初期表示について", () => {
      describe("部品がすべて表示され、内容が正しいこと", () => {
        test("ページタイトル", () => {
          expect(screen.getByTestId("top-title")).toHaveTextContent(
            "Reactトップページ"
          );
        });
        test("テキスト", () => {
          expect(screen.getByTestId("top-text")).toHaveTextContent(
            "ログイン御苦労。"
          );
        });
        test("「もう一度ログインする」ボタン", () => {
          expect(screen.getByRole("button")).toHaveTextContent(
            "もう一度ログインする"
          );
          expect(
            screen.getByTestId("top-login-again-button")
          ).not.toBeDisabled();
        });
      });
    });
  });
});
