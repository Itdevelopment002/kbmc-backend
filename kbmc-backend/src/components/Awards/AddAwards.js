import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const AddAwards = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/awards",
        {
          heading,
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status !== 201) {
        throw new Error("Failed to add award");
      }
      setHeading("");
      setDescription("");
      navigate("/awards");
    } catch (error) {
      console.error("Error:", error);
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
              <Link to="/awards">Awards</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add Awards
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Awards</h4>
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
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                          placeholder="Enter award heading"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Description</label>
                        <div className="col-md-4">
                          <textarea
                            className="form-control form-control-md"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter a brief description"
                            rows="3"
                            style={{ resize: "none" }}
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

export default AddAwards;
