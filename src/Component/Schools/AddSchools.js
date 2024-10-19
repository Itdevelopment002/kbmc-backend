import React, { useState } from "react";

const AddSchools = () => {
  const [formData, setFormData] = useState({
    heading: "",
    schoolName: "",
    address: "",
    medium: "",
    schoolPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value, // Handle file input separately
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="page-wrapper">
    
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.php">City Profile</a>
          </li>
          <li className="breadcrumb-item">
            <a href="schools.php">Schools</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Schools
          </li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Schools</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">Heading</label>
                    <div className="col-md-5 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      School Names <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-5 mb-3 ">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder=""
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Address <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-5 mb-3">
                      <textarea
                        className="form-control form-control-lg"
                        id="address"
                        name="address"
                        rows="4"
                        value={formData.address}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Medium</label>
                    <div className="col-md-5">
                      <select
                        className="form-control"
                        name="medium"
                        value={formData.medium}
                        onChange={handleChange}
                      >
                        <option value="">Select Medium</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Urdu">Urdu</option>
                        <option value="English">English</option>
                        <option value="Semi English">Semi English</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
                <hr />
                <form action="#" className="pt-3" onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-lg-2">Upload School Photos</label>
                    <div className="col-md-4">
                      <div className="input-group">
                        <input
                          type="file"
                          id="userfile"
                          name="schoolPhoto"
                          className="form-control col-md-12 col-xs-12 userfile"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-2 mt-3">
                      <input type="submit" className="btn btn-primary mt-3" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default AddSchools;
