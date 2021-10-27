import './selectEntry.css'
import { useState } from 'react'

// s: selected; n: name; c: bgColor; f: fontColor;

function Entry({ s, n, c, f }) {
  return (
    <div className='selectPanel__collection__entry'>
      <h3 style={{ color: s ? c : '#585858' }}>{n}</h3>
    </div>
  )
}

export default Entry