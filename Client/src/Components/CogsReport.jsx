import React, { useEffect, useState } from 'react';
import SpinCog from './SpinCog';

function CogsReport(props) {
    const [cogsdata, setcogsdata] = useState();
    const [isLoading, setIsLoading] = useState(false);
 

    useEffect(() => {
        CogsDataas()
    }, [])

    const userToken = sessionStorage.getItem('user');
    const option = {
        method: "GET",
        headers: {
            "Authorization": userToken,
        },
        body: JSON.stringify()
    }

    const CogsDataas = async () => {
        setIsLoading(true);
        const response = await fetch(`https://qb.flitsync.com/api/cogs.php`, option);
        if (!response.ok) {
            console.log(` Error! Status: ${response.status}`);
        }
        const cogsRep = await response.json();
        setcogsdata(cogsRep)
        setIsLoading(false);
    }


    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Cogs Report</p>
                <p className='a3 text-start  '>Home / <span className='a26' >Cogs Report</span></p >
                <div className='mkl'>
                    <p className='oppo'> Filters</p>
                    <div className='d-flex mt-3'>
                        <select className='s8 text-secondary'>
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
                            <option value="" selected >Select Months </option>
                        </select>

                        <select className='s4 text-secondary'>
                            <option value="" >2023</option>
                            <option value="" selected>Select Year</option>
                        </select>

                        <select className='s4 text-secondary'>
                            {
                                cogsdata?.cogsReport?.sales.map((item) => {
                                    return (<option value="">{item.TxnID}
                                    </option>)
                                })
                            }
                            <option value="" selected>By Order No</option>
                        </select>


                        <select className='s4 text-secondary'>
                            {
                                cogsdata?.cogsReport?.sales.map((item) => {
                                    return (<option value="">{item.itemName}
                                    </option>)
                                })
                            }
                            <option value="" selected>Select product</option>
                        </select>


                        <select className='s4 text-secondary'>
                            <option value="" selected>...</option>
                            <option value="" selected>Select Customer</option>
                        </select>

                        <button type="button" className="btn btn s7 text-white">Submit</button>
                        <button type="button" className="btn btn s6 text-white">Clear</button>
                    </div>
                    <div className='container'>
                        <table className='mt-5 table'>
                            <thead>
                         
                                <tr className='s11 '>
                                    <th >Order No</th>
                                    <th >Items Name</th>
                                    <th >Items Price</th>
                                    <th >Items Qty</th>
                                    <th >items Tax</th>
                                    <th >Total price</th>
                                </tr>
                            </thead>
                            <tbody>
                            {isLoading ? <SpinCog/> : CogsDataas }
                                {cogsdata?.cogsReport?.sales.map((ele) => {
                                    return (
                                        <>
                                            <tr className='s12 '>
                                                <td className='fw-bold text-black'>{ele.TxnID}</td>
                                                <td className='text-secondary'>{ele.itemName}</td>
                                                <td className='text-secondary'>{ele.itemRate}</td>
                                                <td className='text-secondary'>{ele.itemQty}</td>
                                                <td className='text-secondary'>...</td>
                                                <td className='text-secondary'>${ele.cogs}</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </tbody>


                        </table>
                    </div>
                </div>
                <br /> <br />
            </div>

            <div className='hr_line'>

            </div>

            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default CogsReport;