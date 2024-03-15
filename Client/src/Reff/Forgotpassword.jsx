import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Forgotpassword(props) {
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const navigate = useNavigate();
  const handleSendOtp = (e) => {
    e.preventDefault();
    // Here, you would typically send the OTP to the user's email
    setShowOtpInput(true);
  };

  const handleOtpChange = (e) => {
    const otp = e.target.value;
    // Handle the OTP input here
  };

  const handle = () => {
    navigate("/passwordchange");
  };

  return (
    <div>
    

      <div className="card l33 ">
        <div className="row ">
          <div className="col-lg-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              className="img-fluid rounded-start tyt"
              alt="..."
            />
          </div>
          <div className="col-lg-7 l4">
            <div className="card-body mt-5">
              <h5 className="card-title fw-bold l8">SALON SEARCH</h5>
              <p className=" log11  mt-3">Enter Email to Forgot Password</p>

              <form>
                {showOtpInput === false && (
                  <>
                    <div className="form-group  ">
                      <label for="exampleInputEmail1" className="log22 mt-3">
                        Enter Your Email:
                      </label>
                      <input
                        type="email"
                        className="form-control mt-2"
                        onChange={(e) => setEmail(e.target.value)}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn-btn form-control l5 text-white p-2"
                        onClick={handleSendOtp}
                      >
                        Send Otp
                      </button>
                    </div>
                  </>
                )}

                {showOtpInput && (
                  <>
                    <div className="form-group  ">
                      <label for="exampleInputEmail1" className="log22 mt-3">
                        Enter Your Otp:
                      </label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        onChange={handleOtpChange}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                    </div>

                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        className="btn-btn form-control l5 text-white p-2"
                 
                        onClick={handle}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
