import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa'; // PDF icon

const Add_gernaldepyear = () => {
  const [year, setYear] = useState('');
  const [meetingType, setMeetingType] = useState('General Meeting');
  const [pdfHeading, setPdfHeading] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [editYear, setEditYear] = useState('');
  const [editMeetingType, setEditMeetingType] = useState('General Meeting');
  const [editPdfHeading, setEditPdfHeading] = useState('');
  const [editPdfFile, setEditPdfFile] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Handle edit submission
    setShowEditModal(false);
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.php">Home</a></li>
          <li className="breadcrumb-item"><a href="/GeneralDepartment">Add General Admin Department</a></li>
          <li className="breadcrumb-item active" aria-current="page">Add Year</li>
        </ol>

        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Add Year</h4>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Enter Year</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Select Meeting</label>
                        <div className="custom-dropdown position-relative">
                          <select
                            className="form-select mt-2" // Bootstrap 5's select class automatically includes a dropdown arrow
                            value={meetingType}
                            onChange={(e) => setMeetingType(e.target.value)}
                          >
                            <option>General Meeting</option>
                            <option>Standing Committee Meeting</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label>PDF Heading</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          value={pdfHeading}
                          onChange={(e) => setPdfHeading(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <label>Upload PDF</label>
                        <input
                          type="file"
                          className="form-control mt-2"
                          onChange={(e) => setPdfFile(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <div className="col-md-2 my-2">
                      <input type="submit" className="btn btn-primary" value="Submit" />
                    </div>
                  </div>
                </form>

                <hr />

                <div className="table-responsive mt-4">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Year</th>
                        <th>Meeting Type</th>
                        <th>PDF Heading</th>
                        <th>PDF File</th>
                        <th width="20%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td>Year 2021 - 2022</td>
                        <td>Standing Committee</td>
                        <td>Prashaskiy Tharav April 2023</td>
                        <td>
                          <a href="#">
                            <FaFilePdf style={{ color: 'red' }} size={35} /> {/* Set PDF icon color to red */}
                          </a>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm m-t-10 mx-1" onClick={() => setShowEditModal(true)}>Edit</button>
                          <button className="btn btn-danger btn-sm m-t-10" onClick={() => setShowDeleteModal(true)}>Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>Year 2021 - 2022</td>
                        <td>General Meeting</td>
                        <td>General Meeting April 2023</td>
                        <td>
                          <a href="#">
                            <FaFilePdf style={{ color: 'red' }} size={35} /> {/* Set PDF icon color to red */}
                          </a>
                        </td>
                        <td>
                          <button className="btn btn-success btn-sm m-t-10 mx-1" onClick={() => setShowEditModal(true)}>Edit</button>
                          <button className="btn btn-danger btn-sm m-t-10" onClick={() => setShowDeleteModal(true)}>Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">2 <span className="sr-only"></span></a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit Modal */}
        {showEditModal && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body text-left">
                  <h4>Edit Heading</h4>
                  <form onSubmit={handleEditSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Enter Year</label>
                          <input
                            type="text"
                            className="form-control"
                            value={editYear}
                            onChange={(e) => setEditYear(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 my-2">
                        <div className="form-group">
                          <label>Select Meeting</label>
                          <select
                            className="form-control"
                            value={editMeetingType}
                            onChange={(e) => setEditMeetingType(e.target.value)}
                          >
                            <option>General Meeting</option>
                            <option>Standing Committee Meeting</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>PDF Heading</label>
                          <input
                            type="text"
                            className="form-control"
                            value={editPdfHeading}
                            onChange={(e) => setEditPdfHeading(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Upload PDF</label>
                          <input
                            type="file"
                            className="form-control"
                            onChange={(e) => setEditPdfFile(e.target.files[0])}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-3">
                      <button type="submit" className="btn btn-primary mx-1">Save changes</button>
                      <button type="button" className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Modal */}
        {showDeleteModal && (
          <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body text-left">
                  <h4>Are you sure you want to delete this item?</h4>
                  <div className="col-md-12 text-center">
                    <button className="btn btn-danger mx-1" onClick={() => setShowDeleteModal(false)}>Delete</button>
                    <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Add_gernaldepyear;
