import { MouseEventHandler } from "react";

type ButtonProps = {
  content: string;
  testId: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const ButtonUtil = (props: ButtonProps) => {
  return (
    <button
      data-testid={props.testId}
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.content}
    </button>
  );
};

export default ButtonUtil;
