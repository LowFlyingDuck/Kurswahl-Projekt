import './App.css'
import LKSelect from './pages/LKSelect';

function App() {
  return (
    <div className="app">
      <LKSelect next={() => alert('END OF DEMO')}/>
    </div>
  );
}

export default App;