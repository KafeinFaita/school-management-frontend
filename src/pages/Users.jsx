import Datetime from "../components/Datetime"
import { useContext,useState } from 'react';
import { GlobalContext } from "../helper/Context";
import { AiOutlineCheckCircle,AiOutlineCloseSquare } from 'react-icons/ai';
import UserModal from "../components/users/UserModal";

const Users = () => {

    const { usersList } = useContext(GlobalContext);
    const [approve,setApprove] = useState(false);
    // For the user modal
    const [userDetail,setUserDetail] = useState({});

    const validateUserApproval = (id) => {
      setApprove(!approve);
      const selectUser = usersList.filter(user => id === user._id);
      setUserDetail(selectUser[0]);
    }

  return (
    <div className="h-full px-10 relative">
      <Datetime title='Users' />
      <div className="py-10">
        <table className="w-full text-left">
          <tbody>
            <tr>
              <th>Role</th>
              <th>Username</th>
              <th>Is Verified</th>
            </tr>
           
            { usersList && usersList.map((user) => (
              <tr key={user._id}>
                <td>{ user.role }</td>
                <td>{ user.username }</td>
                <td className="flex gap-2 items-center h-12">
                  { user.isVerified ? <AiOutlineCheckCircle onClick={() => validateUserApproval(user._id)} className="text-green-500 cursor-pointer text-xl"/> : 
                  <AiOutlineCloseSquare onClick={() => validateUserApproval(user._id)} className="text-red-500 cursor-pointer text-xl" /> }
                </td>
              </tr>
            )) }
           
          </tbody>
        </table>
      </div>
      { approve && <UserModal setApprove={setApprove} userDetail={userDetail} /> }
    </div>
  )
}

export default Users