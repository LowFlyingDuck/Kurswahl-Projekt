import React from 'react'
import SP from '../components/selectPanel.jsx'
import OP from '../components/optionsPanel.jsx'
import { useState } from 'react';
import './LKSelect.css'
import c from '../config.json'


export default function LKSelect({ next }) {
  const [options, setOptions] = useState(update(true));

  function update(f) {
    let lk1 = localStorage.getItem('LK1');
    let lk2 = localStorage.getItem('LK2');
    let arr = Object.entries(c.GKs).map(([key, value]) => {
      key = key.split(' ')[0];
      if (key !== lk1 && key !== lk2) {
        return value.s;
      } else return null;
    });
    !f && setOptions(arr);
    return arr;
  };

  return (
    <>
      <div className="top">
        <div>
          <h1>LK1</h1>
          <SP update={update} d="Mathematik" lkType="LK1" />
        </div>
        <div>
          <h1>LK2</h1>
          <SP update={update} d="Biologie" lkType="LK2" />
        </div>
      </div>
      <div className="bottom">
        <OP o={options} />
        <div className="continue">
          <button onClick={next}>Weiter &gt;</button>
        </div>
      </div>
    </>
  )
}