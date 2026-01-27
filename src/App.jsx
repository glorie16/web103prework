import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import AddCreator from './pages/AddCreator'
import ViewCreator from './pages/ViewCreator'
import EditCreator from './pages/EditCreator'
import Home from './pages/Home'

function App() {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-creator" element={<AddCreator/>}/>
          <Route path="/edit/:id" element={<EditCreator/>}/>
          <Route path="view-creator/:id" element={<ViewCreator/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
         
        </div>
  )
}

export default App
