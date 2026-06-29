import Sidebar from "../../components/Sidebar";
import studentsinfos from "../../data/Studentsinfo";
import "../css/StudentTable.css";

function StudentTable() {
    return (
        <div className="page">

            <Sidebar />

            <div className="tablecss">

                <table>

                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Reg No</th>
                            <th>Student Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {studentsinfos.map((studentinfo) => (
                            <tr key={studentinfo.id}>
                                <td>{studentinfo.name}</td>
                                <td>{studentinfo.regno}</td>
                                <td>{studentinfo.age}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default StudentTable;