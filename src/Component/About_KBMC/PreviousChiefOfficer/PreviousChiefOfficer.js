import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const PreviousChiefOfficer = () => {
    const [officers, setOfficers] = useState([
        {
            id: 1,
            name: "Officer Name",
            startDate: "01-01-2023",
            endDate: "31-12-2024",
            imgUrl: "https://via.placeholder.com/50", // Placeholder for image URL
        },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedOfficerId, setSelectedOfficerId] = useState(null);
    const [editData, setEditData] = useState({ name: "", startDate: "", endDate: "", imgUrl: "" });

    // Function to handle delete button click
    const handleDeleteClick = (id) => {
        setSelectedOfficerId(id);
        setShowDeleteModal(true);
    };

    // Function to confirm deletion
    const confirmDelete = () => {
        setOfficers(officers.filter((officer) => officer.id !== selectedOfficerId));
        setShowDeleteModal(false);
    };

    // Function to handle edit button click and populate the modal with data
    const handleEditClick = (id) => {
        const officerToEdit = officers.find((officer) => officer.id === id);
        setEditData(officerToEdit);
        setSelectedOfficerId(id);
        setShowEditModal(true);
    };

    // Function to handle edit form submission
    const handleEditSubmit = (e) => {
        e.preventDefault();
        const updatedOfficers = officers.map((officer) =>
            officer.id === selectedOfficerId ? editData : officer
        );
        setOfficers(updatedOfficers);
        setShowEditModal(false);
    };

    // Function to handle form changes
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="#.">About KBMC</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Previous Chief Officers of the Council
                            </li>
                        </ol>
                    </nav>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row mb-3">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Previous Chief Officers</h4>
                                        </div>
                                        <div className="col-sm-8 col-9 text-end m-b-20">
                                            <a
                                                href="/Add_previouschiefofficer"
                                                className="btn btn-primary btn-rounded float-right"
                                                style={{ borderRadius: '100px' }}
                                            >
                                                <i className="fa fa-plus"></i> + Add Officer
                                            </a>
                                        </div>
                                    </div>

                                    {/* Table Section */}
                                    <div className="table-responsive">
                                        <table className="table table-bordered m-b-0">
                                            <thead>
                                                <tr>
                                                    <th width="10%">Sr. No.</th>
                                                    <th>Officer Name</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Image</th>
                                                    <th width="15%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {officers.map((officer, index) => (
                                                    <tr key={officer.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{officer.name}</td>
                                                        <td>{officer.startDate}</td>
                                                        <td>{officer.endDate}</td>
                                                        <td>
                                                            <img
                                                                src={officer.imgUrl}
                                                                alt="Officer"
                                                                style={{ width: "50px", height: "50px" }}
                                                            />
                                                        </td>
                                                        <td>
                                                            <button
                                                                className="btn btn-danger btn-sm m-t-10"
                                                                onClick={() => handleDeleteClick(officer.id)}
                                                                style={{ marginRight: "10px" }}
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="btn btn-success btn-sm m-t-10"
                                                                onClick={() => handleEditClick(officer.id)}
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
                    <Modal
                        show={showDeleteModal}
                        onHide={() => setShowDeleteModal(false)}
                        centered
                    >
                        <Modal.Body>
                            <h4>Are you sure you want to delete this item?</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => setShowDeleteModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={confirmDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Edit Modal */}
                    <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Officer</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleEditSubmit}>
                                <Form.Group>
                                    <Form.Label>Officer Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={editData.name}
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
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="imgUrl"
                                        value={editData.imgUrl}
                                        onChange={handleFormChange}
                                    />
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" type="submit">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default PreviousChiefOfficer;
