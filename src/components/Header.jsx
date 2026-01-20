import { useState } from 'react'
import '.Header.css'

function Header(){
    return(
        <div>
          <h1>Artverse</h1>
        <h2>Find digital artists who inspire you.</h2>
        
        <div className="btn-container">
          <button className="view-creators">View All Artists</button>
          <button className="add-creator">Add an Artist</button>
          </div>

          </div>

    )
}

export default Header