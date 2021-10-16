import './lk.css'
import SP from './selectPanel.jsx'

function LK({ header='LK' }) {
  return (
    <div>
      <h1>{header}</h1>
      <SP />
    </div>
  )
}

export default LK;