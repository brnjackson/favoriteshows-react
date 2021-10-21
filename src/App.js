import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ShowInfo from './components/ShowInfo';
import StreamingSvcIcon from './components/StreamingSvcOptions';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/shows/:network/:id" component={ShowInfo} />
            <Route path ="/" component={StreamingSvcIcon} />
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
