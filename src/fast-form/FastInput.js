import React, { useState } from 'react';
import {getFieldError} from '../validations/form';

export const FastInput = ({name}) => {

  const [value, setValue]  = useState('');
  const [touched, setTouched] = useState(false);
  const errorMessage = getFieldError(value);
  const displayErrorMessage = touched && errorMessage;
  
  return (
    <div>
      <label htmlFor={`${name}-input`}>{name}:</label> 
      <input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={(event) => setValue(event.currentTarget.value)}
        onBlur={() => setTouched(true)}
        pattern="[a-z]{3,10}"
        required
        aria-describedby={displayErrorMessage ? `${name}-error` : undefined}
      />
      {displayErrorMessage ? (
        <span role="alert" id={`${name}-error`} className="error-message">
          {errorMessage}
        </span>
      ) : null}
    </div> 
  );
};
