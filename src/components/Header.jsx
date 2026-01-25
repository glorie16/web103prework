import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Header.css'

function Header(){
    const navigate = useNavigate()

    return(
        <div>
          <h1>Artverse</h1>
        <h2>Find digital artists who inspire you.</h2>
        
        <div className="btn-container">
          <button className="view-creators" onClick={() => navigate('/')}>View All Artists</button>
          <button className="add-creator" onClick={() => navigate('/add-creator')}>Add an Artist</button>
          </div>

          </div>

    )
}

export default Header