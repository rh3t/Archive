// Import
"use client";
import styles from './Object.module.css';

// Props
interface ObjectProps {
    location: string
}

// Component
const Object = ({location}: ObjectProps) => {

    function handleClick(url: string) {
        window.open(`https://static.rh3t.dev/archive${url}`);
    }

    return (

        <p className = {styles.object} onClick = {() => handleClick(location)}>
            {location}
        </p>

    )
}

export default Object;