import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="App">
      <div className="App-header">
        About Page Here!
        <Link to="/">[Go back home]</Link>
      </div>
    </div>
  );
}

export default About;
