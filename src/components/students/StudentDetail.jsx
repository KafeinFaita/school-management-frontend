import { useState,useEffect,useContext } from 'react';
import { GlobalContext } from '../../helper/Context';
import Datetime from '../Datetime';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const StudentDetail = () => {

    const { id } = useParams();
    const [student,setStudent] = useState([]);
    const { isLoading,setIsLoading } = useContext(GlobalContext);
    
    useEffect(() => {
        const abortCont = new AbortController();

        axios.get(`/students/${id}`,{ signal: abortCont.signal })
        .then((data) => {
            setStudent(data.data);
            setIsLoading(false);
        })

        return () => abortCont.abort();
    },[id]);



  return (
    <div className="py-10 px-10 flex flex-col gap-5">
        <Datetime title="Student Detail" />
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name:</label>
                <input value={student.lastname} onChange={(e) => console.log(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name:</label>
                <input value={student.firstname} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="middleName">Middle Name:</label>
                <input value={student.middlename} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full border-blue-500 border p-2 rounded">
                <label htmlFor="gender">Gender</label>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center flex-row-reverse">
                        <label htmlFor="male">Male</label>
                        <input value={student.gender} type="radio" name="gender" />
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        <label htmlFor="female">Female</label>
                        <input value={student.gender} type="radio" name="gender" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="dob">Date of Birth:</label>
                <input value={student.dob} className="p-2 rounded outline-none border border-gray-300" type="date" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="pob">Place of Birth:</label>
                <input value={student.pob} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>  
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="address">Address:</label>
                <input value={student.address} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-1/2">
                <label htmlFor="nationality">Nationality:</label>
                <select value={student.nationality} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select nationality</option>
                    <option value="filipino">Filipino</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="religion">Religion:</label>
                <select value={student.religion} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select religion</option>
                    <option value="catholic">Catholic</option>
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input value={student.mobile} className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="email">E-mail:</label>
                <input value={student.email} className="p-2 rounded outline-none border border-gray-300" type="email" required />
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="studentStatus">Student Status:</label>
                <select value={student.status} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select status</option>
                    <option value="returning">Returning</option>
                </select>
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="gradeLevel">Grade Level:</label>
                <select value={student.grade} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select level</option>
                    <option value="grade 1">Grade 1</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="lrn">LRN:</label>
                <input value={student.lrn} className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="department">Department:</label>
                <select value={student.department} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select Department</option>
                    <option value="elementary">Elementary</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="strand">Academic Strand(SHS):</label>
                <select value={student.strand} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select strand</option>
                    <option value="stem">STEM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="session">Session(Pre-school):</label>
                <select value={student.session} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select session</option>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-4/5">
                <label htmlFor="schoolLastAttended">School last attended:</label>
                <input value={student.lastschool} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <input className="bg-green-500 text-gray-100 rounded p-3 w-1/4 cursor-pointer" type="submit" value="Add" />
            <input className="bg-yellow-500 text-gray-100 rounded p-3 w-1/4 cursor-pointer" type="submit" value="Edit" />
        </div>
    </div>
  )
}

export default StudentDetail