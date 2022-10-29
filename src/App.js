import './App.css';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import Timer from './Timer';
import Login from './Login';
import Join from './Join';
import Ranking from './Ranking';
import Error from './Error';
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/timer' element={<Timer />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/join' element={<Join />}/>
            <Route path='/rank' element={<Ranking />}/>
            <Route path='*' element={<Error/>}/>
          </Routes> 
        </BrowserRouter>
    </div>
  )
}

export default App;
