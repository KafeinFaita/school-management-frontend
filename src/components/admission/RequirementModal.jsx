import RequirementTable from "./RequirementTable"

const RequirementModal = ({ setViewReq }) => {
  return (
    <div className="h-auto w-full bg-gray-900 bg-opacity-75 px-10 py-5 left-0 rounded absolute top-0">
        <div className="flex justify-between items-center">
            <h1 className="text-gray-100 text-3xl font-semibold">Student Admission Requirements</h1>
            <button onClick={() => setViewReq(false)} className="text-gray-100 bg-red-500 p-2 rounded">Close</button>
        </div>

        <RequirementTable />

    </div>
  )
}

export default RequirementModal