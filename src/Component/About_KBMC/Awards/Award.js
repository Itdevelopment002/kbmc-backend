import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const Award = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedAward, setSelectedAward] = useState(null);
    const [showEditAwardModal, setShowEditAwardModal] = useState(false);
    const [showEditImageModal, setShowEditImageModal] = useState(false);
    const [editAwardData, setEditAwardData] = useState({ heading: '', description: '' });
    const [editImageData, setEditImageData] = useState({ id: null, imgSrc: '' });

    const awards = [
        {
            id: 1,
            heading: "Awards received at National / State level",
            description: "In Swachh Bharat Abhiyan Swachh Survekshan 2021, Kulgaon Badlapur Municipal Council is ranked 14th at the national level and 2nd at the state level in the group of Amrit Cities. This is the best performance of the city till date in Swachh Survey.",
        },
    ];

    const awardImages = [
        {
            id: 1,
            imgSrc: "assets/img/user.jpg",
        },
        {
            id: 2,
            imgSrc: "assets/img/user.jpg",
        },
    ];

    const handleDeleteClick = (awardId) => {
        setSelectedAward(awardId);
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = () => {
        console.log(`Deleting award with ID: ${selectedAward}`);
        setShowDeleteModal(false);
        setSelectedAward(null);
        // Add logic to delete the award here
    };

    const handleEditAwardClick = (award) => {
        setEditAwardData({ heading: award.heading, description: award.description });
        setShowEditAwardModal(true);
    };

    const handleEditImageClick = (awardImg) => {
        setEditImageData({ id: awardImg.id, imgSrc: awardImg.imgSrc });
        setShowEditImageModal(true);
    };

    const handleUpdateAward = () => {
        console.log('Updated Award:', editAwardData);
        setShowEditAwardModal(false);
    };

    const handleUpdateImage = () => {
        console.log('Updated Image:', editImageData);
        setShowEditImageModal(false);
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">About KBMC</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Awards</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Awards</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end mb-3">
                                        <Link to="/Add_award" className="btn btn-primary btn-rounded float-right" style={{ borderRadius: '100px' }}>
                                            <i className="fa fa-plus"></i> + Add Award
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Heading</th>
                                                <th>Description</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {awards.map((award, index) => (
                                                <tr key={award.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{award.heading}</td>
                                                    <td>{award.description}</td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm m-t-10" 
                                                            onClick={() => handleDeleteClick(award.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button 
                                                            className="btn btn-success btn-sm m-t-10 mx-1" 
                                                            onClick={() => handleEditAwardClick(award)}
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive m-t-50">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Award Image</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {awardImages.map((awardImg, index) => (
                                                <tr key={awardImg.id}>
                                                    <td>{index + 1}</td>
                                                    <td><img width="50px" src={awardImg.imgSrc} alt="award-img" /></td>
                                                    <td>
                                                        <button 
                                                            className="btn btn-danger btn-sm m-t-10" 
                                                            onClick={() => handleDeleteClick(awardImg.id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button 
                                                            className="btn btn-success btn-sm m-t-10 mx-1" 
                                                            onClick={() => handleEditImageClick(awardImg)}
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

                {/* Pagination */}
                <div>
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

                {/* Delete Modal */}
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                    <Modal.Body>
                        <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete this item?</h4>
                    </Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'center' }}>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Close</Button>
                        <Button variant="danger" onClick={handleDeleteConfirm}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Award Modal */}
                <Modal show={showEditAwardModal} onHide={() => setShowEditAwardModal(false)} centered>
                    <Modal.Header>
                        <h5 className="modal-title">Edit Award</h5>
                        <Button variant="close" onClick={() => setShowEditAwardModal(false)}>
                            <span></span>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Heading</label>
                            <input
                                type="text"
                                className="form-control"
                                value={editAwardData.heading}
                                onChange={(e) => setEditAwardData({ ...editAwardData, heading: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                className="form-control"
                                value={editAwardData.description}
                                onChange={(e) => setEditAwardData({ ...editAwardData, description: e.target.value })}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditAwardModal(false)}>Close</Button>
                        <Button variant="primary" onClick={handleUpdateAward}>Update</Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Image Modal */}
                <Modal show={showEditImageModal} onHide={() => setShowEditImageModal(false)} centered>
                    <Modal.Header>
                        <h5 className="modal-title">Edit Award Image</h5>
                        <Button variant="close" onClick={() => setShowEditImageModal(false)}>
                            <span></span>
                        </Button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Image Source</label>
                            <input
                                type="text"
                                className="form-control"
                                value={editImageData.imgSrc}
                                onChange={(e) => setEditImageData({ ...editImageData, imgSrc: e.target.value })}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditImageModal(false)}>Close</Button>
                        <Button variant="primary" onClick={handleUpdateImage}>Update</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Award;
