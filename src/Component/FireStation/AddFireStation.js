import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddFireStation = () => {
  const [formData, setFormData] = useState({
    heading: '',
    address: '',
    phoneNo: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'userfile') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending data to the server
    console.log(formData);
  };

  return (
    <>
     
      <div className="page-wrapper">
        <div className="content">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#">City Profile</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/fire-station">Fire Station</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Add Fire Station
            </li>
          </ol>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Add Fire Station</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        Heading <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="heading"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={formData.heading}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        Address <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="address"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={formData.address}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        Phone No. <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-5">
                        <input
                          type="text"
                          name="phoneNo"
                          className="form-control form-control-lg"
                          placeholder=""
                          value={formData.phoneNo}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        Upload Fire Station Image
                      </label>
                      <div className="col-md-5">
                        <div className="input-group mb-3">
                          <input
                            type="file"
                            name="userfile"
                            className="form-control"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default AddFireStation;
