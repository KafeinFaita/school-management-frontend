
const Datetime = ({ title }) => {

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date = new Date(); 
    const today = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

  return (
    <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-gray-800 tracking-wide">{ title }</h1>
        <h2 className="text-gray-800">{ today }</h2>
    </div>
  )
}

export default Datetime