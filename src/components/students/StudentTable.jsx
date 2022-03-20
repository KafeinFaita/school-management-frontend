import { Link } from "react-router-dom";

const StudentTable = ({ students }) => {
    console.log(students);
  return (
    <>
        <table className="w-full mt-4">
            <tbody>
                <tr className="text-center bg-gray-200 text-gray-800">
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Middle Name</th>
                    <th>Address</th>
                    <th>Details</th>
                </tr>
                { students && students.map((student,key) => (
                    <tr className="h-10 odd:bg-gray-100 odd:text-gray-800" key={key}>
                        <td>{ student.firstname }</td>
                        <td>{ student.lastname }</td>
                        <td>{ student.middleName }</td>
                        <td>{ student.address }</td>
                        <td onClick={() => console.log('view id')} className="text-center"><button>View Details</button></td>
                    </tr>
                )) }
            </tbody>
        </table>
        <Link className="p-2 rounded bg-green-500 text-gray-100 absolute right-10" to='/admission'>Add Student</Link>
    </>
  )
}

export default StudentTable