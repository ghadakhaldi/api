import './App.css';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
    <Navbarr/>
    <UserList/>
    </div>
  );
}

export default App;