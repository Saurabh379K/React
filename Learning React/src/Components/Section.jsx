import React, { useContext } from 'react'
import { DataContext } from '../context/UserContext'

const Section = () => {
    const name = useContext(DataContext)
  return (
    <div>
        <h1>This is Section {name}</h1>
    </div>
  )
}

export default Section