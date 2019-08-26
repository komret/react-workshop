import React, {useState} from 'react';

import {Mirror} from './Mirror';
import {Persons} from './Persons';
import {Present} from './Present';
import styles from '../css_modules/App.module.css';

export const App = () => {
    const [present, setPresent] = useState([]);

    const changeStatus = (event, name) =>
        setPresent(event.target.checked ?
            (present => [...present, name]) :
            (present => present.filter(person => person !== name)));

    return (
        <div className={styles.wrapper}>
            <Persons changeStatus={changeStatus}/>
            <Mirror present={present}/>
            <Present present={present}/>
        </div>
    );
};