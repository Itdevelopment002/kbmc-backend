import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { Link } from "react-router-dom";

const AddFunctions = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      heading,
      description,
    };

    try {
      const response = await api.post("/functions", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        setHeading("");
        setDescription("");
        navigate("/functions");
      }
    } catch (error) {
      console.error("Error adding function:", error);
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
              <Link to="/functions">Functions</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Functions
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Functions</h4>
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
                          placeholder="Enter heading"
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label className="col-form-label col-lg-2">
                        Description<span className="text-danger">*</span>
                      </label>
                      <div className="col-md-4">
                        <div class="input-group mb-3">
                          <textarea
                            className="form-control form-control-md"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="2"
                            required
                          />
                        </div>
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

export default AddFunctions;
