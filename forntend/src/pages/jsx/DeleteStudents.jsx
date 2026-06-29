import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../pages/css/DeleteStudents.css";
function DeleteStudents(){
    const [name,setName]=useState("");
    return (
    <div className="page">

        <Sidebar />

        <div className="delete-student">

            <h1>Delete Students</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button>Delete</button>

        </div>

    </div>
);
}
export default DeleteStudents;