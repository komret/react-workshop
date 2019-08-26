import React, {useState} from 'react'

import styles from '../css_modules/Mirror.module.css';
import mirror from '../assets/mirror.png';

export const Mirror = props => {
    const [answer, setAnswer] = useState('');

    const portrait = `/img/${answer}.jpg`;

    const getAnswer = () => setAnswer(props.present[Math.floor(Math.random() * props.present.length)]);

    return (
        <div onClick={getAnswer} className={styles.wrapper}>
            <img src={mirror} alt="mirror"  className={styles.mirror}/>
            {answer ?
                <img src={portrait} alt="portrait" className={styles.portrait}/> :
                <p className={styles.text}>Zrdcadlo, zrdcadlo, kdo je v kanclu nejkrásnější?</p>
            }
        </div>
    )
};