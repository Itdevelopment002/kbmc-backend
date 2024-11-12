import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import api from '../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WardWiseLitigations = () => {
    const [litigations, setLitigations] = useState([]);
    const [wardNo, setWardNo] = useState('');
    const [nameLawsuit, setNameLawsuit] = useState('');
    const [mobNo, setMobNo] = useState('');
    const [showAddNewModal, setShowAddNewModal] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedLitigation, setSelectedLitigation] = useState(null);
    const [editData, setEditData] = useState({ id: '', ward_no: '', name_lawsuit: '', mob_no: '' });

    // Fetch existing litigations on component mount
    useEffect(() => {
        fetchLitigations();
    }, []);

    const fetchLitigations = async () => {
        try {
            const response = await api.get('/litigations');
            setLitigations(response.data);
        } catch (error) {
            toast.error('Error fetching litigations.');
        }
    };

    const handleAddLitigation = async () => {
        if (wardNo && nameLawsuit && mobNo) {
            const newLitigation = { ward_no: wardNo, name_lawsuit: nameLawsuit, mob_no: mobNo };
            try {
                const response = await api.post('/litigations', newLitigation);
                setLitigations([...litigations, response.data]);
                setWardNo('');
                setNameLawsuit('');
                setMobNo('');
                setShowAddNewModal(false);
                toast.success('Litigation added successfully!');
            } catch (error) {
                toast.error('Error adding litigation.');
            }
        }
    };

    const handleDeleteClick = (litigation) => {
        setSelectedLitigation(litigation);
        setDeleteModalOpen(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await api.delete(`/litigations/${selectedLitigation.id}`);
            setLitigations(litigations.filter(litigation => litigation.id !== selectedLitigation.id));
            toast.success('Litigation deleted successfully!');
        } catch (error) {
            toast.error('Error deleting litigation.');
        } finally {
            setDeleteModalOpen(false);
        }
    };

    const handleEditClick = (litigation) => {
        setEditData(litigation);
        setShowEditModal(true);
    };

    const handleEditSubmit = async () => {
        try {
            const response = await api.put(`/litigations/${editData.id}`, {
                ward_no: editData.ward_no,
                name_lawsuit: editData.name_lawsuit,
                mob_no: editData.mob_no
            });

            if (response.status === 200) {
                setLitigations(litigations.map(litigation => (litigation.id === editData.id ? response.data : litigation)));
                toast.success('Litigation updated successfully!');
            } else {
                toast.error('Failed to update litigation.');
            }
        } catch (error) {
            toast.error('Error updating litigation.');
        } finally {
            setShowEditModal(false);
        }
    };
    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-box">
                        <div className="card-block">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Name of Ward wise Litigations</h4>
                                </div>
                                <div className="col-sm-8 col-9 text-right m-b-20">
                                    <button onClick={() => setShowAddNewModal(true)} className="btn btn-primary btn-rounded float-right">
                                        <i className="fa fa-plus"></i> Add New
                                    </button>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered m-b-0">
                                    <thead>
                                        <tr>
                                            <th width="10%">Sr. No.</th>
                                            <th>Ward. No</th>
                                            <th>Name of the lawsuit</th>
                                            <th>Mobile No.</th>
                                            <th width="15%">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {litigations.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.ward_no}</td>
                                                <td>{item.name_lawsuit}</td>
                                                <td>{item.mob_no}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm m-t-10"
                                                        onClick={() => handleDeleteClick(item)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-success btn-sm m-t-10"
                                                        onClick={() => handleEditClick(item)}
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
            {showAddNewModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add New Litigation</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowAddNewModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="wardNo" className="form-label">Ward No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="wardNo"
                                            placeholder="Enter Ward No."
                                            value={wardNo}
                                            onChange={(e) => setWardNo(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="nameLawsuit" className="form-label">Name of the lawsuit</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nameLawsuit"
                                            placeholder="Enter Name of the lawsuit"
                                            value={nameLawsuit}
                                            onChange={(e) => setNameLawsuit(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="mobNo" className="form-label">Mobile No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobNo"
                                            placeholder="Enter Mobile No."
                                            value={mobNo}
                                            onChange={(e) => setMobNo(e.target.value)}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={() => setShowAddNewModal(false)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-sm btn-primary" onClick={handleAddLitigation}>
                                    Add Litigation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="deleteModalLabel">Delete Litigation</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setDeleteModalOpen(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this litigation?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={() => setDeleteModalOpen(false)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={handleDeleteConfirm}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Litigation Modal */}
            {showEditModal && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }} aria-labelledby="editModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editModalLabel">Edit Litigation</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}>
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="editWardNo" className="form-label">Ward No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="editWardNo"
                                            value={editData.ward_no}
                                            onChange={(e) => setEditData({ ...editData, ward_no: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="editNameLawsuit" className="form-label">Name of the lawsuit</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="editNameLawsuit"
                                            value={editData.name_lawsuit}
                                            onChange={(e) => setEditData({ ...editData, name_lawsuit: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="editMobNo" className="form-label">Mobile No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="editMobNo"
                                            value={editData.mob_no}
                                            onChange={(e) => setEditData({ ...editData, mob_no: e.target.value })}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal" onClick={() => setShowEditModal(false)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-sm btn-primary" onClick={handleEditSubmit}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default WardWiseLitigations