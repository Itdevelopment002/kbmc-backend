import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

const AddPreviousPresidents = () => {
  const [presidentName, setPresidentName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [presidentImage, setPresidentImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedStartDate = startDate ? formatDate(startDate) : "";
    const formattedEndDate = endDate ? formatDate(endDate) : "";

    const formData = new FormData();
    formData.append("presidentName", presidentName);
    formData.append("startDate", formattedStartDate);
    formData.append("endDate", formattedEndDate);
    formData.append("presidentImage", presidentImage);

    try {
      const response = await api.post("/presidents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setPresidentName("");
      setStartDate("");
      setEndDate("");
      setPresidentImage(null);

      document.getElementById("userfile").value = null;
      navigate("/previous-presidents");
    } catch (error) {
      console.error(error.response?.data?.message || "Error adding president");
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleFileChange = (e) => {
    setPresidentImage(e.target.files[0]);
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
              <Link to="/previous-presidents">Previous Presidents</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Add President
            </li>
          </ol>
          <div class="row">
            <div class="col-lg-12">
              <div class="card-box">
                <div class="card-block">
                  <div class="row">
                    <div class="col-sm-4 col-3">
                      <h4 class="page-title">Add President</h4>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        President Name <span class="text-danger">*</span>
                      </label>
                      <div class="col-md-4">
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder="Enter president's Name"
                          value={presidentName}
                          onChange={(e) => setPresidentName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        Start Date <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon col-md-4">
                        <Flatpickr
                          id="startDatePicker"
                          className="flatpickr-input form-control form-control-md"
                          placeholder="Select Start Date"
                          value={startDate}
                          onChange={(date) => setStartDate(date[0])}
                          options={{
                            dateFormat: "d-m-Y",
                            monthSelectorType: "dropdown",
                            prevArrow:
                              '<svg><path d="M10 5L5 10L10 15"></path></svg>',
                            nextArrow:
                              '<svg><path d="M5 5L10 10L5 15"></path></svg>',
                          }}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-md-2">
                        End Date <span class="text-danger">*</span>
                      </label>
                      <div class="cal-icon col-md-4">
                        <Flatpickr
                          id="endDatePicker"
                          className="flatpickr-input form-control form-control-md"
                          placeholder="Select End Date"
                          value={endDate}
                          onChange={(date) => setEndDate(date[0])}
                          options={{
                            dateFormat: "d-m-Y",
                            monthSelectorType: "dropdown",
                            prevArrow:
                              '<svg><path d="M10 5L5 10L10 15"></path></svg>',
                            nextArrow:
                              '<svg><path d="M5 5L10 10L5 15"></path></svg>',
                          }}
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label class="col-form-label col-lg-2">
                        Upload President Image
                      </label>
                      <div class="col-md-4">
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            id="userfile"
                            name="userfile"
                            className="form-control form-control-md"
                            onChange={handleFileChange}
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

export default AddPreviousPresidents;
