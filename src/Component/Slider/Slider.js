import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Slider = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedSlider, setSelectedSlider] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file

    const handleDelete = (slider) => {
        setSelectedSlider(slider);
        setShowDeleteModal(true);
    };

    const handleEdit = (slider) => {
        setSelectedSlider(slider);
        setShowEditModal(true);
        setSelectedFile(null); // Reset the file selection on edit
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedSlider(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedSlider(null);
        setSelectedFile(null); // Reset file selection on close
    };

    const handleSaveEdit = () => {
        // Handle save edit logic here, e.g., upload selectedFile
        setShowEditModal(false);
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        // Optionally update the slider image URL preview
        if (e.target.files[0]) {
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setSelectedSlider({ ...selectedSlider, image: imageUrl });
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Slider</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Slider</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-right text-end mb-3">
                                        <Link to="/add_slider" className="btn btn-primary btn-rounded float-right" style={{ borderRadius: '100px' }}>
                                            <i className="fa fa-plus"></i>+ Add Slider
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Image Name</th>
                                                <th>Slider Image</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                { id: 1, name: 'Slider One', image: 'assets/img/slider1.jpg' },
                                                { id: 2, name: 'Slider Two', image: 'assets/img/slider1.jpg' },
                                                { id: 3, name: 'Slider Three', image: 'assets/img/slider1.jpg' }
                                            ].map((slider, index) => (
                                                <tr key={slider.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{slider.name}</td>
                                                    <td><img width="200px" src={slider.image} alt={`slider${index + 1}`} /></td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm m-t-10" 
                                                            onClick={() => handleDelete(slider)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button 
                                                            className="btn btn-success btn-sm m-t-10 mx-1" 
                                                            onClick={() => handleEdit(slider)}
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
                        <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete {selectedSlider?.name}?</h4>
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
                {selectedSlider && (
                    <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                        <Modal.Header>
                            <h5 className="modal-title">Edit {selectedSlider.name}</h5>
                            <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Image Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedSlider.name}
                                        onChange={(e) =>
                                            setSelectedSlider({ ...selectedSlider, name: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image URL</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={selectedSlider.image}
                                        onChange={(e) =>
                                            setSelectedSlider({ ...selectedSlider, image: e.target.value })
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

export default Slider;
