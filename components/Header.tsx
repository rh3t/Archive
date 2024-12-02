// Import
import styles from './Header.module.css'

// Props
interface HeaderProps {
    id: string
    text: string
}

// Component
const Header = ({text, id}: HeaderProps) => {
    return(

        <p id = {id} className = {styles.Header}>
            > {text}
        </p>

    )
}

export default Header;