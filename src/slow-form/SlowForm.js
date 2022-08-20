import React, { useState } from 'react';
import { SlowInput } from './SlowInput';

export const SlowForm = () => {
  const [fieldValues, setFieldValues] = useState({
    field0: '',
    field1: '',
    field2: '',
    field3: '',
  });
  const [touchedFields, setTouchedFields] = useState({
    field0: false,
    field1: false,
    field2: false,
    field3: false,
  });

  const handlerChange = (event) => {
    setFieldValues({...fieldValues, [event.currentTarget.name]: event.currentTarget.value});
  };

  const handlerBlur = (event) => {
    setTouchedFields({...touchedFields, [event.currentTarget.name]: true});
  };
  
  const handlerSubmit = (event) =>{
    event.preventDefault();
    console.log('submit slow form', fieldValues);
  }; 

  return (
    <form onSubmit={handlerSubmit}>
      <SlowInput
        name={'field0'}
        fieldValues={fieldValues}
        touchedFields={touchedFields}
        handlerChange={handlerChange}
        handleBlur={handlerBlur}
      />
      <SlowInput
        name={'field1'}
        fieldValues={fieldValues}
        touchedFields={touchedFields}
        handlerChange={handlerChange}
        handleBlur={handlerBlur}
      />
      <SlowInput
        name={'field2'}
        fieldValues={fieldValues}
        touchedFields={touchedFields}
        handlerChange={handlerChange}
        handleBlur={handlerBlur}
      />
      <SlowInput
        name={'field3'}
        fieldValues={fieldValues}
        touchedFields={touchedFields}
        handlerChange={handlerChange}
        handleBlur={handlerBlur}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
