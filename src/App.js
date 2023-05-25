import logo from './logo.svg';
import './App.css';
import GoogleSignIn from './components/GoogleSignIn';
import Gmail from './components/Gmail';
import Discord from './components/Discord';
function App() {
  return (
    <div className="App">
      <GoogleSignIn />
      <Gmail />
      <Discord />
    </div>
  );
}

export default App;
