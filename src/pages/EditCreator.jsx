import { supabase } from "../client"
import {useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function EditCreator(){
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
            <div className="edit-creator-container">
                <h2>Edit Creator</h2>
            </div>
        </div>
    )
}

export default EditCreator