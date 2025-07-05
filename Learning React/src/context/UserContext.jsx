import React, { createContext } from 'react'

// Create a context to share data across components
export const DataContext = createContext();

const UserContext = ({children}) => {

    const username = "Saurabh"
  return (
    <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext