import './Button.css'


export default function Button ({cuttonBtnStyle,clickFunction}) {
    return (
        <button 
            className={cuttonBtnStyle}
            onClick={clickFunction}
        >
        Match Number
        </button>
    )
}