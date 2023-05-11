import React, { useState } from 'react';
import './Border.css';
import Game from '../Game/Game';

const Border = () => {
    const[state,setState]=useState(Array(9).fill(null));
    const[isxturn,setIsxturn]=useState(true);
    const checkwinner=() =>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],        
        ];
        for(let logic of winner){
            const[a,b,c]=logic;
            if(state[a] !==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return false;
    };
    const iswinner=checkwinner();
    const handleclick=(index) => {
        if(state[index] !==null){
            return;
        }
        const copystate=[...state];
        copystate[index]=isxturn ? "X" :"O";
        setState(copystate);
        setIsxturn(!isxturn);
    };
    const handlerestart=() =>{
        setState(Array(9).fill(null));
    };
    return(
        <div className='container'>
            {iswinner ? (
                <>
                {iswinner} won the game{" "}
                 <button onClick={handlerestart}> start again </button>
                 </>
            ) : (
                <>
                <h4>player {isxturn ? "X" : "O"}  turn please move</h4>
           
            <div className="row">
                <Game onClick={() => handleclick(0)} value={state[0]}/>
                <Game  onClick={() => handleclick(1)} value={state[1]}/>
                <Game onClick={() => handleclick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Game onClick={() => handleclick(3)} value={state[3]}/>
                <Game onClick={() => handleclick(4)} value={state[4]}/>
                <Game onClick={() => handleclick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Game onClick={() => handleclick(6)} value={state[6]}/>
               <Game onClick={() => handleclick(7)} value={state[7]}/>
               <Game onClick={() => handleclick(8)} value={state[8]}/>
            </div>
            </>
            )}
        </div>
    );
};

export default Border;