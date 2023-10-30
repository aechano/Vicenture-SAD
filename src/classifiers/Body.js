import React from 'react'

export default function Body({className, style, children, ref}) {
  return (
    <div className={className} style={style} ref={ref}>
      {children}
    </div>
  )
}
