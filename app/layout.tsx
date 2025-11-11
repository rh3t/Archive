import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { Roboto_Mono } from 'next/font/google';

export const metadata: Metadata = {
    title: 'home • archive.meddaugh.xyz'
}

const font = Roboto_Mono({
    subsets: ['latin']
})

interface LayoutProps {
    children: React.ReactNode
}

const RootLayout = ({children}: LayoutProps) => {
    return (

        <html lang = 'en' className = {font.className}>
            <body>
                {children}
                <Footer/>
            </body>
        </html>

    )
}

export default RootLayout;