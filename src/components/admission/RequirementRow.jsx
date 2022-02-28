
const RequirementRow = ({ requirement,isRequired, checkbox,date,comment }) => {
  return (
    <tr className="even:bg-gray-200 even:text-gray-800">
        <td>{ requirement }</td>
        <td>{ isRequired }</td>
        <td><input type="checkbox" name="" id="" /></td>
        <td>{ date }</td>
        <td>{ comment }</td>
    </tr>
  )
}

export default RequirementRow