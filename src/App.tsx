import { useState } from 'react';
import './FormFieldGroup.scss';
import MUIInputGroup from './components/MUIInputGroup';
import MUIInputGroupWithIcon from './components/MUIInputGroup2/MUIInputGroupWithIcon';

function App() {
 const [value, setValue] = useState('');
 const [value2, setValue2] = useState('');
 const [value3, setValue3] = useState('');
 const [value4, setValue4] = useState('');
 return (
  <>
   <div>
    <p className="label">Custom MUI input Text type</p>
    <MUIInputGroup
     value={value2}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue2(e.target.value)
     }
     type="email"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }

     //  required={false}
    />
   </div>

   <div>
    <p className="label">Custom MUI input Date type</p>
    <MUIInputGroup
     value={value}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value)
     }
     type="date"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }
     //  required={false}
    />
   </div>
   <div className="withIcon">
    <p className="label">Custom MUI input Date type WIth ICon</p>
    <MUIInputGroupWithIcon
     value={value}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value)
     }
     type="date"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }
     //  required={false}
    />
   </div>

   <div>
    <p className="label">Custom MUI input text type but disabled</p>
    <MUIInputGroup
     value={value3}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue3(e.target.value)
     }
     type="text"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }
     disabled={true}
     //  required={false}
    />
   </div>
   <div>
    <p className="label">
     Custom MUI input text type but not required
    </p>
    <MUIInputGroup
     value={value4}
     onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      setValue4(e.target.value)
     }
     type="text"
     name="name"
     label="Label"
     onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
      console.log(e.nativeEvent.key)
     }
     required={false}
    />
   </div>
  </>
 );
}

export default App;
