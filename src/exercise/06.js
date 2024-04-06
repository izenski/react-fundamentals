// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';
import { useRef } from 'react';

function UsernameForm({onSubmitUsername}) {

  const usernameInputRef = useRef(null);

  const handleSubmit = event => {
    event.preventDefault()
    //const username = event.target.elements[0].value
    //const username = event.target.elements.usernameInput.value;
    const username=usernameInputRef.current.value;

    onSubmitUsername(username)
  }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <div>
        <label>Username:</label>
        <input type="text" id="usernameInput" ref={usernameInputRef}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
