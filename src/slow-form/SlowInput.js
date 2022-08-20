import React from 'react';

import {getFieldError} from '../validations/form';

export const SlowInput = ({name, fieldValues, handleBlur, handlerChange, touchedFields}) => {
  const value = fieldValues[name];
  const errorMessage = getFieldError(value);
  const touched = touchedFields[name];
  const displayErrorMessage = touched && errorMessage;
  return (
    <div>
      <label  htmlFor={`${name}-input`}>{name}:</label>
      <input
        id={`${name}-input`}
        name={name}
        type="text"
        onChange={handlerChange}
        onBlur={handleBlur}
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
