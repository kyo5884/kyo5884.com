import React from 'react'

const Card = props => (
  <div className="flex flex-col sm:flex-row sm:items-center shadow-lg rounded-lg bg-white my-8 overflow-hidden">
    <img
      className="sm:m-6 sm:rounded-full w-full h-auto sm:w-auto sm:h-48"
      src="http://dummyimage.com/480x480"
      alt={props.title}
    ></img>
    <div className="m-4 sm:m-8 sm:ml-2">
      <h3 className="text-3xl font-hairline">{props.title}</h3>
      <p className="-mt-2 mb-2 text-lg">
        <a href={props.url}>{props.linkTitle}</a>
      </p>
      <p className="font-light italic antialiased text-sm">
        {props.description}
      </p>
      <div className="mt-2">{props.children}</div>
    </div>
  </div>
)

export default Card
