import React from 'react';
import palmer from '../../Assets/image/palmer.jpg'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div  className={styles.container_navbar} >
            <img className={styles.navbar} src={palmer} alt="" />
        </div>
    );
}

export default Navbar;
