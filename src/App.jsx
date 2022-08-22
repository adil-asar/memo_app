import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './index.css'
import Main from './Main/Main'

const App = () => {

  const [mode,setMode] = useState()


  return (
    <div>
      <Header mode={mode} setMode={setMode} />
      <Main mode={mode} />
      <Footer mode={mode}/>
    </div>
  )
}

export default App