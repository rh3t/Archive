// Import
import styles from './Header.module.css'

// Props
interface HeaderProps {
    id: string
    text: string
    working: boolean
}

// Component
const Header = ({text, id, working}: HeaderProps) => {
    return(

        <div id = {id} className = {styles.headerContainer}>
            <p className = {styles.headerContent}>
                {'>'} {text}
            </p>
            {working ? <img className = {`${styles.headerImage} ${styles.green}`} src = '/images/check.svg' width = {20}/> : <img className = {`${styles.headerImage} ${styles.red}`} src = '/images/close.svg' width = {20}/>}
        </div>

    )
}

export default Header;