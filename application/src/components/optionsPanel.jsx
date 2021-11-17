import './optionsPanel.css'

function OP({ o }) {
  return (
    <div className="options-panel">
      <h3>Verbleibende Grundkurs-Optionen</h3>
      <div>
        {o.map(e => e&&(
          <p className="option">{e}</p>
        ))}
      </div>
    </div>
  )
}

export default OP