
import './App.css';
import MainLayout from './components/MainLayout';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Enquriy from './pages/Enquriy';
import Blog from './pages/Blog';
import BlogList from './pages/BlogList';
import Career from './pages/Career';
import CareerList from './pages/CareerList';
import Service from './pages/Service';
import ServiceList from './pages/ServiceList';
import CourseList from './pages/CourseList';
import Course from './pages/Course';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/admin" element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='enquiry' element={<Enquriy/>}/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='blog-list' element={<BlogList/>}/>
            <Route path='career' element={<Career/>}/>
            <Route path='career-list' element={<CareerList/>}/>
            <Route path='service' element={<Service/>}/>
            <Route path='service-list' element={<ServiceList/>}/>
            <Route path='course-list' element={<CourseList/>}/>
            <Route path='course' element={<Course/>}/>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
