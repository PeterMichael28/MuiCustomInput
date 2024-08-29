import React from 'react';
import Input from '../Input/Input';

interface InputGroupProps {
 label: string;
 forId: string;
 type: string;
 name: string;
 required?: boolean;
 onChange: React.ChangeEventHandler<HTMLInputElement>;
 onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
 value: string | number;
 isDisabled?: boolean;
 customInputGroupClassName?: string;
 setZeroMargin?: boolean;
 customInputClassName?: string;
 autoComplete?: string;
 maxLength?: number;
 placeholder?: string;
}

const InputGroup = ({
 label,
 forId,
 type,
 name,
 required = true,
 onChange,
 onKeyDown,
 value,
 isDisabled = false,
 customInputGroupClassName = 'fms-field-group',
 setZeroMargin = false,
 customInputClassName,
 autoComplete,
 maxLength = 30,
 placeholder = '',
}: InputGroupProps) => {
 return (
  <div
   className={`${customInputGroupClassName} ${
    setZeroMargin ? 'reset-margin' : ''
   }`}
  >
   <Input
    id={forId}
    type={type}
    name={name}
    required={true}
    onChange={onChange}
    value={value}
    isDisabled={isDisabled}
    onKeyDown={onKeyDown}
    customInputClassName={customInputClassName}
    autoComplete={autoComplete}
    maxLength={maxLength}
    placeholder={placeholder}
   />
   {label !== undefined ? (
    <label htmlFor={forId}>
     {label}
     {required ? (
      <em style={{ color: 'red', fontWeight: '700' }}>*</em>
     ) : (
      ''
     )}
    </label>
   ) : (
    ' '
   )}
  </div>
 );
};

export default InputGroup;
