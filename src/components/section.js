import React from 'react'

const Section = props => (
  <section
    style={props.style}
    className={
      'flex flex-col items-center justify-center min-h-screen w-screen px-8 ' +
      props.className
    }
  >
    <h2 className="text-3xl font-light antialiased">{props.title}</h2>
    {props.children}
  </section>
)

export default Section
