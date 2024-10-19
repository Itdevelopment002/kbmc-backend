import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Gardens = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedGarden, setSelectedGarden] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

    const gardensData = [
        { id: 1, name: 'Ambernath Bunglow Society Garden', images: ['assets/img/school/img1.jpg', 'assets/img/school/img1.jpg', 'assets/img/school/img1.jpg'] },
        { id: 2, name: 'Badlapur Gymkhana', images: ['assets/img/school/img1.jpg', 'assets/img/school/img1.jpg', 'assets/img/school/img1.jpg'] },
    ];

    const handleDelete = (garden) => {
        setSelectedGarden(garden);
        setShowDeleteModal(true);
    };

    const handleEdit = (garden) => {
        setSelectedGarden(garden);
        setShowEditModal(true);
        setSelectedFile(null); // Reset the file selection on edit
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedGarden(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedGarden(null);
        setSelectedFile(null); // Reset file selection on close
    };

    const handleSaveEdit = () => {
        // Handle save edit logic here, e.g., upload selectedFile
        setShowEditModal(false);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">City Profile</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Gardens</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Gardens</h4>
                                    </div>
                                    <div className="text-end mb-3" >
        <Link to="/add-gardens">
          <button className="btn btn-primary" style={{borderRadius:"100px"}}>+ Add Gardens</button>
        </Link>
      </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Garden Names</th>
                                                <th>Garden Images</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {gardensData.map((garden, index) => (
                                                <tr key={garden.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{garden.name}</td>
                                                    <td>
                                                        {garden.images.map((image, idx) => (
                                                            <img key={idx} width="50px" src={image} alt={`Garden ${index + 1}`} />
                                                        ))}
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-danger btn-sm m-t-10" onClick={() => handleDelete(garden)}>Delete</button>
                                                        <button className="btn btn-success btn-sm m-t-10 mx-2" onClick={() => handleEdit(garden)}>Edit</button>
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

                {/* Pagination */}
                <div>
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only"></span></a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </div>

                {/* Delete Modal */}
                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                    <Modal.Body>
                        <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete {selectedGarden?.name}?</h4>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'center' }}>
                        <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
                        <Button variant="danger" onClick={() => {
                            // Add delete logic here
                            handleCloseDeleteModal();
                        }}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Modal */}
                {selectedGarden && (
                    <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                        <Modal.Header>
                            <h5 className="modal-title">Edit {selectedGarden.name}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Garden Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedGarden.name}
                                        onChange={(e) =>
                                            setSelectedGarden({ ...selectedGarden, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Upload New Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    {selectedFile && (
                                        <div className="mt-2">
                                            <img 
                                                src={URL.createObjectURL(selectedFile)} 
                                                alt="Selected" 
                                                width="200" 
                                                className="img-thumbnail" 
                                            />
                                        </div>
                                    )}
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEditModal}>Close</Button>
                            <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Gardens;
