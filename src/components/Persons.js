import React from 'react'

import styles from '../css_modules/Persons.module.css';

export const Persons = props => {
    return (
        <div className={styles.wrapper}>
            <h2>Kdo je v kanclu?</h2>
            <ul>
                {props.persons.map(person =>
                    <li key={person}>
                        <input type="checkbox" onClick={event => props.changeStatus(event, person)}/>
                        <span>{person}</span>
                    </li>
                )}
            </ul>
        </div>
    )
};