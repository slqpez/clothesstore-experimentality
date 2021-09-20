import React from 'react'
import footerListStyle from './footerList.module.css'

function FooterList({summary, details}) {
  return (
    <details>
      <summary>{summary}</summary>
      <ul>
        {details.map((detail , i)=> <li key={i}>{detail}</li>)}
      </ul>
    </details>
  )
}

export default FooterList
