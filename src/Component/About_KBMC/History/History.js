// ... (other imports)
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const HistoryPage = () => {
  // State for history and CO data
  const [historyData, setHistoryData] = useState([
    {
      id: 1,
      description: 'Kulgaon Badlapur city is just 55 km east from Mumbai...',
    },
  ]);

  const [coData, setCoData] = useState([
    {
      id: 1,
      image: 'assets/img/about/ceo.jpeg',
      name: 'Yogesh Godse',
      designation: 'Chief Officer',
      email: 'support@kbmc.gov.in',
    },
  ]);

  // State for modals
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [editData, setEditData] = useState({}); // Store all relevant fields for editing
  const [imagePreview, setImagePreview] = useState(''); // State for image preview

  // Handlers for modal actions
  const handleDelete = (id, type) => {
    if (type === 'history') {
      setHistoryData(historyData.filter((item) => item.id !== id));
    } else if (type === 'co') {
      setCoData(coData.filter((item) => item.id !== id));
    }
    closeModal();
  };

  const openEditModal = (item, type) => {
    setSelectedItem(item);
    setEditData(type === 'history' ? { description: item.description } : { ...item }); // Set all relevant fields for editing
    setImagePreview(type === 'co' ? item.image : ''); // Set initial image preview
    setModalType(type);
    setShowEditModal(true);
  };

  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false);
    setSelectedItem(null);
    setEditData({});
    setImagePreview(''); // Clear image preview
  };

  const handleSaveChanges = () => {
    if (modalType === 'history') {
      setHistoryData(
        historyData.map((item) =>
          item.id === selectedItem.id ? { ...item, description: editData.description } : item
        )
      );
    } else if (modalType === 'co') {
      setCoData(
        coData.map((item) =>
          item.id === selectedItem.id
            ? { ...item, name: editData.name, designation: editData.designation, email: editData.email, image: editData.image }
            : item
        )
      );
    }
    closeModal();
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the preview URL
        setEditData({ ...editData, image: reader.result }); // Update the editData with image data
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
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
                History and Chief Officer
              </li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">History</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-end mb-3">
                      <Link
                        to="/Add_history"
                        className="btn btn-primary btn-rounded float-right"
                        style={{ borderRadius: '100px' }}
                      >
                        <i className="fa fa-plus"></i> + Add History
                      </Link>
                    </div>
                  </div>

                  <div className="table-responsive">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Description</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {historyData.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.description}</td>
                            <td>
                              <button
                                onClick={() => openEditModal(item, 'history')}
                                className="btn btn-success btn-sm m-t-10 mx-1"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedItem(item);
                                  setShowDeleteModal(true);
                                }}
                                className="btn btn-danger btn-sm m-t-10"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                
                  <div className="row mt-4">
                    <div className="col-sm-4 col-3">
                      {/* <h4 className="page-title">Chief Officer</h4> */}
                    </div>
                    <div className="col-sm-8 col-9 text-end mb-3">
                      <Link
                        to="/Add_ceo"
                        className="btn btn-primary btn-rounded float-right"
                        style={{ borderRadius: '100px' }}
                      >
                        <i className="fa fa-plus"></i> + Add Chief Officer
                      </Link>
                    </div>
                  </div>

                  <div className="table-responsive m-t-10">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>CO Image</th>
                          <th>CO Name</th>
                          <th>Designation</th>
                          <th>Mail Id</th>
                          <th width="15%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {coData.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td><img width="50px" src={item.image} alt="ceo-img" /></td>
                            <td>{item.name}</td>
                            <td>{item.designation}</td>
                            <td>{item.email}</td>
                            <td>
                              <button
                                onClick={() => openEditModal(item, 'co')}
                                className="btn btn-success btn-sm m-t-10 mx-1"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedItem(item);
                                  setShowDeleteModal(true);
                                }}
                                className="btn btn-danger btn-sm m-t-10"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination for Chief Officer */}
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
        </div>

        {/* Edit Modal */}
        <Modal show={showEditModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit {modalType === 'history' ? 'History' : 'Chief Officer'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalType === 'history' ? (
              <textarea
                className="form-control"
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
              />
            ) : (
              <div>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Name"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Designation"
                  value={editData.designation}
                  onChange={(e) => setEditData({ ...editData, designation: e.target.value })}
                />
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal show={showDeleteModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this {modalType === 'history' ? 'history' : 'chief officer'}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => handleDelete(selectedItem.id, modalType)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default HistoryPage;
