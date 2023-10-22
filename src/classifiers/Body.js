import React from 'react'

export default function Body({className, style, children}) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
