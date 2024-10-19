import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function Electedwings() {
    const [correspondents, setCorrespondents] = useState([
        {
            id: 1,
            image: 'assets/img/about/ceo.jpeg',
            name: 'Correspondent Name',
            wardNo: 'Ward No. 01',
            startDate: '01-01-2023',
            endDate: '31-12-2024',
            mobileNo: '+91 9988775566',
        },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedCorrespondentId, setSelectedCorrespondentId] = useState(null);
    const [editData, setEditData] = useState({ name: "", wardNo: "", startDate: "", endDate: "", mobileNo: "", image: "" });

    const handleDeleteClick = (id) => {
        setSelectedCorrespondentId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        setCorrespondents(correspondents.filter((correspondent) => correspondent.id !== selectedCorrespondentId));
        setShowDeleteModal(false);
    };

    const handleEditClick = (id) => {
        const correspondentToEdit = correspondents.find((correspondent) => correspondent.id === id);
        setEditData(correspondentToEdit);
        setSelectedCorrespondentId(id);
        setShowEditModal(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedCorrespondents = correspondents.map((correspondent) =>
            correspondent.id === selectedCorrespondentId ? editData : correspondent
        );
        setCorrespondents(updatedCorrespondents);
        setShowEditModal(false);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#.">About KBMC</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Elected Wings</li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row mb-3">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Elected Wings</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end m-b-20">
                                        <a
                                            href="/Add_electedwings"
                                            className="btn btn-primary btn-rounded float-right"
                                            style={{ borderRadius: '100px' }}
                                        >
                                            <i className="fa fa-plus"></i> + Add Correspondent
                                        </a>
                                    </div>
                                </div>

                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Correspondent Image</th>
                                                <th>Correspondent Name</th>
                                                <th>Ward No.</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th>Mobile No.</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {correspondents.map((correspondent, index) => (
                                                <tr key={correspondent.id}>
                                                    <td>{index + 1}</td>
                                                    <td><img width="50px" src={correspondent.image} alt="Correspondent" /></td>
                                                    <td>{correspondent.name}</td>
                                                    <td>{correspondent.wardNo}</td>
                                                    <td>{correspondent.startDate}</td>
                                                    <td>{correspondent.endDate}</td>
                                                    <td>{correspondent.mobileNo}</td>
                                                    <td>
                                                        <button className="btn btn-success btn-sm m-t-10 mx-1" onClick={() => handleEditClick(correspondent.id)}>Edit</button>
                                                        <button className="btn btn-danger btn-sm m-t-10 " onClick={() => handleDeleteClick(correspondent.id)}>Delete</button>
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
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                    <Modal.Body>
                        <h4>Are you sure you want to delete this correspondent?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                        <Button variant="danger" onClick={confirmDelete}>Delete</Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Modal */}
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Correspondent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleEditSubmit}>
                            <Form.Group>
                                <Form.Label>Correspondent Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={editData.name}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Ward No.</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="wardNo"
                                    value={editData.wardNo}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="startDate"
                                    value={editData.startDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>End Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="endDate"
                                    value={editData.endDate}
                                    onChange={handleFormChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobileNo"
                                    value={editData.mobileNo}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="image"
                                    value={editData.image}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
                                <Button variant="primary" type="submit">Save Changes</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
}

export default Electedwings;
