import React from 'react'

 const title = ({subtitle,title,title2}) => {
  return (
   <div className="headings">
    <h5>{subtitle}</h5>
    <h1>{title}</h1>
    <h1>{title2}</h1>

   </div>
  )
}
export default title
