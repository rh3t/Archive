// Component
import data from '@/metadata.json';
import styles from './Title.module.css';

// Component
const Title = () => {
    return (

        <div className = {styles.titleContainer}>
            <img src = '/lectern.png' width = {100}/>
            <div>
                <p>The Archive</p>
                <p className = {styles.version}>
                    v{data.version} - {data.build_date}
                </p>
            </div>
        </div>

    )
}

export default Title;