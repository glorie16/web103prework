import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../client'

function CreatorCard(props){
    const navigate = useNavigate();
    return(
        <div>
            <h2 className="name">{props.name}</h2>
            <p className="description">{props.description}</p>
        </div>
    )
}

export default CreatorCard