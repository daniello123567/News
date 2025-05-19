"use client"
import React, { Suspense } from 'react'
import './globals.css'

function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <Suspense fallback={<div>loading...</div>}>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>stlious</title>
      </head>
      <body>
      {children}
      </body>
      </html>
      </Suspense>
  )
}

export default RootLayout
