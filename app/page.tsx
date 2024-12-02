// Import
import type { Metadata } from 'next';
import Title from '@/components/Title';
import Object from '@/components/Object';
import Header from '@/components/Header';
import Separator from '@/components/Separator';

// Meta
export const metadata: Metadata = {
    title: 'archive.rh3t.dev'
}

// Component
const Index = () => {
    return(

        <>
        
            <Title/>

            <Separator/>

            <p style = {{width: '50vw'}}>
                This is an archive containing almost everything i've developed and worked on publically, including some other miscellaneous things to take a look at. Everything is served on a CloudFlare R2 bucket and you can check the status of the project respectively. <br/><br/> Everything is sorted by complexity (top to bottom).
            </p>
        
            <Separator/>

            <Header id = 'prototype' text = 'Prototype (2021)' working = {true}/>
            <Object cdn = {true} location = '/prototype/index.html'/>
            <Object cdn = {true} location = '/prototype/game.sb3'/>
            <br/>

            <Header id = 'thelastfew' text = 'The Last Few (2021)' working = {true}/>
            <Object cdn = {true} location = '/the-last-few/index.html'/>
            <Object cdn = {true} location = '/the-last-few/game.sb3'/>
            <Object location = '/servers/the-last-few.js'/>

            <Separator/>

            <p>
                You reached the end!
            </p>
        
        </>

    )
}

export default Index;