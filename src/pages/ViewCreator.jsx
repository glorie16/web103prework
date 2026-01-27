import { supabase } from "../client"
import {useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams, Link } from 'react-router-dom'

function ViewCreator(){
    const { id } = useParams();
    const [ creator, setCreator ] = useState(null)
    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select(`
                    id,
                    name,
                    url,
                    description,
                    imageURL
                    `)
                    .eq('id', id)
                    .single();

                    if (error) {
                       console.error(error)
                    }
                    else{
                        setCreator(data)
                    }

        }

        fetchCreator()
    },[id])

        return(
        <div>
            <Header></Header>
            <div className="view-creator-container">
                <h2>{creator?.name}</h2>
                <p>{creator?.description}</p>
                {creator && (
                    <Link to={`/edit/${creator.id}`} className="btn">
                        Edit Creator
                    </Link>
                    )}
            </div>
        </div>
    )
}

export default ViewCreator