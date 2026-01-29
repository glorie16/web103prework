import { supabase } from "../client"
import {useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams, useNavigate } from 'react-router-dom'

function ViewCreator(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [ creator, setCreator ] = useState({name: '', imageURL: '', description: ''})
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

    console.log("Image URL:", creator.imageURL);

    const deleteCreator = async (event) =>{
        event.preventDefault();

        const confirmed = window.confirm("Are you sure you want to delete this artist?");
        
        if(!confirmed) return;

        await supabase
            .from('creators')
            .delete()
            .eq('id', id)

            navigate('/')
    }

        return(
        <div>
            <Header></Header>
            <div className="view-creator-container">
                <h2>{creator.name}</h2>
                {creator?.imageURL && (
                    <img
                        src={creator.imageURL}
                        alt="Creator"
                        style={{width:'200px', marginTop: '10px'}}/>
                )}
                <p>{creator?.description}</p>
                {creator && (
                    <button onClick={() => navigate(`/edit/${creator.id}`)} className="edit-btn">
                        Edit Artist
                    </button>
                    )}

                <button className="delete-btn" onClick={deleteCreator}>
                    Delete Artist
                    </button>
            </div>
        </div>
    )
}

export default ViewCreator