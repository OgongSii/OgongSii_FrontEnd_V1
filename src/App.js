import './App.css';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import Timer from './pages/Timer';
import Login from './pages/Login';
import Join from './pages/Join';
import Ranking from './pages/Ranking';
import Error from './pages/Error';
import Home from './Home';
import Users from './pages/Users';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/timer' element={<Timer />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/join' element={<Join />}/>
        <Route path='/rank' element={<Ranking />}/>
        <Route path='*' element={<Error/>}/>
      </Routes> 
    </div>
  )
}

export default App;
