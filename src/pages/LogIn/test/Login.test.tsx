import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import LogInPage from "../LogIn";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));

const renderer = () => {
  render(<LogInPage />);
};

describe("LogInPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    renderer();
  });
  afterEach(() => {
    cleanup();
  });
  describe("表示テスト", () => {
    describe("初期表示について", () => {
      describe("部品がすべて表示され、内容が正しいこと", () => {
        test("ページタイトル", () => {
          expect(screen.getByTestId("login-title")).toHaveTextContent(
            "Reactログインページ"
          );
        });
        test("ユーザ名のテキストボックス", () => {
          expect(
            screen.getByTestId("login-input-for-username")
          ).toBeInTheDocument();
          expect(screen.getByPlaceholderText("ユーザ名")).toBeInTheDocument();
          expect(screen.getByPlaceholderText("ユーザ名")).toHaveValue("");
        });
        test("パスワードのテキストボックス", () => {
          expect(
            screen.getByTestId("login-input-for-password")
          ).toBeInTheDocument();
          expect(screen.getByPlaceholderText("パスワード")).toBeInTheDocument();
          expect(screen.getByPlaceholderText("パスワード")).toHaveValue("");
        });
        test("「やり直す」ボタン", () => {
          expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
          expect(screen.getAllByRole("button")[0]).toHaveTextContent(
            "やり直す"
          );
        });
        test("「ログイン」ボタン", () => {
          expect(screen.getAllByRole("button")[1]).toBeInTheDocument();
          expect(screen.getAllByRole("button")[1]).toHaveTextContent(
            "ログイン"
          );
          expect(screen.getAllByRole("button")[1]).toBeDisabled();
        });
      });
    });

    describe("テキストボックスに入力があった場合のボタン活性制御について", () => {
      describe("ユーザ名のみ入力された場合", () => {
        beforeEach(() => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "koki" },
          });
        });
        test("「ログイン」ボタンが非活性であること", () => {
          expect(screen.getAllByRole("button")[1]).toBeDisabled();
        });
      });
      describe("パスワードのみ入力された場合", () => {
        beforeEach(() => {
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "pass" },
          });
        });
        test("「ログイン」ボタンが非活性であること", () => {
          expect(screen.getAllByRole("button")[1]).toBeDisabled();
        });
      });
      describe("ユーザ名・パスワードが入力された場合", () => {
        beforeEach(() => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "koki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "pass" },
          });
        });
        test("「ログイン」ボタンが活性であること", () => {
          expect(screen.getByTestId("login-login-button")).not.toBeDisabled();
        });
      });
    });

    describe("「ログイン」ボタンをクリックした際の表示について", () => {
      describe("ユーザ名に正しい値、パスワードに正しくない値が入力された場合", () => {
        beforeEach(async () => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "koki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "password" },
          });
          await waitFor(() => {
            expect(screen.getByTestId("login-login-button")).not.toBeDisabled();
          });
          fireEvent.click(screen.getByTestId("login-login-button"));
        });
        test("表示文言が正しいこと", () => {
          expect(screen.getByTestId("login-result-text")).toHaveTextContent(
            "パスワードが誤っています"
          );
        });
      });
      describe("パスワードに正しい値、ユーザ名に正しくない値が入力された場合", () => {
        beforeEach(async () => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "kokikoki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "pass" },
          });
          await waitFor(() => {
            expect(screen.getByTestId("login-login-button")).not.toBeDisabled();
          });
          fireEvent.click(screen.getByTestId("login-login-button"));
        });
        test("表示文言が正しいこと", () => {
          expect(screen.getByTestId("login-result-text")).toHaveTextContent(
            "ユーザ名が誤っています"
          );
        });
      });
      describe("ユーザ名・パスワード共に正しくない値が入力された場合", () => {
        beforeEach(async () => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "kokikoki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "password" },
          });
          await waitFor(() => {
            expect(screen.getByTestId("login-login-button")).not.toBeDisabled();
          });
          fireEvent.click(screen.getByTestId("login-login-button"));
        });
        test("表示文言が正しいこと", () => {
          expect(screen.getByTestId("login-result-text")).toHaveTextContent(
            "ユーザ名・パスワードを正しく入力してください"
          );
        });
      });
    });

    describe("「やり直す」ボタンをクリックした際の表示について", () => {
      describe("テキストボックスのみ値が入力されている場合", () => {
        beforeEach(async () => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "kokikoki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "password" },
          });
          await waitFor(() => {
            expect(screen.getByTestId("login-input-for-username")).toHaveValue(
              "kokikoki"
            );
            expect(screen.getByTestId("login-input-for-password")).toHaveValue(
              "password"
            );
          });
          fireEvent.click(screen.getByTestId("login-clear-button"));
        });
        test("テキストボックス内の値が消去されていること", () => {
          expect(screen.getByTestId("login-input-for-username")).toHaveValue(
            ""
          );
          expect(screen.getByTestId("login-input-for-password")).toHaveValue(
            ""
          );
        });
      });
      describe("テキストボックスに値が入力され、resultTextが表示されている場合", () => {
        beforeEach(async () => {
          fireEvent.change(screen.getByTestId("login-input-for-username"), {
            target: { value: "kokikoki" },
          });
          fireEvent.change(screen.getByTestId("login-input-for-password"), {
            target: { value: "password" },
          });
          await waitFor(() => {
            expect(screen.getByTestId("login-input-for-username")).toHaveValue(
              "kokikoki"
            );
            expect(screen.getByTestId("login-input-for-password")).toHaveValue(
              "password"
            );
          });
          fireEvent.click(screen.getByTestId("login-login-button"));
          await waitFor(() => {
            expect(screen.getByTestId("login-result-text")).toHaveTextContent(
              "ユーザ名・パスワードを正しく入力してください"
            );
          });
          fireEvent.click(screen.getByTestId("login-clear-button"));
        });
        test("テキストボックス内の値が消去されていること", () => {
          expect(screen.getByTestId("login-input-for-username")).toHaveValue(
            ""
          );
          expect(screen.getByTestId("login-input-for-password")).toHaveValue(
            ""
          );
        });
        test("resultTextが消去されていること", () => {
          expect(screen.getByTestId("login-result-text")).toHaveTextContent("");
        });
      });
    });
  });
});
