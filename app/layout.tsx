"use client"
import React  from 'react'
import './globals.css'

function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>stlious</title>
      </head>
      <body>
      {children}
      </body>
      </html>
      </>
  )
}

export default RootLayout
