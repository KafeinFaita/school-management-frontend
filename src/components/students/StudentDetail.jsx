import { useState } from 'react';

const StudentDetail = () => {

    const [lastName,setLastName] = useState('')
    const [firstName,setFirstName] = useState('');
    const [middleName,setMiddleName] = useState('');
    const [gender,setGender] = useState('');
    const [dateOfBirth,setDateOfBirth] = useState('');
    const [placeOfBirth,setPlaceOfBirth] = useState('');
    const [address,setAddress] = useState('');
    const [nationality,setNationality] = useState('');
    const [religion,setReligion] = useState('');
    const [mobileNumber,setMobileNumber] = useState('');
    const [email,setEmail] = useState('');
    const [studentStatus,setStudentStatus] = useState('');
    const [gradeLevel,setGradeLevel] = useState('');
    const [lrn,setLrn] = useState('');
    const [department,setDepartment] = useState('');
    const [strand,setStrand] = useState('');
    const [session,setSession] = useState('');
    const [lastAttended,setLastAttended] = useState('');

  return (
    <div className="py-10 flex flex-col gap-5">
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name:</label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name:</label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="middleName">Middle Name:</label>
                <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full border-blue-500 border p-2 rounded">
                <label htmlFor="gender">Gender</label>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center flex-row-reverse">
                        <label htmlFor="male">Male</label>
                        <input value="male" onChange={(e) => setGender(e.target.value)} type="radio" name="gender" />
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        <label htmlFor="female">Female</label>
                        <input value="female" onChange={(e) => setGender(e.target.value)} type="radio" name="gender" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="dob">Date of Birth:</label>
                <input value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="date" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="pob">Place of Birth:</label>
                <input value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>  
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="address">Address:</label>
                <input value={address} onChange={(e) => setAddress(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-1/2">
                <label htmlFor="nationality">Nationality:</label>
                <select value={nationality} onChange={(e) => setNationality(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select nationality</option>
                    <option value="filipino">Filipino</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="religion">Religion:</label>
                <select value={religion} onChange={(e) => setReligion(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select religion</option>
                    <option value="catholic">Catholic</option>
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="email">E-mail:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="email" required />
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="studentStatus">Student Status:</label>
                <select value={studentStatus} onChange={(e) => setStudentStatus(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select status</option>
                    <option value="returning">Returning</option>
                </select>
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="gradeLevel">Grade Level:</label>
                <select value={gradeLevel} onChange={(e) => setGradeLevel(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select level</option>
                    <option value="grade 1">Grade 1</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="lrn">LRN:</label>
                <input value={lrn} onChange={(e) => setLrn(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="department">Department:</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select Department</option>
                    <option value="elementary">Elementary</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="strand">Academic Strand(SHS):</label>
                <select value={strand} onChange={(e) => setStrand(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select strand</option>
                    <option value="stem">STEM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="session">Session(Pre-school):</label>
                <select value={session} onChange={(e) => setSession(e.target.value)} className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select session</option>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-4/5">
                <label htmlFor="schoolLastAttended">School last attended:</label>
                <input value={lastAttended} onChange={(e) => setLastAttended(e.target.value)} className="p-2 rounded outline-none border border-gray-300" type="text" required />
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