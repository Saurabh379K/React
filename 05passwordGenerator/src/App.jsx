import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef is a React Hook that lets you create mutable object which holds a .current property
  const passwordRef = useRef(null)

  // useCallback is a React Hook that lets you cache a function definition between re-renders.
  //const cachedFn = useCallback(fn, dependencies)
  // It returns a memoized version of the callback that only changes if one of the dependencies has changed.
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
  
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // this is to select the text in the input field
    // passwordRef.current?.setSelectionRange(0,30); this is to select upto 30 characters although the whole text is copied
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect is a React Hook that lets you perform side effects in function components.
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // the difference between useCallback and useEFFect is that useCallback is used for optimization by avoiding unnecessary re-renders
  // and useEffect is used for side effects like fetching data, manipulating the DOM, etc.

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white text-black'>
          <input type="text" 
          value={password} 
          className='outline-none w-full py-1 px-3' 
          placeholder='Password' 
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev); // reverse the previous value
              }}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev); // reverse the previous value
              }}
              />
              <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
