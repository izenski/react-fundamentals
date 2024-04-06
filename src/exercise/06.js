// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = useRef(null);
  const submitButton = useRef(null);
  const [invalidChar, setInvalidChar] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault()
    //const username = event.target.elements[0].value
    //const username = event.target.elements.usernameInput.value;
    const username=usernameInputRef.current.value;

    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    //const value = event.target.value[event.target.value.length-1];
    const value = usernameInputRef.current.value[usernameInputRef.current.value.length-1];
    const isValid = value === value.toLowerCase();
    if (!isValid){
      setInvalidChar(value);
      submitButton.current.disabled = true;
    }
    else {
      setInvalidChar('');
      submitButton.current.disabled = false;
    }
    setInvalidChar(isValid ? '' : value[value.length-1]);
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>{invalidChar ?`The character ${invalidChar} is not permitted`: ""}</div>
      <div>
        <label>Username:</label>
        <input type="text" id="usernameInput" ref={usernameInputRef} onChange={(e)=>handleChange(e)} />
      </div>
      <button type="submit" ref={submitButton}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
