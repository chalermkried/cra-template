import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Fallback from './pages/Fallback';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/:path" component={Fallback} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
