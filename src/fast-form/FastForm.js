import React from 'react';
import { FastInput } from './FastInput';

export const FastForm = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log('submit fast form', Object.fromEntries(formData.entries()));
  };
  return (
    <form onSubmit={handlerSubmit}>
      <FastInput name={'field0'} />
      <FastInput name={'field1'} />
      <FastInput name={'field2'} />
      <FastInput name={'field3'} />
      <button type="submit">Submit</button>
    </form>
  );
};
