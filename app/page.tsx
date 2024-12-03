// Import
import type { Metadata } from 'next';
import Title from '@/components/Title';
import Object from '@/components/Object';
import Header from '@/components/Header';
import Separator from '@/components/Separator';

// Meta
export const metadata: Metadata = {
    title: `home | archive.rh3t.dev`
}

// Component
const Index = () => {
    return(

        <>
        
            <Title/>

            <Separator/>

            <p style = {{width: '50vw'}}>
                This is an archive containing almost everything i've developed and worked on publically, including some other miscellaneous things to take a look at. Everything is served on a CloudFlare R2 bucket and you can check the status of the project respectively. <br/>
            </p>
        
            <Separator/>

            <Header id = 'thelastfew' text = 'The Last Few' working = {true}/>
            <Object cdn = {true} location = '/the-last-few/index.html'/>
            <Object cdn = {true} location = '/the-last-few/game.sb3'/>
            <Object location = '/servers/the-last-few.js'/>
            <br/>

            <Header id = 'equinox' text = 'Equinox' working = {false}/>
            <Object location = '/equinox/Equinox Setup.exe'/>
            <Object location = '/equinox/game.sb3'/>
            <Object location = '/equinox/server.json'/>
            <br/>

            <Header id = 'odyssey' text = 'Odyssey' working = {false}/>
            <Object location = '/odyssey/index.html'/>
            <Object location = '/odyssey/LICENSE'/>
            <Object location = '/odyssey/README.md'/>
            <Object location = '/odyssey/script.js'/>
            <br/>

            <Header id = 'prototype' text = 'Prototype' working = {false}/>
            <Object location = '/prototype/index.html'/>
            <Object location = '/prototype/game.sb3'/>
            <Object location = '/prototype/server.json'/>
            <br/>

            <Header id = 'arsenal2' text = 'Arsenal 2' working = {false}/>
            <Object location = '/arsenal2/index.html'/>
            <Object location = '/arsenal2/game.sb3'/>
            <br/>

            <Header id = 'onenightatapizzaria' text = 'One Night at a Pizzaria' working = {false}/>
            <Object location = '/onaap/index.html'/>
            <Object location = '/onapp/game.sb3'/>

            <Separator/>

            <Header id = 'misc' text = 'Miscellaneous' working = {true}/>
            <Object location = '/misc/gymbro.txt'/>

            <Separator/>
        
        </>

    )
}

export default Index;