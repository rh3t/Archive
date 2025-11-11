"use client";

import styles from './Footer.module.css';
import { useEffect, useState } from 'react';

const Footer = () => {

    const handleClick = (url: string) => {
        window.open(url);
    }

    const [commitMessage, setCommitMessage] = useState("");
    async function getRepoVersion() {
        const res = await fetch('https://api.github.com/repos/rh3t/Archive/commits?per_page=1');
        const data = await res.json();

        return data[0].commit.message;
    }

    useEffect(() => {
        getRepoVersion().then(msg => {
            setCommitMessage(msg);
        })
    }, []);

    return (

        <div className = {styles.Footer}>

            <div className = {styles.Version}>
                {commitMessage}
            </div>

            <div className = {styles.Website} onClick = {() => handleClick('https://meddaugh.xyz')}>
                <img src = '/icons/desktop.svg' width = {20}/>
                meddaugh.xyz
            </div>

        </div>
    )

}

export default Footer;