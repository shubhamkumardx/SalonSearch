import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function SalesReport(props) {
    const [searchText, setSearchText] = useState("");
    const [SalesData, setSalesData] = useState([]);
    const [Salesfill, setSalesfill] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const userToken = sessionStorage.getItem('user');
    const option = {
        method: "GET",
        headers: {
            "Authorization": userToken,
        },
        body: JSON.stringify()
    }

    const SalesRepData = async () => {
        setIsLoading(true);
        const response = await fetch(`https://qb.flitsync.com/api/salesorder.php`, option);
        if (!response.ok) {
            console.log(` Error! Status: ${response.status}`);
        }
        const SalesData = await response.json();
        setSalesData(SalesData)
        setIsLoading(false);
    }

    useEffect(() => {
        SalesRepData()
    }, [])


    const SalesFilter = async () => {
        const response = await fetch(`https://qb.flitsync.com/api/salesorder.php?month=$%7Bmonth%7D&year=$%7Byear%7D&productName=$%7BselectedOption%7D&customerName=$%7BselectedOption1%7D&orderNo=$%7Boderno%7D`, option);
        if (!response.ok) {
            console.log(` Error! Status: ${response.status}`);
        }
        const Salefilter = await response.json();
        setSalesfill(Salefilter)
    }

    useEffect(() => {
        SalesFilter()
    }, [])

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchText(value);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        SalesRepData()
    }


    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Sales Report</p>
                <p className='a3 text-start  '>Home / <span className='a26' >Sales Report</span></p >
                <div className='mkl'>
                    <p className='oppo'> Filters</p>
                    <div className='d-flex mt-2'>
                        <select name="language" id="language" className='s8 text-secondary' onChange={handleSearch} >
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="" >3</option>
                            <option value="" >4</option>
                            <option value="" >5</option>
                            <option value="" >6</option>
                            <option value="" >7</option>
                            <option value="" >8</option>
                            <option value="" >9</option>
                            <option value="" >10</option>
                            <option value="" >11</option>
                            <option value="" >12</option>
                            <option value="" selected >Select Months
                            </option>
                        </select>


                        <select name="language" id="year" className='s4 text-secondary' onChange={handleSearch} >
                            <option value="" selected>2023</option>
                            <option value="" selected>Select Year</option>
                        </select>


                        <select name="language" id="language" className='s4 text-secondary' onChange={handleSearch} >
                            {
                                Salesfill.orders?.map((item) => {
                                    return <option value="">{item.TxnID}
                                    </option>
                                })
                            }
                            <option value="" selected>By Order No</option>
                        </select>


                        <select name="language" id="language" className='s4 text-secondary' onChange={handleSearch}>
                            {
                                Salesfill.orders?.map((item) => {
                                    const itemdetailss = JSON.parse(item.ItemsDetail)
                                    return <option>
                                        {
                                            itemdetailss.map((item) => {
                                                return (item.ItemRef.FullName)
                                            })
                                        }
                                    </option>
                                })
                            }
                            <option value="" selected>Select product</option>
                        </select>


                        <select name="language" id="language" className='s4 text-secondary' onChange={handleSearch}>
                            {
                                Salesfill.orders?.map((item) => {
                                    return <option value="">{item.CustomerName}
                                    </option>
                                })
                            }
                            <option value="" selected>Select Customer</option>
                        </select>


                        <button type='button'  className="btn btn  s7 text-white " onClick={submitForm}>Submit</button>
                        <button type="button" className="btn btn  s6 text-white">Clear</button>
                    </div>

                    <div className='container'>
                        <table className='mt-5 table'>
                            <thead>
                                <tr className='s11'>
                                    <th >Order No</th>
                                    <th >Customer Name</th>
                                    <th >Product Name</th>
                                    <th >Product Price</th>
                                    <th  >Qty</th>
                                    <th >Subtotal price</th>
                                    <th >Tax</th>
                                    <th >Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {isLoading ? <Spinner/> : SalesRepData }
                            {
                                SalesData.orders?.map((item) => {
                                    const itemdetailss = JSON.parse(item.ItemsDetail)

                                    return <tr key={item.TxnID} className='s12'>
                                        <td >{item.TxnID} </td>
                                        <td className='text-secondary'>{item.CustomerName} </td>
                                        <td className='text-secondary'> {itemdetailss.map((item) => {
                                            return (item.ItemRef.FullName)
                                        })}
                                        </td>

                                        <td className='text-secondary'>
                                            {itemdetailss.map((item) => {
                                                return (item.Amount)
                                            })}
                                        </td>

                                        <td className='text-secondary'> {itemdetailss.map((item) => {
                                            return (item.Quantity)
                                        })}
                                        </td>
                                        <td className='text-secondary'>{item.Subtotal}</td>
                                        <td className='text-secondary'>{item.SalesTaxPercentage}</td>
                                        <td className='text-secondary'>${item.TotalAmount}</td>
                                    </tr>

                                })
                            }
                            </tbody>


                          

                        </table>
                    </div>

                </div>
                <br /><br />
            </div>
            <div className='hr_line'></div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default SalesReport;