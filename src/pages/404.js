import React from 'react'
import { Link } from 'gatsby'
import '../style/tailwind.css'

export default () => (
  <div className="w-screen h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl">404 Not Found</h1>
    <Link to="/">Go back to index</Link>
  </div>
)
