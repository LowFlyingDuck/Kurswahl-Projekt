import './selectPanel.css'
import c from '../config.json'
import Entry from './selectEntry.jsx'
import { useState } from 'react';

function SP({d, lkType, update }) {
  const config = c;

  const [selected, select] = useState(localStorage.getItem(lkType) || d);

  function set(n) {
    localStorage.setItem(lkType, n);
    update();
    select(n);
  }

  if (config[lkType] instanceof Array)
    return (
      <div className='selectPanel'>
        <div style={config.gridCSS[lkType]} className="selectPanel__collection">
          {config[lkType].map(e => (
            <Entry onclick={set} key={e.n} s={e.n === selected} {...e} />
          ))}
        </div>
      </div>
    )
  else throw new Error('Config is missing information about ' + lkType + '!');
}

export default SP;