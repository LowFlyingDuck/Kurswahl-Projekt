import './App.css'
import SP from './components/selectPanel.jsx'

function App() {
  return (
    <div className="app">
      <div className="top">
        <div>
          <h1>LK1</h1>
          <SP d="Mathematik" lkType="LK1" />
        </div>
        <div>
          <h1>LK2</h1>
          <SP d="Biologie" lkType="LK2" />
        </div>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
}

export default App;