import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0) // useState is a hook that allows us to add state to functional components
  // useState is a function that returns an array with two elements
  // The first element is the current state value and the second element is a function that updates the state value

  // let counter = 5

  const addValue = () => {
    console.log("clicked to add", counter+1);
    //counter = counter + 1
    setCounter(counter+1)
  }

  const removeValue = () => {
    console.log("clicked to remove", counter);
    if(counter > 0) {
      setCounter(counter-1)
    }
    else {
      // instead of showing negative value we set the value to 0
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Saurabh</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
