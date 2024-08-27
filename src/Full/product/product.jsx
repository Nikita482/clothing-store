import React, { useState } from 'react';
import styles from './product.module.css'; // Импортируем стили

function Product() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>
                Toggle Block
            </button>
            <div className={`${styles.block} ${isVisible ? styles.visible : styles.hidden}`}>
                This is a toggled block
            </div>
        </div>
    );
}

export default Product;
