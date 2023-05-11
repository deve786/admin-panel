
import './App.css';
import MainLayout from './components/MainLayout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Enquriy from './pages/Enquriy';
import Blog from './pages/Blog';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/admin" element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='enquiry' element={<Enquriy/>}/>
            <Route path='blog' element={<Blog/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
