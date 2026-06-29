import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Login from './pages/jsx/Login.jsx'
import DeleteStudents from './pages/jsx/DeleteStudents.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import AddStudent from './pages/jsx/AddStudents.jsx'
import StudentTable from './pages/jsx/StudentTable.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/deletestudents" element={<DeleteStudents />} />
      <Route path="/addstudents" element={<AddStudent />} />
      <Route path="/studentstable" element={<StudentTable />} />


    </Routes>
    
    </BrowserRouter>
  </StrictMode>
)
