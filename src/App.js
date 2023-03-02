import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home'
import Header from './Components/Headers/Headers'
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Edit from './Pages/Edit/Edit';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <>
    <Header/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/userprofile/:id' element={<Profile/>}/>


      </Routes>
    </>
  );
}

export default App;
