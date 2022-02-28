import RequirementRow from "./RequirementRow"

const RequirementTable = () => {
  return (
    <>
        <table className="w-full mt-10 text-gray-200">
            <tbody>
                <tr className="text-left">
                    <th>Requirements</th>
                    <th>Strongly Required</th>
                    <th>Accomplished</th>
                    <th>Date</th>
                    <th>Comment</th>
                </tr>
                <RequirementRow 
                    requirement="Reservation Fee"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Interview"
                    date="12 Feb 2022"
                    isRequired="true"
                />
                <RequirementRow 
                    requirement="Registrar Confirmation"
                    date="12 Feb 2022"
                    isRequired="true"
                />
                <RequirementRow 
                    requirement="Exam"
                    date="12 Feb 2022"
                    isRequired="true"
                />
                <RequirementRow 
                    requirement="Official Receipt Number"
                    isRequired="false"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Report card"
                    isRequired="true"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Picture"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Visa9e"
                    date="12 Feb 2022"
                    isRequired="true"
                />
                <RequirementRow 
                    requirement="ESCQVR"
                    isRequired="true"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Additional Picture"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="Recommendation Form"
                    date="12 Feb 2022"
                    isRequired="true"
                />
                <RequirementRow 
                    requirement="Good Conduct Certificate"
                    isRequired="true"
                    date="12 Feb 2022"
                />
                <RequirementRow 
                    requirement="PSA Birth Certificate"
                    isRequired="true"
                    date="12 Feb 2022"
                />
            </tbody>
        </table>
        <div className="flex gap-2 items-center justify-end mt-5">
            <button className="p-2 bg-green-500 text-gray-100 rounded w-32">Create</button>
            <button className="p-2 bg-yellow-500 text-gray-100 rounded w-32">Edit</button>
        </div>
    </>
  )
}

export default RequirementTable