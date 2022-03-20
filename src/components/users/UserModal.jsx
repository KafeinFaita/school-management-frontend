import { baseUrl } from "../../helper/function";
import axios from "axios";

const UserModal = ({setApprove,userDetail}) => {  

    const verifyUser = async (id,verify) => {
        const checkUser = !verify;
        try {
            const data = await axios.patch(`${baseUrl()}user`,{ id, checkUser });
            console.log(data);
          }
          catch(err) {
            console.log(err);
          }
      } 

  return (
    <div className="absolute top-0 h-4/5 w-full left-0 flex items-center justify-center">
        <div className="bg-gray-100 p-20 shadow-lg rounded-md z-50">
            <p className="font-semibold text-xl">Do you want to verify { userDetail.username }?</p>
            <div className="flex justify-center gap-2 p-2">
                <button onClick={() => verifyUser(userDetail._id,userDetail.isVerified)} className="bg-green-500 text-gray-100 p-2 rounded">Verify</button>
                <button className="bg-red-500 text-gray-100 p-2 rounded" onClick={() => setApprove(false)}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default UserModal