// import React, { useState } from 'react'

// function App() {
//   // hooks are special type of functions that allow you to use state and other React features in functional components
//   const [user, setuser] = useState('Saurabh')

//   const changeUser = () => {
//     setuser('Kartik')
//   }
//   return (
//     <>
//       <div>
//         <h1>Username is {user}</h1>
//         <button onClick={changeUser}>Change user</button>
//       </div>
//     </>
//   )
// }

// export default App

// import React from 'react'

// const App = () => {
//   // Here e is the event object that is passed to the submitHandler function when the form is submitted.
//   // The e.preventDefault() method is used to prevent the default action of the form submission which is to refresh the page.
//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log('Form submitted');
//     setusername('')
//   }
//   const [username, setusername] = React.useState('')
//   return (
//     <div>
//       <form onSubmit= {(e) => {
//         submitHandler(e)
//       }}>
//         <input
//         value = {username}
//         onChange={(e) => {
//           setusername(e.target.value)
//         }}
//         className='px-4 text-white py-3 rounded py-3 text-xl m-5' type="text" placeholder='Enter your name' />
//         <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
//       </form>
//     </div>
//   )
// }

// import React, { useState } from 'react'
// import Header from './Components/Header.jsx'

// const App = () => {
//   return (
//     <>
//       <Header />
//     </>
//   )
// }

// export default App

// import React from 'react'
// import Card from './Components/Card.jsx'

// const App = () => {

//   const users = [
//     {
//       "name": "Alice Johnson",
//       "city": "New York",
//       "age": 29,
//       "profession": "Software Engineer",
//       "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
//     },
//     {
//       "name": "Rahul Sharma",
//       "city": "Mumbai",
//       "age": 32,
//       "profession": "UX Designer",
//       "profilePhoto": "https://randomuser.me/api/portraits/men/2.jpg"
//     },
//     {
//       "name": "Emily Chen",
//       "city": "San Francisco",
//       "age": 26,
//       "profession": "Data Scientist",
//       "profilePhoto": "https://randomuser.me/api/portraits/women/3.jpg"
//     },
//     {
//       "name": "David Okoro",
//       "city": "Lagos",
//       "age": 35,
//       "profession": "Product Manager",
//       "profilePhoto": "https://randomuser.me/api/portraits/men/4.jpg"
//     },
//     {
//       "name": "Isabella Rossi",
//       "city": "Rome",
//       "age": 28,
//       "profession": "Marketing Specialist",
//       "profilePhoto": "https://randomuser.me/api/portraits/women/5.jpg"
//     }
//   ]


//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem, idx){
//           return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} profession={elem.profession} photo={elem.profilePhoto} />
//         })}
//       </div>
//     </div>
//   )
// }

// export default App


// import React, { useEffect } from 'react'
// import axios from 'axios'

// const App = () => {

//   const [data, setData] = React.useState([])

//   const getData = async () => {
//     // axios is a promise-based HTTP client for the browser and Node.js
//     // It gets the data in the form of a promise
//     // A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//     const response = await axios.get('https://picsum.photos/v2/list')
//     setData(response.data)  
//   }

//   useEffect(() => {
//     getData()
//   },[])

//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950'>
//         {data.map(function(Element, idx){
//           return <div key={idx} className='bg-gray-50 text-black flex item-center justify-between w-full px-7 py-6 rounded mb-3'>
//               <img className='h-40' src={Element.download_url} alt="" />
//               <h1>{Element.author}</h1>
//           </div>
//         })}
//       </div>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Contact from './pages/Contact.jsx'
import Headers from './Components/Headers.jsx'

const App = () => {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App