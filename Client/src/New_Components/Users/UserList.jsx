import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Userimage from "../../images/Userimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

function UserList(props) {
  const [active, IsActive] = useState(1);

  const handlelog = () => {
    sessionStorage.clear();
  };

  return (
    <>
      <div className="App">
        <div className="row ">
          <div className="col-lg-8 text-start">
            <div className="d-flex mt-2 ">
              <p className="fw-bold  zxz">SALON SEARCH</p>
              <FontAwesomeIcon icon={faBars} className="d1 mt-2" />
              <input
                type="text"
                className="form-label a1 "
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-end ">
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
          <div className="col-lg-10 t4">
            <div>
              <div className="container">
                <p className="text-start  a2 mt-1 "> Users List </p>

                <div className="mkl">
                  <p className="oppo"> Filters</p>
                  <div className="d-flex mt-2">
                    <input
                      type="text"
                      className="s4"
                      placeholder="Search by Name"
                    />

                    <select
                      name="language"
                      id="language"
                      className="s8 text-secondary"
                    >
                      <option value="">Active</option>
                      <option value="">Inactive</option>

                      <option value="" selected>
                        Status
                      </option>
                    </select>

                    <button type="button" className="btn btn  s7 text-white ">
                      Create New{" "}
                    </button>
                    <button type="button" className="btn btn  s6 text-white">
                      Export
                    </button>
                  </div>

                  <div className="container">
                    <table className="mt-5 table">
                      <thead>
                        <tr className="s11">
                          <th>id</th>
                          <th>Name</th>
                          <th>Phone No</th>
                          <th>Status</th>
                          <th>Address</th>
                          <th>Action</th>/{" "}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12</td>
                          <td>shubham</td>
                          <td>dsadd</td>
                          <td>sada</td>
                          <td>sada</td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Edit
                            </button>{" "}
                            <br />
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>shubham</td>
                          <td>dsadd</td>
                          <td>sada</td>
                          <td>sada</td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Edit
                            </button>{" "}
                            <br />
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>shubham</td>
                          <td>dsadd</td>
                          <td>sada</td>
                          <td>sada</td>
                          <td>
                            <button type="button" class="btn btn-success">
                              Edit
                            </button>{" "}
                            <br />
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                <br />
              </div>
              <div className="hr_line"></div>
              <p className="p11 text-center mt-2">
                {" "}
                Copyright <span className="p12">Saloon Finder.</span> All Rights
                Reserved
              </p>
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
        </div>
      </div>
    </>
  );
}

export default UserList;
