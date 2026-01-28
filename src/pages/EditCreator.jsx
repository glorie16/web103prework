import { supabase } from "../client"
import {useState, useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'

function EditCreator(){
    const { id } = useParams();
    const [ creator, setCreator ] = useState({name: '', url: '', description: '', imageURL:'', insta_link:''})
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
                         setCreator({
                            name: data.name || '',
                            url: data.url || '',
                            description: data.description || '',
                            imageURL: data.imageURL || '',
                            insta_link: data.insta_link || ''
                        });
                    }

        }

        fetchCreator()
    },[id])

    const handleChange = (event) => {
    const { name, value } = event.target;
    setCreator((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
                        name="name"
                        value={creator.name}
                        onChange={handleChange}
                        required 
                        />
                        </div>

                    <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input 
                        type="text" 
                        id="image"
                        name="imageURL"
                        value={creator.imageURL}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <h2>Provide a link to the image of the artist.</h2>
                    <input 
                        type="text" 
                        id="desc"
                        name="description"
                        value={creator.description}
                        onChange={handleChange}
                        />
                    </div>

            
                    <h2>Social Media Links</h2>
                    <h3>Provide at least one of the artist's social media links.</h3>
                

                    <div className="form-group">
                    <label htmlFor="youtube">Youtube</label>
                    <h2>The artist's Youtube handle (without the @ sign) </h2>
                    <input 
                        type="text" 
                        id="link"
                        name="url"
                        value={creator.url}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <h2>The artist's Instagram handle (without the @ sign)</h2>
                    <input 
                        type="text" 
                        id="insta"
                        name="insta_link"
                        value={creator.insta_link}
                        onChange={handleChange}
                        />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditCreator