import './App.css';
import Home from "./onepirate/Home"
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
    <Home />
    </ErrorBoundary>
  );
}

export default App;
