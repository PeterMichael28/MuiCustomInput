import { useState } from 'react';
import './FormFieldGroup.scss';
import InputGroup from './components/InputGroup';
import { Input, TextField } from '@mui/material';
import MUIInputGroup from './components/MUIInputGroup';

function App() {
 const [value, setValue] = useState('');
 return (
  <>
   <div>
    <p className="label">Custom Input</p>
    <Input
     value={value}
     onChange={(e) => setValue(e.target.value)}
     id="name"
     type="name"
     name="name"
    />
   </div>

   <div>
    <p className="label">Custom Input Group</p>
    <InputGroup
     value={value}
     onChange={(e) => setValue(e.target.value)}
     forId="name"
     type="name"
     name="name"
     label="Label"
     onKeyDown={(e) => console.log(e.nativeEvent.key)}
    />
   </div>

   <div>
    <p className="label">Custom MUI Input Group</p>
    <MUIInputGroup
     value={value}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value)
     }
     type="name"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }
     //  required={false}
    />
   </div>

   <div>
    <p className="label">MUI Regular Textfield</p>
    <TextField
     id="outlined-basic"
     label="Label"
     variant="outlined"
     value={value}
     onChange={(e) => setValue(e.target.value)}
    />
   </div>
  </>
 );
}

export default App;
