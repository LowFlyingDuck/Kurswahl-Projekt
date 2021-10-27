import './App.css'
import LK from './components/lk.js'



function App() {
  return (
    <div className="app">
      <div className="top">
        <LK lkType='LK1'/>
        <LK lkType='LK2'/>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
}

export default App;