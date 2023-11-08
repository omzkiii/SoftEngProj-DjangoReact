import ReportCard from "./ReportCard"

const OrderReport = () => {
  return (
    <div className="bg-green-600 w-96">
        <ReportCard title="Total qty. of items ordered" amount="1000"/>
        <ReportCard title="Total orders" amount="10"/>
        <ReportCard title="Average qty. per order" amount="10"/>
    </div>
  )
}

export default OrderReport