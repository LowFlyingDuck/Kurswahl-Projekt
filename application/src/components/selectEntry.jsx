import './selectEntry.css'
import { useState } from 'react'

// s: selected; n: name; c: bgColor; f: fontColor;

function Entry({ onclick, s, n, c, f }) {
  return (
    <div style={s ? {background: c} : {}} onClick={() => onclick(n)} className='selectPanel__collection__entry'>
      <h3 style={s ? {color: f} : {color: '#585858'}}>{n}</h3>
    </div>
  )
}

export default Entry