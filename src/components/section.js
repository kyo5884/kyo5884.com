import React from 'react'

const Section = props => (
  <section
    style={props.style}
    className={
      `flex flex-col items-stretch justify-center min-h-screen px-8 container mx-auto ${props.className}`
    }
  >
    <h2 className="text-3xl font-light antialiased text-center">{props.title}</h2>
    {props.children}
  </section>
)

export default Section
