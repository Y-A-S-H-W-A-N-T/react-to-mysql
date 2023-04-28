import {useState} from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [name,setName] = useState('')
  const [place,setPlace] = useState('')


  const handleSubmit = async(e)=>{
    e.preventDefault()
    try
    {
      await axios.post("http://localhost:5000/",{
        mode:'no-cors',
        name,
        place
      })
      console.log("Data sent")
    }
    catch(e)
    {
      console.log(e)
    }
  }

  return (
    <div className="start">
      <form onSubmit={handleSubmit}>
          <input type="text" name='name' placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="text" name='place'  placeholder="Place" value={place} onChange={(e)=>setPlace(e.target.value)}/>
          <input type="submit" value="SUBMIT" className='sub'/>
      </form>
    </div>
  );
}

export default App;
