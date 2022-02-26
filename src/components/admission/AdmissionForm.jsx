
const AdmissionForm = () => {
  return (
    <div className="py-10 flex flex-col gap-5">
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="lastName">Last Name:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="firstName">First Name:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="middleName">Middle Name:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full border-blue-500 border p-2 rounded">
                <label htmlFor="gender">Gender</label>
                <div className="flex items-center gap-5 mt-5">
                    <div className="flex items-center flex-row-reverse">
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" />
                    </div>
                    <div className="flex flex-row-reverse items-center">
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="dob">Date of Birth:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="date" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="pob">Place of Birth:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>  
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="address">Address:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
            <div className="flex flex-col w-1/2">
                <label htmlFor="nationality">Nationality:</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select nationality</option>
                    <option value="filipino">Filipino</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="flex flex-col w-full">
                <label htmlFor="religion">Religion:</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select religion</option>
                    <option value="catholic">Catholic</option>
                </select>
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-full">
                <label htmlFor="email">E-mail:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="email" required />
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="studentStatus">Student Status:</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select status</option>
                    <option value="returning">Returning</option>
                </select>
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="gradeLevel">Grade Level:</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select level</option>
                    <option value="grade 1">Grade 1</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="lrn">LRN:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="number" required />
            </div>
            <div className="flex flex-col w-1/3">
                <label htmlFor="department">Department:</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select Department</option>
                    <option value="elementary">Elementary</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="strand">Academic Strand(SHS):</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select strand</option>
                    <option value="stem">STEM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-1/3">
                <label htmlFor="session">Session(Pre-school):</label>
                <select className="p-2 rounded outline-none border border-gray-300">
                    <option value="" hidden>Select session</option>
                    <option value="am">AM</option>
                    <option value="pm">PM</option>
                </select>
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <div className="flex flex-col w-4/5">
                <label htmlFor="schoolLastAttended">School last attended:</label>
                <input className="p-2 rounded outline-none border border-gray-300" type="text" required />
            </div>
        </div>
        <div className="flex items-center gap-5 justify-end">
            <input className="bg-green-500 text-gray-100 rounded p-3 w-1/4 cursor-pointer" type="submit" value="Add" />
            <input className="bg-yellow-500 text-gray-100 rounded p-3 w-1/4 cursor-pointer" type="submit" value="Edit" />
        </div>
    </div>
  )
}

export default AdmissionForm