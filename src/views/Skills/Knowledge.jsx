import React from 'react'

const Knowledge = ({ data }) => {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.details}</p>
    </>
  )
}

export default Knowledge
