import { useState } from "react";
//import Sidebar from "../../components/Sidebar";
import DeleteStudents from "./DeleteStudents";
import AddStudent from "./AddStudents";
import "../../pages/css/Login.css";
import StudentTable from "./StudentTable";
import {useNavigate} from "react-router-dom";
function Login() {
  const [formdata, setformdata] = useState({
    Email: "",
    Password: ""
  });
  const onChange1 = (e) => {
    setformdata({ 
        ...formdata,
        [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(formdata);
    
    if(formdata.Email=="francis@gmail.com" && formdata.Password=="123")
    navigate("/studentstable");
    
    
  };
  
  return (
    <div className="login">
      
        
      <h1>Login</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="Email"
          onChange={onChange1}
          
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="Password"
          onChange={onChange1}
        />
        
        <button type="submit"  >Login</button> 
          

        
      </form>
    </div>
    
  );
}

export default Login;