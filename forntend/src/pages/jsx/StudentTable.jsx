import studentsinfos from "../../data/Studentsinfo";

function StudentTable(){


    return (
        <div> 
            <table>
                <thead>
                    <th>student name</th>
                    <th>Student regno</th>
                    <th>stdent age</th>
                </thead>
                <tbody>
                    {studentsinfos.map((studentinfo)=>(
                        <tr key={studentinfo.id}>
                            <td>{studentinfo.name}</td>
                            <td>{studentinfo.regno}</td>
                            <td>{studentinfo.age}</td>
                        </tr>
                    ))

                    }
                    <tr >
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default StudentTable;