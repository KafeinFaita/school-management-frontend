import Datetime from "../components/Datetime"
import StudentTable from "../components/students/StudentTable";

import { useState,useEffect } from 'react';
import { fetchData } from "../helper/function";
import { baseUrl } from "../helper/function";

const Students = () => {

  const [search,setSearch] = useState('');
  const [students,setStudents] = useState([]);
  
  useEffect(() => {
    const abortCont = new AbortController();
    fetchData({signal:abortCont.signal},`${baseUrl()}students`,)
    return () => abortCont.abort();
  },[students])

  const [currentPage,setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);

  const lastIndex = currentPage * studentsPerPage;
  const startIndex = lastIndex - studentsPerPage;
  const currentStudents = students.slice(startIndex,lastIndex);

  const pageLength = Math.ceil(students.length / studentsPerPage);

  const pageNumbers = [];

  for(let i = 1; i <= pageLength; i++) {
      pageNumbers.push(i);
  }

  // Change the page
  const paginate = page => setCurrentPage(page);

  const searchStudent = () => {
    console.log(search)
  }

  return (
    <div className="h-full px-10 relative">
        <Datetime title='Students' />
        <div className="mt-5 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 rounded outline-none border-gray-300 border" type="search" placeholder="Search student" />
                <button onClick={searchStudent} className="bg-blue-500 text-gray-100 p-2 rounded">Search</button>
            </div>
            <div className="flex items-center gap-10">
                <div className="flex gap-2 items-center">
                    <span>Sort by:</span>
                    <select className="p-2 rounded outline-none border-gray-300 border cursor-pointer">
                        <option value="surname">Surname</option>
                        <option value="level">Level</option>
                        <option value="firstname">First Name</option>
                    </select>
                </div>
                <div className="flex items-center gap-2 text-base">
                    { pageNumbers.map((page,key) => (
                        <button className="text-blue-500 font-bold border-2 border-gray-300 px-2 rounded" onClick={() => paginate(page)} key={key}>{ page }</button>
                    )) }
                </div>
            </div>
        </div>
        <StudentTable students={currentStudents} />
        
    </div>
  )
}

export default Students