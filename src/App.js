import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import List from './Pages/List'
import Startup from './Pages/StartupPage/Startup'
import './index.css'

function App() {

  return (
    <>
      <div className='appContainer'>
        <Routes>
          <Route path="/" exact element={<Startup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/launch" element={<List />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
