import { ChangeEvent, useState } from "react";
import "../styles/utilComponents/TextBoxUtil.css";

type TextBoxUtilProps = {
  placeholder: string;
  value: string;
  testId: string;
  type: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextBoxUtil = (props: TextBoxUtilProps) => {
  return (
    <input
      className="input-text-box"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      data-testid={props.testId}
      id={props.id}
      type={props.type}
    />
  );
};

export default TextBoxUtil;
