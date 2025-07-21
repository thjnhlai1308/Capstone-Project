import { useState, useEffect } from 'react'
import { Link, Route, Routes, Router, useNavigate, useLocation } from 'react-router-dom';
import HomePage from './components/Homepage';
import Navbar from './components/Navbar';
import './components/style.css'


function App() {
  const [user, setUser] =useState({})
  const [favorites, setFavorites] = useState([])

  const navigate = useNavigate()
  const location = useLocation()

  const getHeaders = () => ({
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  })

  const attemptLoginWithToken = async () => {
    const token = window.localStorage.getItem('token')
    if (token) {
      try {
        const {data} = await axios.get('/api/auth/me', getHeaders())
        setUser(data)
      } catch (error) {
        console.error(err)
        window.localStorage.removeItem('token')
        setUser({})
      }
    }
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setUser({})
    navigate('/')
  }

  useEffect(() => {
    attemptLoginWithToken()
  }, [])

  useEffect(() => {
    const fetchFavorites =async () => {
      if (user.id) {
        try {
          const {data} = await axios.get('/api/favorites', getHeaders())
          setFavorites(data)
        } catch (error) {
          console.error(err)
        }
      } else {
        setFavorites([])
      }
    }
    fetchFavorites()
  }, [user])



  return (
    <>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<Login attemptLoginWithToken={attemptLoginWithToken} />} />
      </Routes>
    </>
  )
}

export default App
