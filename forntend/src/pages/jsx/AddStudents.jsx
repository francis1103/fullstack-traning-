import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import "../../pages/css/AddStudent.css";
function AddStudent(){
    const [details,setDetails]=useState({
        name:"",
        address:"",
        regNo:""

    });
    const onAddStudents = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        });
    };
    const addstudent = ()  =>{
        console.log(details);
    };
        

    return (
    <div className="page">

        <Sidebar />

        <div className="student-form">

            <h2>Add Students</h2>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={details.name}
                onChange={onAddStudents}
            />

            <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={details.address}
                onChange={onAddStudents}
            />

            <input
                type="text"
                name="regNo"
                placeholder="Enter Register Number"
                value={details.regNo}
                onChange={onAddStudents}
            />

            <button onClick={addstudent}>
                Add Student
            </button>

        </div>

    </div>
);
}
export default AddStudent;