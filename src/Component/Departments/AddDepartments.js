import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddDepartments = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [hodName, setHodName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log("Department Name:", departmentName);
    console.log("HOD Name:", hodName);
    setDepartmentName("");
    setHodName("");
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/departments">Departments</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Departments
          </li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Departments</h4>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Department Name <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-4 mb-3">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-form-label col-md-3">
                      Name of HOD <span className="text-danger">*</span>
                    </label>
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={hodName}
                        onChange={(e) => setHodName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDepartments;
