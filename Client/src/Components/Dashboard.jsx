import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCurrencyDollar } from 'react-icons/bs'
import { IoMdContacts } from 'react-icons/io'
import Chart from "react-apexcharts";
import Charts from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { getStaticContextFromError } from '@remix-run/router';

function Dashboard() {
    const [Getdata, setGetdata] = useState({});
    const userToken = sessionStorage.getItem('user');

    const option = {
        method: "GET",
        headers: {
            "Authorization": userToken,
        },
        body: JSON.stringify()  
    }
    const Dashboardapi = async () => {
        const response = await fetch(`https://qb.flitsync.com/api/dashboard.php`, option);

        if (!response.ok) {
            console.log(` Error! Status: ${response.status}`);
        }
        const apidatas = await response.json();
        setGetdata(apidatas)
    }
  
    const labelsess = ["January", "February", "March", "April", "May", "June", "july"];
    const datas = {
        labels: labelsess,
        datasets: [
            {
                label: "Sales",
                //  backgroundColor: "rgb(127,137,244)",
                borderColor: "rgb(127,137,244)",
                 backgroundColor: "rgb(222,225,247)",
                borderWidth: 2,
                data: [0, 10, 5, 10, 20, 20, 40],
                fill: true,
                
                
               
            },
            {
                label: "Revenue",
                // backgroundColor: "rgb(46,202,106)",
                borderColor: "rgb(46,202,106)",
                backgroundColor:"rgb(230,243,243)",
                borderWidth: 2,
                data: [30, 24, 20, 33, 30, 40, 55],
                 fill: true,
               
            },
            {
                label: "Customers",
                // backgroundColor: "rgb(255,161,113)",
                borderColor: "rgb(255,119,64)",
                 backgroundColor:"rgb(242,217,198)",
                borderWidth: 2,
                data: [45, 54, 60, 45, 58, 58,68],
                  fill: true,
            },
         
        ],
        
    };

    const labels = ["January", "February", "March", "April", "May", "June", "july"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Bar Chart",
                backgroundColor: ["rgb(255,224,230)", "rgb(255,236,217)", "rgb(255,245,221)", "rgb(219,242,242)", "rgb(215,236,251)", "rgb(235,224,255)", "rgb(244,245,245)"],
                borderColor: ["rgb(255,196,209)", "rgb(255,205,157)", "rgb(255,218,126)", "rgb(153,219,219)", "rgb(183,221,248)", "rgb(190,158,255)", "rgb(225,227,228)"],
                borderWidth: 2,
                data: [22, 30, 7, 27, 20, 30, 40],
            },
        ],
    };

    const labelss = ["January", "February", "March", "April", "May", "June", "july"];
    const dataa = {
        labels: labels,
        datasets: [
            {
                label: "Line Chart",
                backgroundColor: "rgb(75,192,192)",
                borderColor: "rgb(75,192,192)",
                borderWidth: 2,
                data: [0, 10, 5, 2, 20, 30, 45],
               
            },
         
        ],
        
    };

    const labelses = ["blue", "yellow", "pink"];
    const dataas = {
        labels: labelses,
        datasets: [
            {
                label: "Pie Chart",
                backgroundColor: ["rgb(54,162,235)", "rgb(255,205,86)", "rgb(255,99,132)"],
                borderColor: "white",
                borderWidth: 2,
                data: [13, 24, 57],
            },
        ],
    };

    const dataass = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 20, 30, 50, 70, 90, 34],
                backgroundColor: 'rgb(255,99,132)',
            },
            {
                label: 'Dataset 2',
                data: [20, 30, 40, 65, -23, 45, 12],
                backgroundColor: 'rgb(54,162,235)',
            },
            {
                label: 'Dataset 3',
                data: [-32, 30, 40, 34, 34, 9, 54],
                backgroundColor: 'rgb(255,205,86)',
            },

        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
            },
            y: {
                beginAtZero: true,
                stacked: true,
            },
        },
    };

    return (
        <div>
            <div className='container'>
                <p className='text-start  a2 mt-1 '>Dashboard</p>
                <p className='a3 text-start  '>Home / <span className=' a26' >Dashboard</span></p >
                <div className='row'>
                    <div className='col-lg-4 a41'>
                        <p className='d-flex a5 mt-2'>Business<span className='text-secondary a6'> Type</span><span className='a77 text-secondary'>...</span></p>
                        <div className='d-flex'>
                            <div className='d-flex a8'>
                                <AiOutlineShoppingCart className='a9 ' />
                            </div>
                            <div className=''>
                                <p className='a10'>${Getdata?.total_sale?.total}<p className='a11 d-flex'>12%  <span className='a12'>increase</span></p></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 a43'>
                        <p className='d-flex a5 mt-2'>Service|<span className='text-secondary a6'>Type</span><span className='a7 text-secondary'>...</span></p>
                        <div className='d-flex'>
                            <div className='d-flex a8'>
                                <BsCurrencyDollar className='a13 ' />
                            </div>
                            <div className=''>
                                <p className='a10  '>{Getdata?.total_items?.total}<p className='a111 d-flex'>8% <span className='a12'>increase</span></p></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 a42'>
                        <p className='d-flex a5 mt-2'>Hair|<span className='text-secondary a6'>Type</span><span className='a7 text-secondary'>...</span></p>
                        <div className='d-flex'>
                            <div className='d-flex a8'>
                                <IoMdContacts className='a14 ' />
                            </div>
                            <div className=''>
                                <p className='a10  '>{Getdata?.total_cogs?.total}<p className='a15 d-flex'>12% <span className='a12'>Decrease</span></p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6 b1 mt-4'>
                        <p className='d-flex a5 mt-2'>Reports|<span className='text-secondary a6'> Today</span><span className='a77 text-secondary'>...</span></p>
                        {/* <Chart className=" "
                            series={states.series}
                            options={states.options}
                            type="line"
                            width={500}
                        /> */}
                         <Line data={datas}  />
                    </div>
                    <div className='col-lg-6 b2 mt-4'>
                        <p className='d-flex a5 mt-2'>Business|<span className='text-secondary a6'> Type</span><span className='a77 text-secondary'>...</span></p>
                        <div className='d-flex mt-4'>
                            <select className='b3 text-secondary' >
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="" >3</option>
                                <option value="" >4</option>
                                <option value="" >5</option>
                                <option value="" >6</option>
                                <option value="" >7</option>
                                <option value="" >8</option>
                                <option value="" >9</option>
                                <option value="" selected>10</option>
                            </select>
                            <p className='b7'>Entries per page</p>
                            <input type="text" className='form-label  b4' placeholder='Search..' />
                        </div>
                        <table className="table">
                            <thead>
                                <tr className='mt-2'>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>status</th>
                                </tr>

                            </thead>
                            <tbody>


                                <tr >
                                    <td className='text-primary'>#2345</td>
                                    <td>Defalsons</td>
                                    <td className='text-primary'>def@som</td>
                                    <td>$76</td>
                                    <td style={{ backgroundColor: 'rgb(25,135,84)', borderRadius: '15px', fontSize: "14px", }} className='text-white text-center '>Approved</td>
                                </tr>
                                <tr className="">
                                    <td className='text-primary'>#4567</td>
                                    <td>Doeq</td>
                                    <td className='text-primary'>john@ex</td>
                                    <td>$98</td>
                                    <td style={{ backgroundColor: 'rgb(255,193,7)', borderRadius: '15px', fontSize: "14px" }} className='text-white text-center'>Pending</td>
                                </tr>
                                <tr>
                                    <td className='text-primary'>#6547</td>
                                    <td>Moew</td>
                                    <td className='text-primary'>mary@</td>
                                    <td>$54</td>
                                    <td style={{ backgroundColor: 'rgb(25,135,84)', borderRadius: '15px', fontSize: "14px" }} className='text-white text-center'>Approved</td>
                                </tr>
                                <tr>
                                    <td className='text-primary'>#1298</td>
                                    <td>Dooley</td>
                                    <td className='text-primary'>july@</td>
                                    <td>$87</td>
                                    <td style={{ backgroundColor: 'rgb(220,53,69)', borderRadius: '15px', fontSize: "14px" }} className='text-white text-center'>Rejected</td>
                                </tr>
                                <tr>
                                    <td className='text-primary'>#2365</td>
                                    <td>jacob</td>
                                    <td className='text-primary'>bo@e</td>
                                    <td>$45</td>
                                    <td style={{ backgroundColor: 'rgb(255,193,7)', borderRadius: '15px', fontSize: "14px" }} className='text-white text-center'>Pending</td>
                                </tr>
                               

                            </tbody>
                        </table>
                    </div>
                    <div className='col-lg-6 b8 mt-4 '>
                        <p className='d-flex a5 mt-3'>Line Chart</p>
                        <div>
                            <Line data={dataa}  />
                        </div>
                    </div>
                    <div className='col-lg-6 b8 mt-4 b11'>
                        <p className='d-flex a5 mt-3'>Bar Chart</p>
                        <div>
                            <Bar data={data} />
                        </div>
                    </div>
                    <div className='col-lg-6 mt-4 b8'>
                        <p className='d-flex a5 mt-3'>Pie Chart</p>
                        <div className='b12 mt-3'>
                            <Pie data={dataas} />
                        </div>
                    </div>
                    <div className='col-lg-6 mt-4 b8 b11'>
                        <p className='d-flex a5 mt-3'>Stacked Bar Chart</p>
                        <div className='mt-3'>
                            <Bar data={dataass} options={options} />
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className='hr_line'></div>
            <p className='p11 text-center mt-2'> Copyright <span className='p12'>Demeter Fragrances.</span> All Rights Reserved</p>
        </div>
    );
}
export default Dashboard;