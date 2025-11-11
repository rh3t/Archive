import styles from './Section.module.css';

interface SectionProps {
    text: string,
    status?: boolean,
    children?: React.ReactNode
}

const Section = ({text, status, children}: SectionProps) => {

    if (status) {
        return (
            <>
            
                <div className = {styles.Section}>
                    {text}
                    <img src = '/icons/good.svg' width = {20}/>
                    <img src = '/icons/down.svg' width = {25}/>
                </div>
                {children}

            </>
        )
    } else {
        return (
            <>
            
                <div className = {styles.Section}>
                    {text}
                    <img src = '/icons/bad.svg' width = {25}/>
                    <img src = '/icons/down.svg' width = {25}/>
                </div>
                {children}
            
            </>
        )
    }

}

export default Section;