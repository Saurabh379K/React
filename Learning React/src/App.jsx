import React, { useState } from 'react'

function App() {
  // hooks are special type of functions that allow you to use state and other React features in functional components
  const [user, setuser] = useState('Saurabh')

  const changeUser = () => {
    setuser('Kartik')
  }
  return (
    <>
      <div>
        <h1>Username is {user}</h1>
        <button onClick={changeUser}>Change user</button>
      </div>
    </>
  )
}

export default App
