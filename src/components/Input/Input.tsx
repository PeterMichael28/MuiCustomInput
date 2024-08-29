import React from "react";

interface InputProps {
  id: string;
  type: string;
  name: string;
  required?: boolean; // Made optional with TypeScript's optional type
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  value?: string | number;
  isDisabled?: boolean; // Made optional
  customInputClassName?: string; // Made optional
  autoComplete?: string; // Made optional
  maxLength?: number; // Made optional
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  name,
  required = false,
  onChange,
  onKeyDown,
  value,
  isDisabled = false,
  customInputClassName = "fms-form-field",
  autoComplete = "off",
  maxLength = 120,
  placeholder = ""
}) => {
  // Use the spread operator to apply all props. Overrides for specific props can be added as needed.
  const inputProps = {
    id,
    type,
    name,
    required,
    onChange,
    onKeyDown,
    value,
    disabled: isDisabled,
    className: customInputClassName,
    autoComplete,
    maxLength,
    placeholder
  };

  return <input {...inputProps} />;
};

export default Input;
