import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Photogallery = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

    const handleDelete = (photo) => {
        setSelectedPhoto(photo);
        setShowDeleteModal(true);
    };

    const handleEdit = (photo) => {
        setSelectedPhoto(photo);
        setShowEditModal(true);
        setSelectedFile(null); // Reset file selection on edit
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedPhoto(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedPhoto(null);
        setSelectedFile(null); // Reset file selection on close
    };

    const handleDeleteConfirm = () => {
        // Add delete logic here
        console.log(`Deleted ${selectedPhoto.name}`);
        handleCloseDeleteModal(); 
    };

    const handleSaveEdit = () => {
        // Handle save edit logic here, e.g., upload selectedFile
        console.log(`Saved changes for ${selectedPhoto.name}`);
        handleCloseEditModal();
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        // Optionally update the photo image URL preview
        if (e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setSelectedPhoto({ ...selectedPhoto, image: imageUrl });
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Photo Gallery</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Photo Gallery</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end mb-3">
                                        <Link to="/Add_photogallery" className="btn btn-primary btn-rounded float-right" style={{ borderRadius: '100px' }}>
                                            <i className="fa fa-plus"></i> + Add Photos
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Photo Gallery Name</th>
                                                <th>Photo Gallery Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 1, name: 'Photo Gallery One', image: 'assets/img/slider1.jpg' },
                                                { id: 2, name: 'Photo Gallery Two', image: 'assets/img/slider1.jpg' },
                                                { id: 3, name: 'Photo Gallery Three', image: 'assets/img/slider1.jpg' }
                                            ].map((photo, index) => (
                                                <tr key={photo.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{photo.name}</td>
                                                    <td><img width="200px" src={photo.image} alt={`gallery${index + 1}`} /></td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm m-t-10" 
                                                            onClick={() => handleDelete(photo)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button 
                                                            className="btn btn-success btn-sm m-t-10 mx-1" 
                                                            onClick={() => handleEdit(photo)}
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

                {/* Delete Modal */}
                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                    <Modal.Body>
                        <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete {selectedPhoto?.name}?</h4>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'center' }}>
                        <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
                        <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Modal */}
                {selectedPhoto && (
                    <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                        <Modal.Header>
                            <h5 className="modal-title">Edit {selectedPhoto.name}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Gallery Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedPhoto.name}
                                        onChange={(e) =>
                                            setSelectedPhoto({ ...selectedPhoto, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedPhoto.image}
                                        onChange={(e) =>
                                            setSelectedPhoto({ ...selectedPhoto, image: e.target.value })
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
                            <Button variant="secondary" onClick={handleCloseEditModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleSaveEdit}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export default Photogallery;
