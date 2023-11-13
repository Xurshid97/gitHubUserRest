import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import UserDetails from './components/UserDetails'
import ErrorPage from './components/ErrorPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:userId' element={<UserDetails />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
