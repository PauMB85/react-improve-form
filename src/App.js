import React from 'react';
import { SlowForm } from './slow-form/SlowForm';
import { SlowForm2 } from './slow-form/SlowForm2';
import  { FastForm } from './fast-form/FastForm';

function App() {
  return (
    <div>
      <h1>Slow Form</h1>
      <SlowForm />
      <h1>Slow Form 2</h1>
      <SlowForm2 />
      <h1>Fast Form</h1>
      <FastForm />
    </div>
  );
}

export default App;
