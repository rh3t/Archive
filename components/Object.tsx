// Import
"use client";
import styles from './Object.module.css';

// Props
interface ObjectProps {
    location: string
    cdn?: boolean
}

// Component
const Object = ({location, cdn}: ObjectProps) => {

    function handleClick(url: string) {
        
        if (cdn) {
            window.open(`https://archive-cdn.rh3t.dev${url}`);
        } else {
            window.open(url);
        }

    }

    return (

        <p className = {styles.object} onClick = {() => handleClick(location)}>
            {location}
        </p>

    )
}

export default Object;