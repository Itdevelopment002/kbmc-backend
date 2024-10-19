import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { FaFilePdf } from 'react-icons/fa'; // Importing a PDF icon
import { FaTimes } from 'react-icons/fa'; // Importing a close icon

const CitizenCharter = () => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [departments, setDepartments] = useState([
        { id: 1, name: "General Admin Department", pdf: "path/to/pdf1.pdf" },
        { id: 2, name: "Audit Department", pdf: "path/to/pdf2.pdf" },
        { id: 3, name: "Tax Department", pdf: "path/to/pdf3.pdf" },
    ]);
    const [newDepartment, setNewDepartment] = useState({ name: '', pdf: null });

    const handleFileChange = (e) => {
        setNewDepartment({ ...newDepartment, pdf: e.target.files[0] });
    };

    const handleAddDepartment = (e) => {
        e.preventDefault();
        // Logic to upload the file and add department
        setDepartments([...departments, { id: departments.length + 1, ...newDepartment }]);
        setNewDepartment({ name: '', pdf: null }); // Resetting form
    };

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleCloseDeleteModal = () => setShowDeleteModal(false);

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Citizen Charter</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <h4 className="page-title m-b-0">Citizen Charter</h4>
                                <hr />
                                <Form onSubmit={handleAddDepartment}>
                                    <Form.Group controlId="formDepartmentName" className="row">
                                        <Form.Label className="col-form-label col-md-2">
                                            Department Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-4">
                                            <Form.Control
                                                type="text"
                                                value={newDepartment.name}
                                                onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
                                                required
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="row mt-3">
                                        <Form.Label className="col-form-label col-lg-2">
                                            Upload PDF <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-4">
                                            <Form.Control
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                required
                                            />
                                        </div>
                                    </Form.Group>
                                    <Form.Group className="row my-3">
                                        <div className="col-md-2">
                                            <Button variant="primary" type="submit">Submit</Button>
                                        </div>
                                    </Form.Group>
                                </Form>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Departments Name</th>
                                                <th>Uploaded PDF</th>
                                                <th width="20%" style={{ textAlign: 'center' }}>Action</th> {/* Centering Action Column */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {departments.map((dept, index) => (
                                                <tr key={dept.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{dept.name}</td>
                                                    <td>
                                                        <a href={dept.pdf} target="_blank" rel="noopener noreferrer">
                                                            <FaFilePdf size={35} color="red" />
                                                        </a>
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}> {/* Centering Action Buttons */}
                                                        <Button variant="success mx-1" size="sm" onClick={() => setShowEditModal(true)}>Edit</Button>
                                                        <Button variant="danger" size="sm" onClick={() => setShowDeleteModal(true)}>Delete</Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <Pagination />
                                {/* Delete Modal */}
                                <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} backdrop="static" centered>
                                    <Modal.Body className="text-center" style={{ backdropFilter: 'blur(5px)' }}> {/* Blur effect */}
                                        <h4>Are you sure you want to delete this item?</h4>
                                    </Modal.Body>
                                    <Modal.Footer style={{ justifyContent: 'center' }}>
                                        <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
                                        <Button variant="danger" onClick={() => { handleCloseDeleteModal(); /* Add delete logic here */ }}>Delete</Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* Edit Modal */}
                                <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                                    <Modal.Body>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h4>Edit Department</h4>
                                            <Button variant="close" onClick={handleCloseEditModal} /> {/* Close button */}
                                        </div>
                                        <Form>
                                            <Form.Group controlId="editDepartmentName">
                                                <Form.Label>Department Name</Form.Label>
                                                <Form.Control type="text" placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="editFile">
                                                <Form.Label>Upload PDF</Form.Label>
                                                <Form.Control type="file" accept=".pdf" />
                                            </Form.Group>
                                            <Modal.Footer style={{ justifyContent: 'end' }}>
                                                <Button variant="secondary" onClick={handleCloseEditModal}>Close</Button>
                                                <Button variant="primary" type="submit">Submit</Button>
                                            </Modal.Footer>
                                        </Form>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pagination = () => (
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
);

export default CitizenCharter;
