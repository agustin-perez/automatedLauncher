import { HashRouter, Route } from 'react-router-dom';
import MainWindow from './MainWindow/MainWindow';
import Settings from './Settings/Settings';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="router">
            <Route exact path='/' exact component={MainWindow}/>
            <Route path='/Settings' component={Settings}/>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
