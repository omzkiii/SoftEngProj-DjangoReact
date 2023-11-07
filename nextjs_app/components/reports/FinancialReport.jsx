const FinancialReport = () => {
    //TODO: fetch data based on month and year props
    const analytics = {
        sales: 300000,
        discount: 50000,
        cogs: 100000,
    }

    return (
        <div className="bg-green-600">
                <div className="w-96 p-4 flex justify-center">
                    <table className="w-full">
                        <tbody>
                            <tr>
                                <td>Sales</td>
                                <td>{analytics.sales}</td>
                            </tr>

                            <tr>
                                <td>Discounts <hr/></td>
                                <td>{analytics.discount} <hr/></td>
                            </tr>

                            <tr>
                                <td>Net Sales</td>
                                <td>{analytics.sales - analytics.discount}</td>
                            </tr>

                            <tr>
                                <td>Cost of Goods Sold <hr/></td>
                                <td>{analytics.cogs} <hr/></td>
                            </tr>
                            <tr>
                                <td>Gross profit</td>
                                <td>{analytics.sales - analytics.discount - analytics.cogs}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
    )
}

export default FinancialReport