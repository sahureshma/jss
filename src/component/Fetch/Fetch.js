import { useEffect, useState } from 'react';



export default function Fetch() {
  const [image , setImage] = useState('https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_960_720.jpg')
  async function getDog () {

    try{
        
        const response = await fetch('https://dog.ceo/api/breeds/image/random')
        const data = await response.json()
        setImage(data.message)
    }
    catch(error){
      console.log('i am from catch' ,error)
    }


  }
  useEffect(() =>{
    getDog();
  });

  

  return (
    <div className="App">
      <img 
        src={image}
        height={'500px'}
        width={'400px'}
        alt='dog image'
      />

      <button 
     
      onClick = {getDog}
      >Get Dog</button>

    </div>
  );
}
