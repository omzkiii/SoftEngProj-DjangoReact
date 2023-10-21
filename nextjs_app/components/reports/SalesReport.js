import ReportCard from "./ReportCard"

const SalesReport = () => {
  return (
    <div className="bg-green-600 w-96">
        <ReportCard title="Total Sales" amount="300000"/>
        <ReportCard title="Total Discounts" amount="50000"/>
        <ReportCard title="Net Sales" amount="250000"/>
    </div>
  )
}

export default SalesReport