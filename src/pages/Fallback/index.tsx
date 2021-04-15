import { Link, RouteComponentProps } from 'react-router-dom';

function Fallback({ location }: RouteComponentProps) {
  return (
    <div className="App">
      <div className="App-header">
        404 Not found - {`${location.pathname}${location.search}`}
        <Link to="/">[Go back home]</Link>
      </div>
    </div>
  );
}

export default Fallback;
