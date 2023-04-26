import { Fragment, useState } from 'react'
import './Form.css'
export default function Form () {
    const [name , setName] = useState('Riki')
    function handleNameChange (event) {
        setName(event.target.value)
    }
    function handleSubmision () {
        setName(name==='Riki'?'****':'Riki')
    }
    return (
        <Fragment>
            <input
            className='inputTag'
            placeholder='name'
            onChange={handleNameChange}

        />
        <button onClick={handleSubmision}>
            Submit form
        </button>
        <h1>My name is {name}</h1>
       </Fragment>
        )

    }


