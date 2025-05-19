import React from 'react'
import './globals.css'
import { Metadata } from 'next'
export const metadata:Metadata={
  title:"stloius",
  icons:"https://i.pinimg.com/474x/15/b8/4f/15b84f3a60f426a57b00a1f3dcf7a7aa.jpg"
}
function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
      {children}
      </body>
      </html>
  )
}

export default RootLayout
