// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()

    const username = event.target.elements.usernameInput.value
    onSubmitUsername(username)
  }

  function handleOnChange(event) {
    const isValid = event.target.value === event.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} id="usernameInput" type="text" onChange={handleOnChange} />
      </div>
      {error && <div role='alert' style={{color: 'red'}}>{error}</div>}
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
