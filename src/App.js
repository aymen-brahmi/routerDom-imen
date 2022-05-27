import './App.css';
import NavBar from './Components/NavBar';
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import UsersList from './Components/UsersList';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/users" element={<UsersList/>} />
      <Route path="/profile/: idUser" element={<Profile/> }  />
      </Routes>
    </div>
  );
}

export default App;
