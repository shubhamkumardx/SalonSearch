import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';


function ItemReport(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [Items,setItems]= useState()
    console.log(Items)


    const userToken = sessionStorage.getItem('user');
    const option = {
        method: "GET",
        headers: {
            "Authorization": userToken,
        },
        body: JSON.stringify()
    }



    const ItemRepData = async () => {
        setIsLoading(true);
        const response = await fetch(`https://qb.flitsync.com/api/items.php`, option);
        if (!response.ok) {
            console.log(` Error! Status: ${response.status}`);
        }
        const ItemData = await response.json();
        setItems(ItemData)
        setIsLoading(false)
    }

    useEffect(()=>{
        ItemRepData();
    },[])
    


    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Items Report</p>
                <p className='a3 text-start  '>Home / <span className='a26' >Items Report</span></p >

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
                            <option value="" selected >Select Months
                            </option>
                        </select>
                        <select name="language" id="language" className='s4 text-secondary'>
                            <option value="">2021</option>
                            <option value="">2022</option>
                            <option value="" >2023</option>
                            <option value="" selected>Select Year</option>
                        </select>
                        <select  className='s4 text-secondary'>
                            {
                                Items?.allItems.map((iti)=>{
                                    return (  <option>{iti.ListID}</option>
                                    )
                                })
                            }
                            <option value="" selected>By Order No</option>
                        </select>
                        <select  className='s4 text-secondary '>
                        {
                                Items?.allItems.map((iti)=>{
                                    return (  <option className=''>{iti.FullName}</option>
                                    )
                                })
                            }
                            <option value="" selected>Select product</option>
                        </select>
                        <select  className='s4 text-secondary'>
                            <option value="" >...</option>
                            <option value="" selected>Select Customer</option>
                        </select>
                        <button type="button" className="btn btn- s7 text-white">Submit</button>
                        <button type="button" className="btn btn-  s6 text-white">Clear</button>
                    </div>

                    <div className='container'>
                        <table className='mt-5 table'>
                     
                            <thead>
                            <tr className='s64 '>
                                <th >Order No</th>
                                <th >Items Name</th>
                                <th >Items Price</th>
                                <th >Item Subtotal Price</th>
                                <th >Items Qty</th>
                                <th >Items Discount Price</th>
                                <th >Items Tax</th>
                                <th >Total price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {isLoading ? <Spinner/> : ItemRepData }
                            {
                                Items?.allItems?.map((ind)=>{
                                    return(
                                     <>
                                     <tr className='s121 text-secondary'>
                                        <td className='fw-bold text-black'> {ind.ListID} </td>
                                        <td className='text-secondary'>{ind.FullName}</td>
                                        <td className='text-secondary'>...</td>
                                        <td className='text-secondary'>...</td>
                                        <td className='text-secondary'>...</td>
                                        <td className='text-secondary'>...</td>
                                        <td className='text-secondary'>...</td>
                                        <td className='text-secondary'>${ind.SalesPrice}</td>
                                     </tr>
                                         </>
                                    )
                                })
                              }
                            </tbody>
                          
                            
                        </table>
                    </div>
                </div>
                <br /> <br />
            </div>
            <div className='hr_line'></div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}

export default ItemReport;