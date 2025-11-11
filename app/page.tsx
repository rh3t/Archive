import Title from "@/components/Title";
import Object from "@/components/Object";
import Divider from "@/components/Divider";
import Section from "@/components/Section";

const Page = () => {
    return (
        <>
        
            <Title/>
            <Divider/>

            <Section text = 'Prototype (2021)' status = {false}>

                <Object dir = 'prototype' file = 'game.sb3'/>
                <Object dir = 'prototype' file = 'index.html'/>
                <Object dir = 'prototype' file = 'server.json'/>

            </Section>

            <Section text = 'The Last Few (2021)' status = {false}>

                <Object dir = 'tlf' file = 'data.json'/>
                <Object dir = 'tlf' file = 'game.sb3'/>
                <Object dir = 'tlf' file = 'index.html'/>

            </Section>

            <Section text = 'One Night at a Pizzaria (2020)' status = {true}>

                <Object dir = 'onaap' file = 'game.sb3'/>
                <Object dir = 'onaap' file = 'index.html'/>

            </Section>

            <Section text = 'Odyssey (2021)' status = {true}>

                <Object dir = 'odyssey' file = 'index.html'/>
                <Object dir = 'odyssey' file = 'LICENSE'/>
                <Object dir = 'odyssey' file = 'README.md'/>
                <Object dir = 'odyssey' file = 'script.js'/>

            </Section>

            <Section text = 'Equinox (2022)' status = {false}>

                <Object dir = 'equinox' file = 'Equinox.zip'/>
                <Object dir = 'equinox' file = 'game.sb3'/>
                <Object dir = 'equinox' file = 'server.json'/>
                <Object dir = 'equinox' file = 'teaser_1.png'/>

            </Section>

            <Section text = 'Arsenal 2 (2020)' status = {true}>
            
                <Object dir = 'arsenal' file = 'game.sb3'/>
                <Object dir = 'arsenal' file = 'index.html'/>

            </Section>

            <Divider/>
        
        </>
    )
}

export default Page;