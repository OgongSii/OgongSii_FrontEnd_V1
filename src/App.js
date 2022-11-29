import './App.css';
import {Route,Routes} from 'react-router-dom';
import Timer from './pages/Timer';
import Login from './pages/Login';
import Ranking from './pages/Ranking';
import Error from './pages/Error';
import Home from './Home';
import SignUp from './pages/SignUp';
import Main from './Main';
function App() {
  return (
    <div>
      <style>{"body {overflow-x: hidden}"}</style>
        <Home />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/timer' element={<Timer />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/rank' element={<Ranking />}/>
          <Route path='*' element={<Error/>}/>
        </Routes> 
    </div>
  )
}

export default App;
