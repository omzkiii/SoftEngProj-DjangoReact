//THis is about the reports, purchases, credit debit
const reportsPage = () => {

    const reportData = {

    }

    return(

    <div>

    <div className=" font-serif text-left color text-4xl text-amber-400 m-4 font-extrabold">
        <h1> SALES REPORT</h1>
    </div>

    <div className="flex space-x-8 text-2xl">
        
        <div>
            <select className="text-black">
                <option value="" hidden selected disabled>Select Time</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
            </select>
        </div>
        
        <div className="text-black"> 
            <h4> - </h4>
        </div>

        <div>
            <select className="text-black">
                <option value="" hidden selected disabled>Select Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>      
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>      
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>            
            </select>
        </div>

        <div>
            <select className="text-black">    
            <option value="" hidden selected disabled>Select Year</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
            </select>
        </div>

    </div>


    </div>
    )



}

export default reportsPage;