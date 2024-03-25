

import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode,

}) {


  return (
    <html >
      <body className='IBM_Plex_Sans'>

        {children}

      </body>
    </html>
  )
}
