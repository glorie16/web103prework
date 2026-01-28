import { supabase } from "../client"
import {useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function EditCreator(){
    const { id } = useParams();
    const [ creator, setCreator ] = useState({name: '', url: '', description: '', imgURL:''})
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
                 <form className="input-form">
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"  
                        value={creator.name}
                        required 
                        />
                    <div/>

                    <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input 
                        type="text" 
                        id="image"
                        value={creator.imgURL}
                        />
                    </div>

                    <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <h2>Provide a link to the image of the artist.</h2>
                    <input 
                        type="text" 
                        id="desc"
                        value={creator.description}
                        />
                    </div>

                    <h2>Social Media Links</h2>
                    <h3>Provide at least one of the artist's social media links.</h3>
                    </div>

                    <div className="form-group">
                    <label htmlFor="youtube">Youtube</label>
                    <h2>The artist's Youtube handle (without the @ sign) </h2>
                    <input 
                        type="text" 
                        id="desc"
                        value={creator.url}
                        />
                    </div>

                    <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <h2>The artist's Instagram handle (without the @ sign)</h2>
                    <input 
                        type="text" 
                        id="desc"
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditCreator