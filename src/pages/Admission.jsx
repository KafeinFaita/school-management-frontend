import { useState } from 'react';
import AdmissionForm from "../components/admission/AdmissionForm"
import RequirementModal from "../components/admission/RequirementModal"
import Datetime from "../components/Datetime"

const Admission = () => {

  const [viewReq,setViewReq] = useState(false);
  
  return (
    <div className="h-full px-10 relative">
        { !viewReq ? 
          <>
            <Datetime title='Admission' />
            <button onClick={() => setViewReq(true)} className="p-2 rounded bg-blue-500 mt-5 text-gray-100">View Requirements</button>
            <AdmissionForm />
          </>
        :
        <RequirementModal setViewReq={setViewReq} /> }
    </div>
  )
}

export default Admission