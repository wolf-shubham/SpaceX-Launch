import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import List from './Pages/List'
import Startup from './Pages/StartupPage/Startup'
import './index.css'
import UpcomingLaunches from './Pages/Launches/UpcomingLaunches'
import PastLaunches from './Pages/Launches/PastLaunches'
import LatestLaunches from './Pages/Launches/LatestLaunches'
import LaunchDetails from './Pages/LaunchDetailsPage'
import Astronauts from './Pages/Astronauts'

function App() {

  return (
    <>
      <div className='appContainer'>
        <Routes>
          <Route path="/" exact element={<Startup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/launch" element={<List />} />
          <Route path='/launches/upcoming' element={<UpcomingLaunches />} />
          <Route path='/launches/past' element={<PastLaunches />} />
          <Route path='/launches/latest' element={<LatestLaunches />} />
          <Route path='/launch/:id' element={<LaunchDetails />} />
          <Route path='/astronauts' element={<Astronauts />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
