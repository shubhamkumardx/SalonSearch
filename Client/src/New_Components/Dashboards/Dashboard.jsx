import React, { useState } from "react";
import Home from "../../Pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Userimage from "../../images/Userimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { Dropdown } from "react-bootstrap";

function Dashboard(props) {
  const [active, IsActive] = useState(1);

  const handlelog = () => {
    sessionStorage.clear();
  };

  const [Getdata, setGetdata] = useState({});
  const userToken = sessionStorage.getItem("user");

  const option = {
    method: "GET",
    headers: {
      Authorization: userToken,
    },
    body: JSON.stringify(),
  };
  const Dashboardapi = async () => {
    const response = await fetch(
      `https://qb.flitsync.com/api/dashboard.php`,
      option
    );

    if (!response.ok) {
      console.log(` Error! Status: ${response.status}`);
    }
    const apidatas = await response.json();
    setGetdata(apidatas);
  };

  const labelsess = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
  ];
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
        backgroundColor: "rgb(230,243,243)",
        borderWidth: 2,
        data: [30, 24, 20, 33, 30, 40, 55],
        fill: true,
      },
      {
        label: "Customers",
        // backgroundColor: "rgb(255,161,113)",
        borderColor: "rgb(255,119,64)",
        backgroundColor: "rgb(242,217,198)",
        borderWidth: 2,
        data: [45, 54, 60, 45, 58, 58, 68],
        fill: true,
      },
    ],
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Bar Chart",
        backgroundColor: [
          "rgb(255,224,230)",
          "rgb(255,236,217)",
          "rgb(255,245,221)",
          "rgb(219,242,242)",
          "rgb(215,236,251)",
          "rgb(235,224,255)",
          "rgb(244,245,245)",
        ],
        borderColor: [
          "rgb(255,196,209)",
          "rgb(255,205,157)",
          "rgb(255,218,126)",
          "rgb(153,219,219)",
          "rgb(183,221,248)",
          "rgb(190,158,255)",
          "rgb(225,227,228)",
        ],
        borderWidth: 2,
        data: [22, 30, 7, 27, 20, 30, 40],
      },
    ],
  };

  const labelss = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
  ];
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
        backgroundColor: [
          "rgb(54,162,235)",
          "rgb(255,205,86)",
          "rgb(255,99,132)",
        ],
        borderColor: "white",
        borderWidth: 2,
        data: [13, 24, 57],
      },
    ],
  };

  const dataass = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 20, 30, 50, 70, 90, 34],
        backgroundColor: "rgb(255,99,132)",
      },
      {
        label: "Dataset 2",
        data: [20, 30, 40, 65, -23, 45, 12],
        backgroundColor: "rgb(54,162,235)",
      },
      {
        label: "Dataset 3",
        data: [-32, 30, 40, 34, 34, 9, 54],
        backgroundColor: "rgb(255,205,86)",
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
    <div className="">
      <div className="App">
        <div className="row">
          <div className="col-lg-8 text-start">
            <div className="d-flex mt-2">
              <p className="fw-bold  zxz">SALON SEARCH</p>
              <FontAwesomeIcon icon={faBars} className="d1 mt-2" />
              <input
                type="text"
                className="form-label a1"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-end">
            <div className="d9 d-flex">
              <img src={Userimage} className="sizing1" />
         

              <Dropdown>
                <Dropdown.Toggle
                  as="p"
                  variant="secondary"
                  id="dropdown-basic"
                  className="dro"
                >
                  Admin
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    {" "}
                    <Link className="nav-link" to="/Profile">
                      {" "}
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">Forgot Password</Dropdown.Item>
                  <Dropdown.Item href="/" onClick={handlelog}>
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className="row aq z2">
          <div className="col-lg-2">
            <div className="container ">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                {/* ---------DASHBOARD---------- */}

                <div
                  onClick={() => IsActive(1)}
                  style={
                    active === 1
                      ? {
                          borderRadius: "5px",
                        }
                      : { color: "rgb(56,87,143)" }
                  }
                >
                  {" "}
                  <Link className="nav-link" to="/dashboard">
                    <p className="dash-bd mb-0  mt-3">Dashboard</p>
                  </Link>
                </div>
                <hr className="mb-0"></hr>

                {/* -----------------BUSINESS TYPE----------- */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Business Type
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/BusinessTypeCreate">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(2)}
                            style={
                              active === 2
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            Create Business
                          </li>
                        </Link>
                        <Link className="nav-link" to="/BusinessTypelist">
                          <li
                            className="t5 mt-3"
                            onClick={() => IsActive(3)}
                            style={
                              active === 3
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Business Type list
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* --------------------SERVICE------------ */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Service
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/ServiceCreate">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(4)}
                            style={
                              active === 4
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Create Service
                          </li>
                        </Link>

                        <Link className="nav-link" to="/Servicelist">
                          <li
                            className="t5 mt-3"
                            onClick={() => IsActive(5)}
                            style={
                              active === 5
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Service list
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ---------------------HAIR TYPE------------------- */}

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingfour">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsefour"
                      aria-expanded="false"
                      aria-controls="flush-collapsefour"
                    >
                      Hair Type
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/HairTypeCreate">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(6)}
                            style={
                              active === 6
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Create Hair-Type
                          </li>
                        </Link>

                        <Link className="nav-link" to="/HairTypeList">
                          <li
                            className="t5 mt-3"
                            onClick={() => IsActive(7)}
                            style={
                              active === 7
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Hair-Type List
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ---------------------Admin----------------- */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingfive">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsefive"
                      aria-expanded="false"
                      aria-controls="flush-collapsefive"
                    >
                      Admin
                    </button>
                  </h2>
                  <div
                    id="flush-collapsefive"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingfive"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/SubadminCreate">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(8)}
                            style={
                              active === 8
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Create Sub-Admin
                          </li>
                        </Link>

                        <Link className="nav-link" to="/SubadminList">
                          <li
                            className="t5 mt-3"
                            onClick={() => IsActive(9)}
                            style={
                              active === 9
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Sub-Admin List
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ---------------------Users--------------- */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingsix">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsesix"
                      aria-expanded="false"
                      aria-controls="flush-collapsesix"
                    >
                      Users
                    </button>
                  </h2>
                  <div
                    id="flush-collapsesix"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingsix"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/Userslist">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(10)}
                            style={
                              active === 10
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Users List
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ----------------------Business ------------- */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingseven">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseseven"
                      aria-expanded="false"
                      aria-controls="flush-collapseseven"
                    >
                      Business
                    </button>
                  </h2>
                  <div
                    id="flush-collapseseven"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingseven"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <Link className="nav-link" to="/BusinessCreate">
                          <li
                            className="t5 mt-1"
                            onClick={() => IsActive(11)}
                            style={
                              active === 11
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Create Business
                          </li>
                        </Link>

                        <Link className="nav-link" to="/BusinessList">
                          <li
                            className="t5 mt-3"
                            onClick={() => IsActive(12)}
                            style={
                              active === 12
                                ? {
                                    backgroundColor: "rgb(224,243,255)",
                                    borderRadius: "5px",
                                    border: "5px solid rgb(224,243,255)",
                                  }
                                : { color: "rgb(56,87,143)" }
                            }
                          >
                            {/* <MdCompareArrows className="t1" /> */}
                            Business List
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ----------------Setting------------------------ */}
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingsev">
                    <button
                      class="accordion-button collapsed dash-bd1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapsesev"
                      aria-expanded="false"
                      aria-controls="flush-collapsesev"
                    >
                      Setting
                    </button>
                  </h2>
                  <div
                    id="flush-collapsesev"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingsev"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <ul className="list-group mt-1">
                        <li
                          className="t5 mt-1"
                          onClick={() => IsActive(11)}
                          style={
                            active === 11
                              ? {
                                  backgroundColor: "rgb(224,243,255)",
                                  borderRadius: "5px",
                                  border: "5px solid rgb(224,243,255)",
                                }
                              : { color: "rgb(56,87,143)" }
                          }
                        >
                          {/* <MdCompareArrows className="t1" /> */}
                          Logo
                        </li>
                        <li
                          className="t5 mt-3"
                          onClick={() => IsActive(12)}
                          style={
                            active === 12
                              ? {
                                  backgroundColor: "rgb(224,243,255)",
                                  borderRadius: "5px",
                                  border: "5px solid rgb(224,243,255)",
                                }
                              : { color: "rgb(56,87,143)" }
                          }
                        >
                          {/* <MdCompareArrows className="t1" /> */}
                          Splash screen
                        </li>

                        <li
                          className="t5 mt-3"
                          onClick={() => IsActive(12)}
                          style={
                            active === 12
                              ? {
                                  backgroundColor: "rgb(224,243,255)",
                                  borderRadius: "5px",
                                  border: "5px solid rgb(224,243,255)",
                                }
                              : { color: "rgb(56,87,143)" }
                          }
                        >
                          {/* <MdCompareArrows className="t1" /> */}
                          Explore Screen Heading
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-10 active t4">
            {active == 1 && (
              <>
                <Dashboard />
              </>
            )}
            {active == 2 && (
              <>
                <Create />{" "}
              </>
            )}
            {active == 3 && (
              <>
                <List />
              </>
            )}
            {active == 4 && (
              <>
                <ServiveCreate />
              </>
            )}
            {active == 5 && (
              <>
                <Servicelist />
              </>
            )}
            {active == 6 && (
              <>
                <HairCreate />
              </>
            )}
            {active == 7 && (
              <>
                <HairList />
              </>
            )}
            {active == 8 && (
              <>
                <AdminCreate />
              </>
            )}
            {active == 9 && (
              <>
                <AdminList />
              </>
            )}
            {active == 10 && (
              <>
                <UserList />
              </>
            )}
            {active == 11 && (
              <>
                <BusinessCreate />
              </>
            )}
            {active == 12 && (
              <>
                <BusinessList />
              </>
            )}
          </div> */}

          <div className="col-lg-10 t4">
            <div className="container">
              <p className="text-start  a2 mt-1 ">Dashboard</p>
              <p className="a3 text-start  ">
                Home / <span className=" a26">Dashboard</span>
              </p>
              <div className="row">
                <div className="col-lg-4 a41">
                  <p className="d-flex a5 mt-2">
                    Business<span className="text-secondary a6"> Type</span>
                    <span className="a77 text-secondary">...</span>
                  </p>
                  <div className="d-flex">
                    <div className="d-flex a8">
                      <AiOutlineShoppingCart className="a9 " />
                    </div>
                    <div className="">
                      <p className="a10">
                        ${Getdata?.total_sale?.total}
                        <p className="a11 d-flex">
                          12% <span className="a12">increase</span>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 a43">
                  <p className="d-flex a5 mt-2">
                    Service|<span className="text-secondary a6">Type</span>
                    <span className="a7 text-secondary">...</span>
                  </p>
                  <div className="d-flex">
                    <div className="d-flex a8">
                      <BsCurrencyDollar className="a13 " />
                    </div>
                    <div className="">
                      <p className="a10  ">
                        {Getdata?.total_items?.total}
                        <p className="a111 d-flex">
                          8% <span className="a12">increase</span>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 a42">
                  <p className="d-flex a5 mt-2">
                    Hair|<span className="text-secondary a6">Type</span>
                    <span className="a7 text-secondary">...</span>
                  </p>
                  <div className="d-flex">
                    <div className="d-flex a8">
                      <IoMdContacts className="a14 " />
                    </div>
                    <div className="">
                      <p className="a10  ">
                        {Getdata?.total_cogs?.total}
                        <p className="a15 d-flex">
                          12% <span className="a12">Decrease</span>
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 b1 mt-4">
                  <p className="d-flex a5 mt-2">
                    Reports|<span className="text-secondary a6"> Today</span>
                    <span className="a77 text-secondary">...</span>
                  </p>
                  {/* <Chart className=" "
                            series={states.series}
                            options={states.options}
                            type="line"
                            width={500}
                        /> */}
                  <Line data={datas} />
                </div>
                <div className="col-lg-6 b2 mt-4">
                  <p className="d-flex a5 mt-2">
                    Business|<span className="text-secondary a6"> Type</span>
                    <span className="a77 text-secondary">...</span>
                  </p>
                  <div className="d-flex mt-4">
                    <select className="b3 text-secondary">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                      <option value="" selected>
                        10
                      </option>
                    </select>
                    <p className="b7">Entries per page</p>
                    <input
                      type="text"
                      className="form-label  b4"
                      placeholder="Search.."
                    />
                  </div>
                  <table className="table">
                    <thead>
                      <tr className="mt-2">
                        <th>#</th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-primary">#2345</td>
                        <td>Defalsons</td>
                        <td className="text-primary">def@som</td>
                        <td>$76</td>
                        <td
                          style={{
                            backgroundColor: "rgb(25,135,84)",
                            borderRadius: "15px",
                            fontSize: "14px",
                          }}
                          className="text-white text-center "
                        >
                          Approved
                        </td>
                      </tr>
                      <tr className="">
                        <td className="text-primary">#4567</td>
                        <td>Doeq</td>
                        <td className="text-primary">john@ex</td>
                        <td>$98</td>
                        <td
                          style={{
                            backgroundColor: "rgb(255,193,7)",
                            borderRadius: "15px",
                            fontSize: "14px",
                          }}
                          className="text-white text-center"
                        >
                          Pending
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary">#6547</td>
                        <td>Moew</td>
                        <td className="text-primary">mary@</td>
                        <td>$54</td>
                        <td
                          style={{
                            backgroundColor: "rgb(25,135,84)",
                            borderRadius: "15px",
                            fontSize: "14px",
                          }}
                          className="text-white text-center"
                        >
                          Approved
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary">#1298</td>
                        <td>Dooley</td>
                        <td className="text-primary">july@</td>
                        <td>$87</td>
                        <td
                          style={{
                            backgroundColor: "rgb(220,53,69)",
                            borderRadius: "15px",
                            fontSize: "14px",
                          }}
                          className="text-white text-center"
                        >
                          Rejected
                        </td>
                      </tr>
                      <tr>
                        <td className="text-primary">#2365</td>
                        <td>jacob</td>
                        <td className="text-primary">bo@e</td>
                        <td>$45</td>
                        <td
                          style={{
                            backgroundColor: "rgb(255,193,7)",
                            borderRadius: "15px",
                            fontSize: "14px",
                          }}
                          className="text-white text-center"
                        >
                          Pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-lg-6 b8 mt-4 ">
                  <p className="d-flex a5 mt-3">Line Chart</p>
                  <div>
                    <Line data={dataa} />
                  </div>
                </div>
                <div className="col-lg-6 b8 mt-4 b11">
                  <p className="d-flex a5 mt-3">Bar Chart</p>
                  <div>
                    <Bar data={data} />
                  </div>
                </div>
                <div className="col-lg-6 mt-4 b8">
                  <p className="d-flex a5 mt-3">Pie Chart</p>
                  <div className="b12 mt-3">
                    <Pie data={dataas} />
                  </div>
                </div>
                <div className="col-lg-6 mt-4 b8 b11">
                  <p className="d-flex a5 mt-3">Stacked Bar Chart</p>
                  <div className="mt-3">
                    <Bar data={dataass} options={options} />
                  </div>
                </div>
              </div>
            </div>
            <br /> <br />
            <div className="hr_line"></div>
            <p className="p11 text-center mt-2">
              {" "}
              Copyright <span className="p12">Saloon Finder.</span> All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
