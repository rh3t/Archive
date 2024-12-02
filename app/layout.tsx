// Import
import './globals.css';

// Component
const RootLayout = ({children}: {children: React.ReactNode}) => {
    return (

        <html lang = 'en'>
            <head>
                <meta name = 'viewport' content = 'width=device-width, initial-scale=1'/>
            </head>
            <body>
                {children}
            </body>
        </html>

    )
}

export default RootLayout