import { useState, useEffect } from 'react'
import { Link, Route, Routes, Router } from 'react-router-dom';
import HomePage from './components/Homepage';
import './components/style.css'


function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default App
