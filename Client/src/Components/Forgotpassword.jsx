import React, { useState } from 'react';

function Forgotpassword(props) {
    const [FormData, setFormData] = useState();

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitForm = async (e) => {
        e.preventDefault();
        forgotpass(FormData);
    }

    const forgotpass = async (FormData) => {
        const option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FormData)
        }

        const response = await fetch(`https://qb.flitsync.com/api/forgot_password.php?email=${FormData.email}`, option);
        console.log(response)
    }



    return (
        <div>
            <div className="card l33 ">
                <div className="row ">
                    <div className="col-lg-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" className="img-fluid rounded-start tyt" alt="..." />
                    </div>
                    <div className="col-lg-7 l4">
                        <div className="card-body mt-5">
                            <h5 className="card-title fw-bold l8">Demeter Fragrances</h5>
                            <p className=' log11  mt-3'>Enter Email to Forgot Password</p>

                            <form>
                                <div className="form-group  ">
                                    <label for="exampleInputEmail1" className='log22 mt-3' >Email address</label>
                                    <input type="email" className="form-control mt-2" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>

                                <div className='form-group mt-3'>
                                    <button type="submit" className="btn-btn form-control l5 text-white p-2" onClick={submitForm}>Submit</button>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;