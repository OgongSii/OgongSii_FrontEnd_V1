import './App.css';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import Timer from './Timer';
import Login from './Login';
import Join from './Join';
import Ranking from './Ranking';
import Error from './Error';
import Home from './Home';
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
