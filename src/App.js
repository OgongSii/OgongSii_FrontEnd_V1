import './App.css';
import {Route,Routes,BrowserRouter,Link} from 'react-router-dom';
import Timer from './Timer';
import Login from './Login';
import Join from './Join';
function App() {
  const screenSize = {
    desktop: {
      minWidth: 1025,
      maxWidth: 2500,
    },
  };
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/timer' element={<Timer />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/join' element={<Join />}/>
          </Routes> 
        </BrowserRouter>
    </div>
  )
}

export default App;
