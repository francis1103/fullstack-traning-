import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../pages/css/DeleteStudents.css";
function DeleteStudents(){
    const [name,setName]=useState("");
    return (

        
        <div className="delete-student"> 
            <Sidebar />
            <h1>delete students</h1>
            <input type ="text" placeholder="Enter your name " value={name} onChange={(e)=>setName(e.target.value)} />
            <button >delete</button>

        </div>
    );
}
export default DeleteStudents;