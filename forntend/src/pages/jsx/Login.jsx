import { useState } from "react";
//import Sidebar from "../../components/Sidebar";
import DeleteStudents from "./DeleteStudents";
import AddStudent from "./AddStudents";
import "../../pages/css/Login.css";
import StudentTable from "./StudentTable";
function Login() {
  const [formdata, setformdata] = useState({
    Email: "",
    Password: "",
    no: "80722222",
    add: "",
    roll_no: "",
  });
  const onChange1 = (e) => {
    setformdata({ 
        ...formdata,
        [e.target.name]: e.target.value });
  };
  const handelSubmit=(e)=>{
    e.preventDefault();
    console.log(formdata);
  }
  const details={
            id:0,
            name:"francis",
            age:20,
            address:"tamilnadu"
        }
    console.log(details);
  console.log(formdata);
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
        <input type="text" placeholder="Enter your address" name="add" onChange={onChange1} />
        <button type="submit" >Login</button> 
          

        
      </form>
    </div>
    
  );
}

export default Login;