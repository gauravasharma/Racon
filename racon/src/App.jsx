import './App.css';
import {BrowserRouter,Routes, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Schedule from './pages/Services'
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (


    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route index element = {<Home/>} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/Schedule" element = {<Schedule/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
