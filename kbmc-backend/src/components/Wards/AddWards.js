import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const AddWards = () => {
  const [wardNo, setWardNo] = useState("");
  const [wardName, setWardName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/wards", {
        ward_no: wardNo,
        ward_name: wardName,
      });
      setWardNo("");
      setWardName("");
      navigate("/wards");
    } catch (err) {
      console.error("Error adding ward:", err);
    }
  };
  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="#.">About KBMC</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="/wards">Wards</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Wards
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Wards</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label className="col-form-label col-md-2">
                        Ward No. <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder=""
                          value={wardNo}
                          onChange={(e) => setWardNo(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-form-label col-md-2">
                        Ward Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder=""
                          value={wardName}
                          onChange={(e) => setWardName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <input
                      type="submit"
                      class="btn btn-primary btn-sm"
                      value="Submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWards;
