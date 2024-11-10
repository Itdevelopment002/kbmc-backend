import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import { useNavigate } from "react-router-dom";

const AddHistory = () => {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/history", { description });
      navigate("/history");
    } catch (error) {
      console.error("Error submitting description:", error);
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
              <Link to="/history">History</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add History
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add History</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label className="col-form-label col-md-2">
                        Description <span className="text-danger">*</span>
                      </label>
                      <div className="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="description"
                          value={description}
                          onChange={handleChange}
                          placeholder="Enter description"
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

export default AddHistory;
