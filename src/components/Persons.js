import React from 'react'

import data from '../data.json';
import styles from '../css_modules/Persons.module.css';

export const Persons = props => {
    return (
        <div className={styles.wrapper}>
            <h2>Kdo je v kanclu?</h2>
            <ul>
                {data.map(person =>
                    <li key={person}>
                        <input type="checkbox" onClick={event => props.changeStatus(event, person)}/>
                        <span>{person}</span>
                    </li>
                )}
            </ul>
        </div>
    )
};