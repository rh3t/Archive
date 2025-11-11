"use client";

import styles from './Object.module.css';

interface ObjectProps {
    dir: string,
    file: string
}

const Object = ({dir, file}: ObjectProps) => {

    const openObject = (dir: string, file: string) => {

        window.open(`https://cdn.meddaugh.xyz/archive/${dir}/${file}`);
        
    }

    return (

        <div className = {styles.Object} onClick = {() => openObject(dir, file)}>
            ./{file}
        </div>

    )
}

export default Object;