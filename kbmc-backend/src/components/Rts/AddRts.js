import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const AddRts = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!heading || !description) {
      return;
    }

    // Send data to the API
    try {
      await api.post("/righttoservices", {
        heading,
        description,
      });
      setHeading("");
      setDescription("");
      navigate("/rts");
    } catch (error) {
      console.error("Error adding Right to Service:", error);
    }
  };

  return (
    <div>
      <div class="page-wrapper">
        <div class="content">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="/rts">Right to Service</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Right to Service
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Right to Service</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        Heading <span class="text-danger">*</span>
                      </label>
                      <div class="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder=""
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        Description <span class="text-danger">*</span>
                      </label>
                      <div class="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder=""
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
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

export default AddRts;
