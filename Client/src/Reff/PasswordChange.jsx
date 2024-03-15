import React from "react";

function PasswordChange(props) {
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

              <form>
                <div className="form-group  ">
                  <label for="exampleInputEmail1" className="log22 mt-3">
                    Enter New Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="form-group  ">
                  <label for="exampleInputEmail1" className="log22 mt-3">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control mt-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="btn-btn form-control l5 text-white p-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordChange;
