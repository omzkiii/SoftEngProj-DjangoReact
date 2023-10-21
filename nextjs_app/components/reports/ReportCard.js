
const ReportCard = ({title, amount}) => {
  return (
    <div className="bg-green-300 text-green-950 m-4 p-4">
        <h2 className="text-left">{title}</h2>
        <h3 className="text-center">{amount}</h3>
    </div>
  )
}

export default ReportCard