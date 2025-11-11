import styles from './Title.module.css';

const Title = () => {
    return (

        <>
        
            <div className = {styles.Title}>
                <img src = '/icons/archive.svg' width = {50}/>
                <span>
                    archive.meddaugh.xyz
                </span>
            </div>

            <div className = {styles.Description}>
                Provided is an archive that contains almost everything I've developed and worked on publicly, including some other miscellaneous things to take a look at. Mostly everything is served off of a Cloudflare R2 bucket to save server load.
            </div>

            <div style = {{paddingTop: 5}}>
                <div className = {styles.Legend}><img src = '/icons/good.svg' width = {25}/> = Active/Working</div>
                <div className = {styles.Legend}><img src = '/icons/bad.svg' width = {25}/> = Discontinued/Not Working</div>
            </div>
            
        </>

    )
}

export default Title;