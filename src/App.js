import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopBar from './components/TopBar';
import Background from './components/Background';
import StoreListing from './components/StoreListing';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  )
}

export default App;
