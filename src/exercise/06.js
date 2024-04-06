// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = useRef(null);
  const submitButton = useRef(null);
  const [invalidChar, setInvalidChar] = React.useState('');
  const [username, setUsername] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault()
    //const username = event.target.elements[0].value
    //const username = event.target.elements.usernameInput.value;
    const username=usernameInputRef.current.value;

    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    //const value = event.target.value[event.target.value.length-1];
    event.preventDefault();
    setUsername(event.target.value.toLowerCase());
    // const value = usernameInputRef.current.value[usernameInputRef.current.value.length-1];
    // console.log("value", value);
    // const isValid = value === value.toLowerCase();
    // if (!isValid){
    //   setInvalidChar(usernameInputRef.current.value);
    //   // submitButton.current.disabled = true;
    // }
    // else {
    //   setInvalidChar('');
    //   setUsernameValue(usernameValue+value);
    //   // submitButton.current.disabled = false;
    // }
    // setInvalidChar(isValid ? '' : value[value.length-1]);
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      {/* <div>{invalidChar ?`The character ${invalidChar} is not permitteded`: ""}</div> */}
      <div>
        <label>Username:</label>
        <input type="text" id="usernameInput" ref={usernameInputRef} onChange={(e)=>handleChange(e)} value={username}/>
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
