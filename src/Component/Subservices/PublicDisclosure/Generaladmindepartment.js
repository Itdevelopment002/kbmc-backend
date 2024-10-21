import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Modal, Button } from 'react-bootstrap'; // For using the Bootstrap modal

function Generaladmindepartment() {
  const [headings, setHeadings] = useState([
    { id: 1, title: 'General Meeting and Standing Committee Meeting Resolutions' },
    { id: 2, title: 'Former mayor' },
    { id: 3, title: 'Publicity under Section 4 of Right to Information' }
  ]);

  const [newHeadings, setNewHeadings] = useState(['']);
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);



  const handleAddRow = () => {
    setNewHeadings([...newHeadings, '']);
  };

  const handleInputChange = (index, value) => {
    const updatedHeadings = [...newHeadings];
    updatedHeadings[index] = value;
    setNewHeadings(updatedHeadings);
  };

  const handleSaveHeadings = () => {
    const newHeadingsData = newHeadings.filter(h => h);
    const newEntries = newHeadingsData.map((heading, index) => ({
      id: headings.length + index + 1,
      title: heading
    }));
    setHeadings([...headings, ...newEntries]);
    setNewHeadings(['']);
  };

  const handleEdit = (id, title) => {
    setEditingId(id);
    setEditingTitle(title);
    setSelectedService({ heading: title }); // Store selected item for edit
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    setHeadings(headings.map(h => (h.id === editingId ? { ...h, title: editingTitle } : h)));
    setEditingId(null);
    setEditingTitle('');
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setHeadings(headings.filter(h => h.id !== id));
    setShowDeleteModal(false);
  };



  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.php">Home</a></li>
            <li className="breadcrumb-item"><a href="/PublicDisclosure">General Admin Department</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add General Admin Department</li>
          </ol>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Add General Admin Department</h4>
                    </div>
                  </div>
                  <hr />
                  <form onSubmit={(e) => { e.preventDefault(); handleSaveHeadings(); }}>
                    {newHeadings.map((heading, index) => (
                      <div className="form-group row" key={index}>
                        <label className="col-form-label col-md-2">Add Heading</label>
                        <div className="col-md-4 d-flex align-items-center"> {/* Use flexbox for alignment */}
                          <input
                            type="text"
                            className="form-control form-control-sm "
                            value={heading}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            placeholder="Enter heading"
                          />
                          <button
                            type="button"
                            className="btn btn-success btn-sm mt-10"
                            style={{
                              marginLeft: '10px',
                              padding: '5px 10px',
                              fontSize: '12px',
                              borderRadius: '5px',
                              backgroundColor: '#28a745',
                              color: 'white',
                              width: '110px'
                            }}
                            onClick={handleAddRow}
                          >
                            Add Row
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="col-md-4 mt-3">
                      <button
                        type="submit"
                        className="btn btn-primary btn-sm ml-2"
                        style={{
                          padding: '5px 15px',
                          fontSize: '14px',
                          borderRadius: '5px',

                        }}
                      >
                        Save
                      </button>
                    </div>
                  </form>

                  <div className="table-responsive mt-4">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Departments Heading</th>
                          <th width="20%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {headings.map((heading) => (
                          <tr key={heading.id}>
                            <td>{heading.id < 10 ? `0${heading.id}` : heading.id}</td>
                            <td>{heading.title}</td>
                            <td>
                              <Link
                                to="/Add_gernaldepyear" // Update this to your target path
                                className="btn btn-primary btn-sm m-t-10"
                                style={{ marginRight: '10px', borderRadius: '5px' }}
                              >
                                Add
                              </Link>
                              <button
                                className="btn btn-success btn-sm m-t-10"
                                onClick={() => handleEdit(heading.id, heading.title)}
                                style={{ marginRight: '10px', borderRadius: '5px' }}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger btn-sm m-t-10"
                                onClick={() => setShowDeleteModal(true)} // Trigger delete modal
                                style={{ borderRadius: '5px' }}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Delete Modal */}
                  <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                    <Modal.Body>
                      <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete this item?</h4>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'center' }}>
                      <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
                      <Button variant="danger" onClick={handleDelete}>Delete</Button>
                    </Modal.Footer>
                  </Modal>

                  {/* Edit Modal */}
                  {selectedService && (
                    <div className={`modal fade ${showEditModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Edit Service</h5>
                            <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="mb-3">
                                <label className="form-label">Department Heading</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={selectedService.heading}
                                  onChange={(e) =>
                                    setSelectedService({ ...selectedService, heading: e.target.value })
                                  }
                                />
                              </div>

                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={handleCloseEditModal}>
                              Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                              Save Changes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Generaladmindepartment;
