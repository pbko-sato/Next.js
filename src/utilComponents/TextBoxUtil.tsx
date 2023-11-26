import { ChangeEvent, useState } from "react";

type TextBoxUtilProps = {
  placeholder: string;
  value: string;
  testId: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextBoxUtil = (props: TextBoxUtilProps) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      data-testid={props.testId}
      type={props.type}
    />
  );
};

export default TextBoxUtil;
