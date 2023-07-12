import './App.css';
import Registration from './components/reg';
import Login from './components/login';
import Search from './components/search';
import About from './components/about';
import Contact from './components/contactus';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Search/>}/>
      <Route path="/reg" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/contactus" element={<Contact/>} />
    </Routes>

  );
}

export default App;
