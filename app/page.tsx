// Import
import type { Metadata } from 'next';
import Title from '@/components/Title';
import Object from '@/components/Object';
import Header from '@/components/Header';
import Separator from '@/components/Separator';

// Meta
export const metadata: Metadata = {
    title: 'home | archive.rh3t.dev'
}

// Component
const Index = () => {
    return(

        <>
        
            <Title/>

            <Separator/>

            <p style = {{width: '50vw'}}>
                This is an archive (will eventually) contain almost everything i've developed and worked on publically, including some other miscellaneous things to take a look at. Everyhing is served off of a CloudFlare R2 bucket since pages doesn't allow for file uploads bigger then 25mib. <br/><br/> Sorted by complexity.
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
            <br/>

            <Header id = 'odyssey' text = 'Odyssey (2022)' working = {true}/>
            <Object cdn = {true} location = '/odyssey/index.html'/>
            <Object cdn = {true} location = '/odyssey/README.md'/>
            <Object cdn = {true} location = '/odyssey/LICENSE'/>
            <br/>

            <Header id = 'equinox' text = 'Equinox (2022)' working = {false}/>
            <Object cdn = {true} location = '/equinox/index.html'/>
            <Object cdn = {true} location = '/equinox/game.sb3'/>
            <Object cdn = {true} location = '/equinox/server.json'/>
            <Object cdn = {true} location = '/equinox/teaser_1.png'/>
            <br/>
            
            <Header id = 'arsenal2' text = 'Arsenal 2 (2019)' working = {true}/>
            <Object cdn = {true} location = '/arsenal2/index.html'/>
            <Object cdn = {true} location = '/arsenal2/game.sb3'/>
            <br/>

            <Header id = 'onaap' text = 'One Night at a Pizzaria (2019)' working = {true}/>
            <Object cdn = {true} location = '/onaap/index.html'/>
            <Object cdn = {true} location = '/onaap/game.sb3'/>
            <br/>

            <Header id = 'misc' text = 'Misc' working = {true}/>
            <Object cdn = {true} location = '/gymbro.txt'/>

            <Separator/>

            <p>
                You reached the end!
            </p>
        
        </>

    )
}

export default Index;