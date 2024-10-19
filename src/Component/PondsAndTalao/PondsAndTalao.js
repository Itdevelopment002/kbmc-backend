import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';

const PondsAndTalao = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false); // State for edit modal
    const [selectedRow, setSelectedRow] = useState(null);
    const [editData, setEditData] = useState({ id: '', name: '' }); // State for editing data

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        // Add logic to delete the selected row
        console.log('Deleting row:', selectedRow);
        setDeleteModalOpen(false);
    };

    const handleEditModalOpen = (row) => {
        setEditData(row); // Set the selected row data for editing
        setEditModalOpen(true);
    };

    const handleEditSubmit = () => {
        console.log(`Pond with ID ${editData.id} updated with name: ${editData.name}`);
        setEditModalOpen(false);
        // Add logic to update the data in your state or database here
    };

    const pondsData = [
        { id: 1, name: 'Mahalaxmi Talao' },
        { id: 2, name: 'Badlapur Gaon Talao' },
        { id: 3, name: 'Gaondevi Talao' },
    ];

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="#">City Profile</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Ponds and Talao</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3 ">
                                        <h4 className="page-title">Ponds and Talao</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end m-b-20">
                                        <Link to="/add-ponds" className="btn btn-primary btn-rounded float-right mb-2" style={{ borderRadius: "100px" }}>
                                            <i className="fa fa-plus"></i>+ Add Ponds and Talao
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Talao Name</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pondsData.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.id.toString().padStart(2, '0')}</td>
                                                    <td>{row.name}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-danger btn-sm m-t-10"
                                                            onClick={() => handleDeleteClick(row)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            className="btn btn-success btn-sm m-t-10 mx-2"
                                                            onClick={() => handleEditModalOpen(row)}
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
                <Modal show={isDeleteModalOpen} onHide={() => setDeleteModalOpen(false)} centered>
                    <Modal.Body>
                        <h4>Are you sure you want to delete this item?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setDeleteModalOpen(false)}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={handleDeleteConfirm}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Modal */}
                <Modal show={isEditModalOpen} onHide={() => setEditModalOpen(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Pond/Talao</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formPondName">
                                <Form.Label>Pond/Talao Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setEditModalOpen(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleEditSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default PondsAndTalao;
