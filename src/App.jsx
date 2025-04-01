import React from 'react'
import './App.css'
import InputBox from './components/InputBox'
import Heading from './components/Heading'

function App() {
  return(
    <>
      <Heading/>
      <div className='h-auto w-auto border-5'
        style={{
          backgroundImage: `url('https://img.freepik.com/premium-photo/3d-illustration-three-european-currencies-symbols-black-background-finance-concept_556904-663.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <InputBox />
      </div>
      </>
  
  )
}

export default App
