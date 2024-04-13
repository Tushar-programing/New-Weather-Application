import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Search from './component/search'
import SearchBar from './component/info'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
    </>
  )
}

export default App
