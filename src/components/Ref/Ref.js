import { useEffect ,useRef } from "react"
import './Ref.css'

export default function Use() {

    
    const inputRef = useRef(null)

    useEffect(()=> {
    
    },[])
    
    function handleClick () {
        inputRef.current.click()
      
    }

    return (
        <div className='primary'>
          <button onClick={handleClick}>Upload Image</button>
          <input ref={inputRef} type="file" />
          
        </div>
      

  )
}
