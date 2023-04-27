import {useState } from "react";
import Button from '../../atom/Button/Button'
import './Luckycard.css'
export default function Luckynumber(){
    const [number, setNumber] = useState()

    
    function handleNumber (event) {
        setNumber(event.target.value)
    }
     
    function Submit() {
        if(number<4){
            alert('you guessed a smaller number')
            return 
        }else if(number>4){
            alert('you guessed a bigger number')
            return 

        }else if(number==4){
            alert('congratulations you guessed the right number')
            return

        }
        
        const dataToSend = {
            number
        }
        


    }


        return (
            <div className="luckynumber">
                <h4 >Lucky Number Game</h4>
                <input className="inputType" placeholder=" Enter Guess lucky number" onChange = {handleNumber}/>
                <Button cuttonBtnStyle = 'submitBtn' clickFunction = {Submit}/>
            </div>
        )
    }