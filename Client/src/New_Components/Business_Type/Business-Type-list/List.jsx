import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Userimage from "../../../images/Userimage.jpg";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Dropdown } from "react-bootstrap";

function List(props) {
  const init = {
    name: "",
    description: "",
  };

  const [active, IsActive] = useState(1);
  const [ListData, setListData] = useState([]);
  const [Viewmore, setviewmore] = useState(false);
  const [formData, setFormData] = useState(init);
  const [Data, setData] = useState([]);
  const [DeleteId, setDeleteId] = useState();
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsperPages, setpostsperPages] = useState(5);
  const [selectedOption, setSelectedOption] = useState("all");

  const isActive = true;
  const navigate = useNavigate();

  const handlelog = () => {
    sessionStorage.clear();
  };

  const handleSearchh = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };

  const filteredArray =
    ListData?.filter((item) => {
      return (
        item.name && item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }) || [];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredArray.slice(startIndex, endIndex);

  const filteredData =
    selectedOption === "all"
      ? currentItems
      : ListData.filter(
          (item) => item.is_active === (selectedOption === "active")
        );
  console.log(filteredData);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={
            i === currentPage
              ? "btn btn-secondary active text-white fw-bold"
              : "btn btn-primary"
          }
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  // GET ALL LIST
  const obj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };

  const GetListData = async () => {
    const response = await fetch(`http://localhost:5000/getbusinesslist`, obj);
    if (!response.ok) {
      console.log(` Error! Status: ${response.status}`);
    }
    const Data = await response.json();
    setListData(Data);
  };

  useEffect(() => {
    GetListData();
  }, []);

  // GET SINGLE DATA
  const handlesub = (id) => {
    GetBsData(id);
  };

  const GetBsData = async (id) => {
    const response = await fetch(
      `http://localhost:5000/getbusinesstype?_id=${id} `,
      obj
    );
    if (response.ok) {
      const tasks = await response.json();
      setData(tasks);
      console.log("Get Task  successfully");
    } else {
      console.log("Something went wrong");
    }
  };

  // UPDATE




  const submitformchanges = async (e) => {
    e.preventDefault();
    UpdateListInfo(formData);
  };

  const opt = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const UpdateListInfo = async (formData) => {
    const response = await fetch(
      `http://localhost:5000/updatelist?_id=${Data._id}`,
      opt
    );
    if (response.ok) {
      toast.success("Business Updated successfully");
      navigate("/BusinessTypelist");
      console.log("Business Updated successfully");
    } else {
      console.log("Something went wrong");
    }
  };

  // DELETE

  const submitdelete = async (e) => {
    e.preventDefault();
    DeleteType();
  };

  const option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  };
  const DeleteType = async () => {
    const response = await fetch(
      `http://localhost:5000/deletebusinesstype?_id=${DeleteId}`,
      option
    );
    if (response.ok) {
      toast.success("Business Type Deleted successfully");
      navigate("/BusinessTypelist");
      console.log("Business Type Deleted successfully");
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      {/* EDIT MODAL */}

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Business Type
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ">
              <div className="container">
                <form
                // onSubmit={submitFormData}
                >
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                      type="name"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter new Business Type Name"
                      name="name"
                      defaultValue={Data.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      // value={formData.name}
                      // onChange={handleInputChange}
                    />
                  </div>

                  <div class="form-group  mt-4">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea
                      name="description"
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter new Business Type description if there is"
                      defaultValue={Data.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      // value={formData.description}
                      // onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <div class="form-check mt-3">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="checkbox"
                      id="flexCheckChecked"
                      // const value = target.type === "checkbox" ? target.checked : target.value;
                      // defaultValue={Data.is_active == true ? Data.is_active: "checkbox"}
                      checked={Data.is_active}
                      // checked={formData.checkbox}
                      // onChange={handleInputChange}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Active Business Type
                    </label>
                  </div>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={submitformchanges}
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DELETE MODAL */}

      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Are You Sure Want to Delete?</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn btn-danger"
                onClick={submitdelete}
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

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
                <p className="text-start  a2 mt-1 "> Business Type/List </p>

                <div className="mkl">
                  <p className="oppo"> Filters</p>
                  <div className="d-flex mt-2">
                    <input
                      type="text"
                      className="s4"
                      placeholder="Search by Name"
                      onChange={handleSearchh}
                      // value={searchText}
                      // onChange={handleChange}
                    />

                    <select
                      name="language"
                      id="language"
                      value={selectedOption}
                      className="s8 text-secondary"
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="all" selected>
                        Status
                      </option>
                      <option value="active">Active</option>

                      <option value="inactive">Inactive</option>
                    </select>

                    <div className="ws">
                      <Link className="nav-link" to="/BusinessTypeCreate">
                        <button type="button" className="btn btn-primary">
                          Create New{" "}
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="container">
                    <table className="mt-5 table">
                      <thead>
                        <tr className="s11 ">
                          <th>Name</th>
                          <th>Description</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredArray.length === 0 ? (
                          <tr>
                            <td></td>
                            <td>
                              <h4 className="text-center">NO DATA FOUND</h4>
                            </td>
                            <td></td>
                          </tr>
                        ) : (
                          filteredData.map((item) => {
                            return (
                              <>
                                <tr>
                                  <td className="">{item.name}</td>
                                  <td className="">
                                    {Viewmore
                                      ? item.description
                                      : `${item.description.slice(0, 160)}...`}
                                  </td>
                                  <td className="">
                                    {isActive === item.is_active
                                      ? "Active"
                                      : "Inactive"}
                                  </td>
                                  <td className="">
                                    <div className="">
                                      <button
                                        type="button"
                                        class="btn btn-success"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => handlesub(item._id)}
                                      >
                                        Edit
                                      </button>

                                      <br />
                                      <button
                                        type="button"
                                        className="btn btn-danger mt-2"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal1"
                                        onClick={() => setDeleteId(item._id)}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
                <br />
                <br />
              </div>

              {/* PAGINATION */}
              <div className="pagination">{renderPageNumbers()}</div>


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
    </>
  );
}

export default List;
