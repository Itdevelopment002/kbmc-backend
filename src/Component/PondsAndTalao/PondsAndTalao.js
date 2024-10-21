import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS

const PondsAndTalao = () => {
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editData, setEditData] = useState({ id: '', name: '' });
    const [pondsData, setPondsData] = useState([]);

    // Fetch ponds data when the component mounts
    useEffect(() => {
        fetchPondsData();
    }, []);

    const fetchPondsData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/ponds'); // Replace with your actual endpoint
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setPondsData(data);
        } catch (error) {
            console.error('Error fetching ponds data:', error);
            toast.error('Failed to fetch ponds data.');
        }
    };

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await fetch(`http://localhost:5000/api/ponds/${selectedRow.id}`, {
                method: 'DELETE',
            });
            toast.success(`Pond ${selectedRow.name} deleted successfully.`);
            fetchPondsData();
        } catch (error) {
            console.error('Error deleting pond:', error);
            toast.error('Failed to delete pond.');
        } finally {
            setDeleteModalOpen(false);
            setSelectedRow(null);
        }
    };

    const handleEditModalOpen = (row) => {
        setEditData(row);
        setEditModalOpen(true);
    };

    const handleEditSubmit = async () => {
        try {
            await fetch(`http://localhost:5000/api/ponds/${editData.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: editData.name,
                }),
            });
            toast.success(`Pond ${editData.name} updated successfully.`);
            fetchPondsData();
        } catch (error) {
            console.error('Error updating pond:', error);
            toast.error('Failed to update pond.');
        } finally {
            setEditModalOpen(false);
        }
    };

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
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Ponds and Talao</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end m-b-20">
                                        <Link to="/add-ponds" className="btn btn-primary btn-rounded float-right mb-2" style={{ borderRadius: "100px" }}>
                                            <i className="fa fa-plus"></i> + Add Ponds and Talao
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
                                            {pondsData.map((row, index) => (
                                                <tr key={row.id}>
                                                    <td>{index + 1}</td>
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

                {/* Delete Modal */}
                <Modal show={isDeleteModalOpen} onHide={() => setDeleteModalOpen(false)} centered>
                    <Modal.Body>
                        <h4>Are you sure you want to delete {selectedRow?.name}?</h4>
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

                <ToastContainer /> {/* Add ToastContainer for notifications */}
            </div>
        </div>
    );
};

export default PondsAndTalao;
