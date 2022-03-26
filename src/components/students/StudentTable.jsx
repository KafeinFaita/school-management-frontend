import { Link } from "react-router-dom";
import { baseUrl } from '../../helper/function';

const StudentTable = ({ students }) => {

  const viewStudentDetail = (id) => {
    console.log(baseUrl()+'students/'+id);
  }
    
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
                        <Link to={`/students/${student._id}`} className="text-center">View Details</Link>
                    </tr>
                )) }
            </tbody>
        </table>
        <Link className="p-2 rounded bg-green-500 text-gray-100 absolute right-10" to='/admission'>Add Student</Link>
    </>
  )
}

export default StudentTable