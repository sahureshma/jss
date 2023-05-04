
import { useState } from "react"
import axios from "axios"

export default function Changer() {
const [img, setImg] = useState('https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600')

async function handalClick(){
 const res= await axios.get('https://dog.ceo/api/breeds/image/random')
  setImg(res.data.message)
 }


    return (
        <div>

        <h1>Image Changing </h1>
      
<button onClick={handalClick} >Click Me</button>

       <img src={img} width='200' height='200'/>
       
        </div>
    )
    }