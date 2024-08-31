import React, { useState, useRef } from 'react';
import {
 TextField,
 TextFieldProps,
 InputAdornment,
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import '../../FormFieldGroup4.scss';

interface InputGroupProps extends Omit<TextFieldProps, 'variant'> {
 label: string;
 customInputGroupClassName?: string;
 setZeroMargin?: boolean;
}

const MUIInputGroupWithIcon: React.FC<InputGroupProps> = ({
 label,
 required = true,
 customInputGroupClassName = 'fms-field-group',
 setZeroMargin = false,
 type,
 ...textFieldProps
}) => {
 const [inputType, setInputType] = useState(type);
 const inputRef = useRef<HTMLInputElement>(null);
 const isDateInput = type === 'date';

 const handleDateClick = () => {
  if (isDateInput && inputRef.current) {
   inputRef.current.showPicker();
  }
 };

 return (
  <div
   className={`${customInputGroupClassName} ${
    setZeroMargin ? 'reset-margin' : ''
   } ${isDateInput ? 'date-input' : ''}`}
  >
   <TextField
    label={label}
    required={required}
    variant="outlined"
    type={inputType}
    inputRef={inputRef}
    onFocus={() => {
     if (isDateInput) {
      setInputType('date');
     }
    }}
    onBlur={(e) => {
     if (isDateInput && !e.target.value) {
      setInputType('text');
     }
    }}
    InputProps={{
     ...(isDateInput && {
      endAdornment: (
       <InputAdornment position="end">
        <CalendarTodayIcon
         className="custom-calendar-icon"
         onClick={handleDateClick}
        />
       </InputAdornment>
      ),
     }),
     onClick: handleDateClick,
    }}
    {...textFieldProps}
   />
  </div>
 );
};

export default MUIInputGroupWithIcon;
