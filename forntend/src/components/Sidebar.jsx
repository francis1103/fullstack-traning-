import { useNavigate } from "react-router-dom";
import "../pages/css/Sidebar.css";

function Sidebar() {
    const navigate=useNavigate();
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
                
                <p onClick={()=>navigate("/addstudents")}>Add Student</p>

                <p onClick={()=>navigate("/deletestudents")}>Delete Student</p>

                <p onClick={()=>navigate("/studentstable")}>Student Table</p>
            </div>
        
    );
}

export default Sidebar;