import './optionsPanel.css'

function OP({ o }) {
  return (
    <div className="options-panel">
      <h3>Verbleibende Grundkurs-Optionen</h3>
      {o.map(e => (
        <p className="option">{e.s}</p>
      ))}
    </div>
  )
}

export default OP