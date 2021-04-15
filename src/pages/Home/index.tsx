import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="hello" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link to="/about" className="App-link">
          [Go to About]
        </Link>
      </div>
    </div>
  );
}

export default Home;
