import './selectPanel.css'
import c from '../config.json'
import Entry from './selectEntry.jsx'
import { useState } from 'react';

function SP({ lkType }) {
  const config = {...c};
  if (config[lkType] instanceof Array)
    return (
      <div className='selectPanel'>
        <div style={config.gridCSS[lkType]} className="selectPanel__collection">
          {config[lkType].map(e => (
              <Entry key={e.n} s={false} {...e}/>
            ))}
        </div>
        <div className="selector"></div>
      </div>
    )
  else throw new Error('confi[arg0] is not an Array!');
}

export default SP;