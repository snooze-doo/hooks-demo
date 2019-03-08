import React from 'react'

const Row = ({ title, children }) => (
  <div className='row'>
    <span className='row-title'>{title}</span>
    {children}
  </div>
)

export default Row