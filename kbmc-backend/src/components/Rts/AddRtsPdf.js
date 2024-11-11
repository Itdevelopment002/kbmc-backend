import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const AddRtsPdf = ()=> {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("description", description);
    formData.append("userfile", file);

    try {
      const response = await api.post("/rts_table", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      setDescription("");
      setFile(null);
      navigate("/rts");
    } catch (error) {
      console.error("Error uploading Right to Service:", error.response.data);
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
              Add Right to Service Pdf
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Right to Service Pdf</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        Description <span class="text-danger">*</span>
                      </label>
                      <div class="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder="Enter description"
                          value={description} // Change here
                          onChange={(e) => setDescription(e.target.value)} // Change here
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">Upload PDF</label>
                      <div class="col-md-4">
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            id="userfile"
                            name="userfile"
                            className="form-control form-control-md"
                            onChange={handleFileChange}
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
}

export default AddRtsPdf;
