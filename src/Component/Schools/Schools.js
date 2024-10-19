import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const School = () => {
  const schools = [
    { id: 1, name: "KBMC School No. 1", address: "Kulgaon", medium: "Marathi" },
    { id: 2, name: "KBMC School No. 2", address: "Kulgaon", medium: "Urdu" },
  ];

  const schoolPhotos = new Array(12).fill("assets/img/school/img1.jpg");

  return (
    <div className="page-wrapper">
      <div className="content">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#.">City Profile</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Schools
            </li>
          </ol>
        </nav>

        {/* School Table Section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Schools</h4>
                  </div>
                  <div className="col-sm-8 text-end m-b-20">
                                        <Link to="/add-schools" className="btn btn-primary btn-rounded float-right mb-2" style={{ borderRadius: "100px" }}>
                                            <i className="fa fa-plus"></i> + Add Schools
                                        </Link>
                                    </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>School Names</th>
                        <th>Address</th>
                        <th>Medium</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school, index) => (
                        <tr key={school.id}>
                          <td>{index + 1}</td>
                          <td>{school.name}</td>
                          <td>{school.address}</td>
                          <td>{school.medium}</td>
                          <td>
                            <button className="btn btn-danger btn-sm m-t-10">
                              Delete
                            </button>
                            <button className="btn btn-success btn-sm m-t-10 mx-2">
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* School Photos Section */}
              <div className="card-block mt-5">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">School Photos</h4>
                  </div>
                  <div className="col-sm-8 col-9 text-end m-b-20">
                    <a
                      href="add-schools.php"
                      className="btn btn-primary btn-rounded float-right mb-3"
                      style={{ borderRadius: "100px" }}
                    >
                      <i className="fa fa-plus"></i>+ Add Photos
                    </a>
                  </div>
                </div>

                <div className="row">
                  {schoolPhotos.map((photo, index) => (
                    <div
                      key={index}
                      className="col-sm-2 col-4 text-center"
                      style={{
                        padding: "15px", // Adjusted padding for spacing
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid #ddd", // Border around each photo
                          borderRadius: "5px", // Rounded corners
                          padding: "10px", // Padding inside the border
                          textAlign: "center", // Center align text
                        }}
                      >
                        <img width="120px" src={photo} alt="School-img" />
                        <br />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "10px",
                          }}
                        >
                          <button className="btn btn-danger btn-sm">
                            <FaTrash />
                          </button>
                          <button className="btn btn-success btn-sm mx-1">
                            <FaEdit />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only"></span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>

        {/* Modals */}
        <div
          className="modal fade text-center mt-3"
          id="editModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h4>Edit School Photos</h4>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        id="userfile"
                        name="userfile"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer text-center">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default School;
