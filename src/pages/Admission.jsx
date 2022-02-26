import AdmissionForm from "../components/admission/AdmissionForm"
import Datetime from "../components/Datetime"

const Admission = () => {
  return (
    <div className="h-full px-10">
        <Datetime title='Admission' />
        <AdmissionForm />
    </div>
  )
}

export default Admission