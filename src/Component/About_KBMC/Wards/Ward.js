import React, { useState } from 'react';
import { Modal, Button, Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ward = () => {
    const [wards, setWards] = useState([
        { id: 1, wardNo: 'Ward No. 1', wardName: 'Vadavali Shantinagar' },
        { id: 2, wardNo: 'Ward No. 2', wardName: 'Valivali Deepali Park' },
        { id: 3, wardNo: 'Ward No. 3', wardName: 'Eranjad Mohpada' },
    ]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedWard, setSelectedWard] = useState(null);

    const handleDelete = (ward) => {
        setWards(wards.filter((w) => w.id !== ward.id));
        setShowDeleteModal(false);
    };

    const handleEditSave = () => {
        const updatedWards = wards.map((ward) =>
            ward.id === selectedWard.id ? selectedWard : ward
        );
        setWards(updatedWards);
        setShowEditModal(false);
    };

    const handleEditClick = (ward) => {
        setSelectedWard({ ...ward });
        setShowEditModal(true);
    };

    const handleDeleteClick = (ward) => {
        setSelectedWard(ward);
        setShowDeleteModal(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setSelectedWard({ ...selectedWard, [name]: value });
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="#.">About KBMC</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Ward
                        </li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Ward</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end mb-3">
                                        <Link to="/Add_ward" className="btn btn-primary btn-rounded float-right" style={{ borderRadius: '100px' }}>
                                            <i className="fa fa-plus"></i> + Add Ward
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Ward No.</th>
                                                <th>Ward Name</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wards.map((ward, index) => (
                                                <tr key={ward.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{ward.wardNo}</td>
                                                    <td>{ward.wardName}</td>
                                                    <td>
                                                        <Button
                                                            variant="success"
                                                            size="sm"
                                                            onClick={() => handleEditClick(ward)}
                                                        >
                                                            Edit
                                                        </Button>{' '}
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => handleDeleteClick(ward)}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <Pagination>
                    <Pagination.Prev disabled>Previous</Pagination.Prev>
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item active>2</Pagination.Item>
                    <Pagination.Item>3</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                </Pagination>

                {/* Delete Modal */}
                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                    <Modal.Body>
                        <h4>Are you sure you want to delete this item?</h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => setShowDeleteModal(false)}
                        >
                            Close
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => handleDelete(selectedWard)}
                        >
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Edit Modal */}
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Ward</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedWard && (
                            <div>
                                <div className="form-group">
                                    <label>Ward No.</label>
                                    <input
                                        type="text"
                                        name="wardNo"
                                        value={selectedWard.wardNo}
                                        onChange={handleEditChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ward Name</label>
                                    <input
                                        type="text"
                                        name="wardName"
                                        value={selectedWard.wardName}
                                        onChange={handleEditChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleEditSave}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Ward;
