
import './App.css';
import MainLayout from './components/MainLayout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/admin" element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
