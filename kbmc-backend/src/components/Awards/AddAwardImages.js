import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddAwardImages = () => {
  const [formData, setFormData] = useState({
    awardImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      awardImage: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.awardImage) {
      return;
    }

    const data = new FormData();
    data.append("awardImage", formData.awardImage);

    try {
      const response = await api.post("/award-images", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/awards");
    } catch (error) {
      console.error("Image upload failed. Please try again.");
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
              Add Award Image
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add Award Image</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">
                        Upload Award Image
                      </label>
                      <div class="col-md-4">
                        <input
                          type="file"
                          id="awardImage"
                          name="awardImage"
                          className="form-control form-control-md"
                          onChange={handleChange}
                          accept="image/*"
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

export default AddAwardImages;
