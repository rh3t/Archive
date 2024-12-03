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
                This is an archive containing almost everything i've developed and worked on publically, including some other things. Some of these are unfinished and/or not working, while some of these are actual bangers and should get more attention. This place also has some miscellaneous stuff like some shitposts and some other stuff that I share. Feel free to take a look around. No judging past this point lmao. <br/><br/> Everything is served over a CloudFlare CDN.
            </p>
        
            <Separator/>

            <Header id = 'thelastfew' text = 'The Last Few | 2021'/>
            <Object cdn = {true} location = '/the-last-few/index.html'/>
            <Object cdn = {true} location = '/the-last-few/game.sb3'/>
            <br/>

            <Header id = 'equinox' text = 'Equinox | 2020'/>
            <Object location = '/equinox/Equinox Setup.exe'/>
            <Object location = '/equinox/game.sb3'/>
            <Object location = '/equinox/server.json'/>
            <br/>

            <Header id = 'odyssey' text = 'Odyssey | 2022'/>
            <Object location = '/odyssey/index.html'/>
            <Object location = '/odyssey/LICENSE'/>
            <Object location = '/odyssey/README.md'/>
            <Object location = '/odyssey/script.js'/>
            <br/>

            <Header id = 'prototype' text = 'Prototype | 2021'/>
            <Object location = '/prototype/index.html'/>
            <Object location = '/prototype/game.sb3'/>
            <Object location = '/prototype/server.json'/>
            <br/>

            <Header id = 'arsenal2' text = 'Arsenal 2 | 2019'/>
            <Object location = '/arsenal2/index.html'/>
            <Object location = '/arsenal2/game.sb3'/>
            <br/>

            <Header id = 'onenightatapizzaria' text = 'One Night at a Pizzaria | 2021'/>
            <Object location = '/onaap/index.html'/>
            <Object location = '/onapp/game.sb3'/>

            <Separator/>

            <Header id = 'misc' text = 'Miscellaneous'/>
            <Object location = '/misc/gymbro.txt'/>

            <Separator/>
        
        </>

    )
}

export default Index;