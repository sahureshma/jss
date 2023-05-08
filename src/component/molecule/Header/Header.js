import React from 'react';
import styles from './Header.module.css';


import { ImMenu } from "react-icons/im";
export default function Header () {
    const navOptions = [
        <img src='https://thumbs.dreamstime.com/b/dot-globe-connections-network-logo-template-dot-globe-connections-network-logo-template-vector-140086589.jpg' height='150px' width='150px'></img>,
        'Home',
        'About' ,
        'Project' ,
        'Contacts' ,
        'Videos' ,
        'Login' 
       
    ]
    return (
        <header className={styles.header}>
            <div className={styles.navOption}>
                {
                    navOptions.map(page => (
                        <p>{page}</p>
                    ))
                }
            </div>
            <ImMenu
                className={styles.menu} 
                onClick={()=>( {navOptions})}
            />
        </header>
    )
}