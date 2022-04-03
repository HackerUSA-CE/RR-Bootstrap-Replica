import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <StoreListing />
    </div>
  )
}

export default App;
