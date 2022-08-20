import React, { useState } from 'react';
import { SlowInput } from './SlowInput';

export const SlowForm2 = () => {

  const [field0, setField0] = useState('');
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [touch0, setTouch0] = useState(false);
  const [touch1, setTouch1] = useState(false);
  const [touch2, setTouch2] = useState(false);
  const [touch3, setTouch3] = useState(false);
  
  const handlerSubmit = (event) =>{
    event.preventDefault();
    console.log('submit slow form 2');
  }; 
    
  return (
    <form onSubmit={handlerSubmit}>
      <SlowInput
        name={'field0'}
        fieldValues={field0}
        touchedFields={touch0}
        handlerChange={(event) => setField0(event.currentTarget.value)}
        handleBlur={() => setTouch0(true)}
      />
      <SlowInput
        name={'field1'}
        fieldValues={field1}
        touchedFields={touch1}
        handlerChange={(event) => setField1(event.currentTarget.value)}
        handleBlur={() => setTouch1(true)}
      />
      <SlowInput
        name={'field2'}
        fieldValues={field2}
        touchedFields={touch2}
        handlerChange={(event) => setField2(event.currentTarget.value)}
        handleBlur={() => setTouch2(true)}
      />
      <SlowInput
        name={'field3'}
        fieldValues={field3}
        touchedFields={touch3}
        handlerChange={(event) => setField3(event.currentTarget.value)}
        handleBlur={() => setTouch3(true)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
