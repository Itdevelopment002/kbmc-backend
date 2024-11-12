import React, { useState, useEffect } from "react";
import api, { baseURL } from "../api";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PreviousPresidents = () => {
  const [presidents, setPresidents] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPresidentId, setSelectedPresidentId] = useState(null);
  const [editData, setEditData] = useState({
    president_name: "",
    start_date: "",
    end_date: "",
    image_path: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const presidentsPerPage = 10;

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    return () => {
      lightbox.destroy();
    };
  }, [presidents]);

  const fetchPresidents = async () => {
    try {
      const response = await api.get("/presidents");
      setPresidents(response.data);
    } catch (error) {
      toast.error("Failed to fetch presidents.");
    }
  };

  useEffect(() => {
    fetchPresidents();
  }, []);

  const handleDeleteClick = (id) => {
    setSelectedPresidentId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    api
      .delete(`/presidents/${selectedPresidentId}`)
      .then(() => {
        setPresidents(
          presidents.filter((president) => president.id !== selectedPresidentId)
        );
        setShowDeleteModal(false);
        toast.success("President deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting President:", error);
        toast.error("Failed to delete president.");
      });
  };

  const handleEditClick = (id) => {
    const presidentToEdit = presidents.find((president) => president.id === id);
    setEditData(presidentToEdit);
    setSelectedPresidentId(id);
    setShowEditModal(true);
    setImageFile(null);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formattedStartDate = editData.start_date
      ? formatDate(editData.start_date)
      : "";
    const formattedEndDate = editData.end_date
      ? formatDate(editData.end_date)
      : "";

    const formData = new FormData();
    formData.append("president_name", editData.president_name);
    formData.append("start_date", formattedStartDate);
    formData.append("end_date", formattedEndDate);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      await api.put(`/presidents/${selectedPresidentId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("President updated successfully!");
      fetchPresidents();
    } catch (error) {
      toast.error("Failed to update president.");
    } finally {
      setShowEditModal(false);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    // Show a preview of the image
    if (file) {
      setEditData((prevData) => ({
        ...prevData,
        image_path: URL.createObjectURL(file),
      }));
    }
  };

  const indexOfLastPresident = currentPage * presidentsPerPage;
  const indexOfFirstPresident = indexOfLastPresident - presidentsPerPage;
  const currentPresidents = presidents.slice(
    indexOfFirstPresident,
    indexOfLastPresident
  );

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#.">About KBMC</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Previous Presidents
              </li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Previous Presidents</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right m-b-20">
                      <Link
                        to="/add-previous-presidents"
                        className="btn btn-primary btn-rounded float-right"
                      >
                        <i className="fa fa-plus"></i> Add President
                      </Link>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>President Name</th>
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Image</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPresidents.length > 0 ? (
                          currentPresidents.map((president, index) => (
                            <tr key={president.id}>
                              <td>
                                {index +
                                  1 +
                                  (currentPage - 1) * presidentsPerPage}
                              </td>
                              <td>{president.president_name}</td>
                              <td>
                                {new Date(president.start_date)
                                  .toLocaleDateString("en-GB")
                                  .replace(/\//g, "-")}
                              </td>
                              <td>
                                {new Date(president.end_date)
                                  .toLocaleDateString("en-GB")
                                  .replace(/\//g, "-")}
                              </td>
                              <td>
                                <Link
                                  to={`${baseURL}${president.image_path}`}
                                  className="glightbox"
                                  data-gallery="chief-images"
                                >
                                  <img
                                    width="50px"
                                    src={`${baseURL}${president.image_path}`}
                                    alt={`chief${index + 1}`}
                                  />
                                </Link>
                              </td>
                              <td>
                                <button
                                  className="btn btn-success btn-sm m-t-10"
                                  onClick={() => handleEditClick(president.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-danger btn-sm m-t-10"
                                  onClick={() =>
                                    handleDeleteClick(president.id)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>
                              No President available
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from(
                { length: Math.ceil(presidents.length / presidentsPerPage) },
                (_, i) => (
                  <li
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    key={i}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
              <li
                className={`page-item ${
                  currentPage ===
                  Math.ceil(presidents.length / presidentsPerPage)
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>

          {showEditModal && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit President</h5>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleEditSubmit}>
                      <div className="mb-3">
                        <label htmlFor="offcierName" className="form-label">
                          President Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          name="president_name"
                          value={editData.president_name}
                          onChange={handleFormChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="startDate" className="form-label">
                          Start Date
                        </label>
                        <Flatpickr
                          value={
                            editData.start_date
                              ? new Date(editData.start_date)
                              : ""
                          }
                          onChange={(date) =>
                            handleFormChange({
                              target: { name: "start_date", value: date[0] },
                            })
                          }
                          className="form-control"
                          options={{ dateFormat: "d-m-Y" }}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="endDate" className="form-label">
                          End Date
                        </label>
                        <Flatpickr
                          value={
                            editData.end_date ? new Date(editData.end_date) : ""
                          }
                          onChange={(date) =>
                            handleFormChange({
                              target: { name: "end_date", value: date[0] },
                            })
                          }
                          className="form-control"
                          options={{ dateFormat: "d-m-Y" }}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="uploadImage" className="form-label">
                          Upload President Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          onChange={handleImageChange}
                        />
                      </div>

                      <div className="mt-3">
                        {imageFile ? (
                          <img
                            src={URL.createObjectURL(imageFile)}
                            alt="Preview"
                            width="100"
                          />
                        ) : (
                          editData.image_path && (
                            <img
                              src={`${baseURL}${editData.image_path}`}
                              alt="Current"
                              width="100"
                            />
                          )
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setShowEditModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm"
                      onClick={handleEditSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showDeleteModal && (
            <div
              className="modal fade show"
              style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    Are you sure you want to delete this entry?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setShowDeleteModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={confirmDelete}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PreviousPresidents;
