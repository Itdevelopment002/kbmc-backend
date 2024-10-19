import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';

const data = [
  {
    id: 1,
    description: "The Maharashtra Right to Public Service Act, 2015 (English)",
  },
  {
    id: 2,
    description: "The Maharashtra Right to Public Service Act, 2015 (Marathi)",
  },
  {
    id: 3,
    description: "RTS GR",
  },
];

function RTS() {
  const [showEditHeadingModal, setShowEditHeadingModal] = useState(false);
  const [showEditPDFModal, setShowEditPDFModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [editHeading, setEditHeading] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPDFDescription, setEditPDFDescription] = useState('');
  const [editPDFFile, setEditPDFFile] = useState(null);

  const handleEditHeadingShow = (item) => {
    setCurrentItem(item);
    setEditHeading(item.heading); // Set heading for editing
    setEditDescription(item.description); // Set description for editing
    setShowEditHeadingModal(true);
  };

  const handleEditPDFShow = (item) => {
    setCurrentItem(item);
    setEditPDFDescription(item.description);
    setEditPDFFile(null); // Reset the file input
    setShowEditPDFModal(true);
  };

  const handleDeleteShow = (item) => {
    setCurrentItem(item);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    // Implement delete logic here
    console.log(`Deleting item with ID: ${currentItem.id}`);
    setShowDeleteModal(false);
  };

  const handleSaveHeadingChanges = () => {
    // Implement save logic here
    console.log(`Saving changes for item with ID: ${currentItem.id}, New Heading: ${editHeading}, New Description: ${editDescription}`);
    setShowEditHeadingModal(false);
  };

  const handleSavePDFChanges = () => {
    // Implement save logic for PDF changes here
    console.log(`Saving changes for PDF with ID: ${currentItem.id}, New Description: ${editPDFDescription}`);
    // Handle the new file as needed
    setShowEditPDFModal(false);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#.">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Right to Service
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Right to Service</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-end mb-3">
                      <Link
                        to="/Add_RTSDES"
                        className="btn btn-primary btn-rounded float-right"
                        style={{ borderRadius: '100px' }}
                      >
                        <i className="fa fa-plus"></i>+ Add RTS
                      </Link>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="5%">Sr. No.</th>
                          <th>Heading</th>
                          <th>Description</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>Right To Services Act, 2015</td>
                          <td>
                            The Maharashtra Right to Public Services Act, 2015
                            is enacted and is in force since 28.04.2015 to
                            ensure that notified services are provided to the
                            citizens in a transparent, speedy, and time-bound
                            manner by various Government Departments and Public
                            Authorities under the Government. Its objective is
                            to provide easy, prompt, and time-bound services to
                            the citizens. The Maharashtra State Commission for
                            Right to Public Service has been constituted under
                            the above Act to monitor, coordinate, control and
                            improve the public services being provided by the
                            Government.
                          </td>
                          <td>
                            <button
                              onClick={() => handleDeleteShow({ id: 1 })}
                              className="btn btn-danger btn-sm m-t-10 mx-1"
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => handleEditHeadingShow({ id: 1, heading: "Right To Services Act, 2015", description: "The Maharashtra Right to Public Services Act, 2015 is enacted..." })}
                              className="btn btn-success btn-sm m-t-20"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="row m-t-70">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title"></h4>
                    </div>
                    <div className="col-sm-8 col-9 text-end mb-3">
                      <Link
                        to="/Add_RTS"
                        className="btn btn-primary btn-rounded float-right"
                        style={{ borderRadius: '100px' }}
                      >
                        <i className="fa fa-plus"></i>+ Add PDF
                      </Link>
                    </div>
                  </div>

                  <div className="table-responsive m-t-10">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Description</th>
                          <th>Download PDF</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.description}</td>
                            <td>
                              <a href="#" style={{ color: 'red' }}>
                                <FaFilePdf size={35} />
                              </a>
                            </td>
                            <td>
                              <button
                                onClick={() => handleDeleteShow(item)}
                                className="btn btn-danger btn-sm m-t-10 mx-1"
                              >
                                Delete
                              </button>
                              <button
                                onClick={() => handleEditPDFShow(item)}
                                className="btn btn-success btn-sm m-t-10"
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>

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

          {/* Delete Modal */}
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4 className="text-center">Are you sure you want to delete this item?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={handleDeleteConfirm}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Edit Heading Modal */}
          <Modal show={showEditHeadingModal} onHide={() => setShowEditHeadingModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label>Heading</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editHeading}
                    onChange={(e) => setEditHeading(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    className="form-control"
                    value={editDescription}
                    onChange={(e) => setEditDescription(e.target.value)}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditHeadingModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveHeadingChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Edit PDF Modal */}
          <Modal show={showEditPDFModal} onHide={() => setShowEditPDFModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit PDF</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editPDFDescription}
                    onChange={(e) => setEditPDFDescription(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Upload PDF</label>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => setEditPDFFile(e.target.files[0])}
                    className="form-control"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditPDFModal(false)}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSavePDFChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default RTS;
