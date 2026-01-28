import './AddCreator.css'
import Header from '../components/Header'

function AddCreator(){
    return(
        <div>
            <Header></Header>
            <h2>Add an Artist</h2>
             <form className="input-form">
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" required />
            <div/>

            <div className="form-group">
              <label for="image">Image</label>
              <input type="text" id="image"></input>
            </div>

            <div className="form-group">
              <label for="description">Description</label>
              <h2>Provide a link to the image of the artist.</h2>
              <input type="text" id="desc"></input>
            </div>

            <h2>Social Media Links</h2>
            <h3>Provide at least one of the artist's social media links.</h3>
            </div>

             <div className="form-group">
              <label for="youtube">Youtube</label>
              <h2>The artist's Youtube handle (without the @ sign) </h2>
              <input type="text" id="desc"></input>
            </div>

             {/*<div className="form-group">
              <label for="instagram">Instagram</label>
              <h2>The artist's Instagram handle (without the @ sign)</h2>
              <input type="text" id="desc"></input>
            </div>

             <div className="form-group">
              <label for="twitter">Twitter</label>
              <h2>The artist's Twitter handle (without the @ sign).</h2>
              <input type="text" id="twitter"></input>
            </div>*/}
          </form>
        </div>
    )
}

export default AddCreator