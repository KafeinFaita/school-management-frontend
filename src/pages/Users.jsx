import Datetime from "../components/Datetime"
import { useContext,useState } from 'react';
import { GlobalContext } from "../helper/Context";
import { baseUrl } from "../helper/function";
import axios from "axios";

const Users = () => {

    const { usersList } = useContext(GlobalContext);
    const [approve,setApprove] = useState(false);
  
    const verifyUser = async (id,verify) => {
      const checkUser = !verify;
      try {
        const data = await axios.patch(`${baseUrl}user`,{ id, checkUser });
        console.log(data);
      }
      catch(err) {
        console.log(err);
      }
    } 

    const validateUserApproval = (id) => {
      console.log(id);
    }

  return (
    <div className="h-full px-10">
      <Datetime title='Users' />
      <div className="py-10">
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Role</th>
              <th>Username</th>
              <th>Verified</th>
            </tr>
           
            { usersList && usersList.map((user) => (
              <tr key={user._id}>
                <td>{ user.role }</td>
                <td>{ user.username }</td>
                <td className="flex gap-2 items-center h-14">
                  <input checked={user.isVerified} onChange={(e) => setApprove(e.target.checked)} type="checkbox" />
                  { approve && <button className="bg-green-500 text-gray-100 p-2 rounded" onClick={() => verifyUser(user._id)}>Verify User</button> }
                </td>
              </tr>
              
            )) }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users