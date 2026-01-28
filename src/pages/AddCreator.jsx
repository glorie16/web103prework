import './AddCreator.css'
import { supabase } from '../client'
import Header from '../components/Header'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCreator(){
  const navigate = useNavigate();

  const [creator, setCreator] = useState({
    name:'',
    imageURL:'',
    description:'',
    url:'',
    insta_link:''
  })

   const handleChange = (e) => {
    const { name, value } = e.target
    setCreator(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data, error } = await supabase
      .from('creators')
      .insert([creator])
    if (error) {
      console.error('Error inserting creator:', error)
    } else {
      console.log('Creator added:', data)
      setCreator({ name: '', imageURL: '', description: '', url: '', insta_link:'' })
    }
  }
  
    return(
        <div>
            <Header></Header>
            <h2>Add an Artist</h2>
             <form className="input-form" onSubmit={handleSubmit}>
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
              <h3>Provide a link to the image of the artist.</h3>
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
              <h3>Provide a description of the artist.</h3>
              <label htmlFor="description">Description</label>
              <input 
                type="text" 
                id="desc"
                value={creator.description}
                name="description"
                onChange={handleChange}
                />
            </div>

            <div>
            <h2>Social Media Links</h2>
            <h3>Provide at least one of the artist's social media links.</h3>
            </div>

             <div className="form-group">
              <label htmlFor="youtube">Youtube</label>
              <h2>The artist's Youtube handle (without the @ sign) </h2>
              <input 
                type="text"
                id="youtube"
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
                value={creator.insta_link}
                name="insta_link"
                onChange={handleChange}
               />
            </div>

              {/*<div className="form-group">
              <label for="twitter">Twitter</label>
              <h2>The artist's Twitter handle (without the @ sign).</h2>
              <input type="text" id="twitter"></input>
            </div>*/}
            <input type="submit" value="Submit"/>
          </form>
        </div>
    )
}

export default AddCreator