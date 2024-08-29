import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import '../../FormFieldGroup2.scss';



interface InputGroupProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
  customInputGroupClassName?: string;
  setZeroMargin?: boolean;
}

const MUIInputGroup: React.FC<InputGroupProps> = ({
  label,
  required = true,
  customInputGroupClassName = 'fms-field-group',
  setZeroMargin = false,
  ...textFieldProps
}) => {
  return (
    <div
      className={`${customInputGroupClassName} ${
        setZeroMargin ? 'reset-margin' : ''
      }`}
    >
      <TextField
        label={label}
        required={required}
        variant="outlined"
        {...textFieldProps}
      />


    </div>
  );
};

export default MUIInputGroup;