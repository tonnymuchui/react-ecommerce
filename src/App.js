import './App.css';
import HomePage from './pages/homepage-component/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
