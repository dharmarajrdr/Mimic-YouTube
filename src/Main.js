import React, { useState } from 'react'
import Videos from './Videos'
import './Main.css'

const Main = () => {
  let rows = [], numrows = 10;
  for (let i = 0; i < numrows; i++) {
    rows.push(<Videos key={i} url={'https://source.unsplash.com/featured/300x15' + i} />);
  }
  return (
    <div id='main' className='FRSS'>
      {rows}
    </div>
  )
}

export default Main