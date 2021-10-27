import './lk.css'
import SP from './selectPanel.jsx'

function LK({ lkType='LK1' }) {
  return (
    <div>
      <h1>{lkType}</h1>
      <SP lkType={lkType}/>
    </div>
  )
}

export default LK;