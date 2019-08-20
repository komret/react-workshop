import React from 'react'

import styles from '../css_modules/Present.module.css';

export const Present = props => {
    return (
        <div className={styles.wrapper}>
            <h2>Přítomni:</h2>
            <ul>
                {props.present.map(person =>
                    <li key={person}>
                        {person}
                    </li>
                )}
            </ul>
        </div>
    )
};