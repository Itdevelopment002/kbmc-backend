import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../api";
import { Link } from "react-router-dom";

const PrivateHospital = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedHospital, setSelectedHospital] = useState(null);
    const [editData, setEditData] = useState({
        id: "",
        name: "",
        division: "",
        specialty: "",
        address: "",
        phone: "",
        mobile: "",
        beds: "",
        facilities: "",
    });
    const [hospitals, setHospitals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Fetch hospitals when the component mounts
    useEffect(() => {
        fetchHospitals();
    }, []);

    const fetchHospitals = async () => {
        try {
            const response = await api.get("/private-hospital");
            setHospitals(response.data);
        } catch (error) {
            console.error("Error fetching hospitals:", error);
        }
    };

    const handleDeleteModalOpen = (hospital) => {
        setSelectedHospital(hospital);
        setShowDeleteModal(true);
        document.getElementById('deleteModal').classList.add('show');
        document.getElementById('deleteModal').style.display = 'block';
    };

    const handleEditModalOpen = (hospital) => {
        setEditData({
            // Set editData to the hospital's current data
            id: hospital.id,
            name: hospital.hospital_name,
            division: hospital.division,
            specialty: hospital.principal_doctor,
            address: hospital.address,
            phone: hospital.phone_no,
            mobile: hospital.mobile_no,
            beds: hospital.beds,
            facilities: hospital.facility,
        });
        setShowEditModal(true);
        document.getElementById('editModal').classList.add('show');
        document.getElementById('editModal').style.display = 'block';
    };

    const handleDelete = async () => {
        try {
            await api.delete(`/private-hospital/${selectedHospital.id}`);
            toast.success(`Hospital deleted successfully.`);
            fetchHospitals();
        } catch (error) {
            console.error("Error deleting hospital:", error);
            toast.error("Failed to delete hospital.");
        } finally {
            closeModal('deleteModal');
            setSelectedHospital(null);
        }
    };

    const handleEditSubmit = async () => {
        try {
            await api.put(
                `/private-hospital/${editData.id}`,
                {
                    hospitalName: editData.name,
                    division: editData.division,
                    principalDoctor: editData.specialty,
                    address: editData.address,
                    phoneNo: editData.phone,
                    mobileNo: editData.mobile,
                    beds: editData.beds,
                    facilities: editData.facilities,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            toast.success(`Hospital updated successfully.`);
            fetchHospitals();
        } catch (error) {
            console.error("Error updating hospital:", error);
            toast.error("Failed to update hospital.");
        } finally {
            closeModal('editModal');
        }
    };

    const handleCloseModal = (modalId) => {
        document.getElementById(modalId).classList.remove('show');
        document.getElementById(modalId).style.display = 'none';
    };

    const closeModal = (modalId) => {
        setShowDeleteModal(false);
        setShowEditModal(false);
        handleCloseModal(modalId);
    };
    const indexOfLastHospital = currentPage * itemsPerPage;
    const indexOfFirstHospital = indexOfLastHospital - itemsPerPage;
    const currentHospitals = hospitals.slice(indexOfFirstHospital, indexOfLastHospital);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Private Hospital</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Add Private Hospital</h4>
                                        </div>
                                        <div className="col-sm-8 col-9 text-right">
                                            <Link to="/add-private-hospital" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Hospital</Link>
                                        </div>
                                    </div>
                                    <div className="table-responsive mt-4 datatable">
                                        <table className="table table-bordered m-b-0">
                                            <thead>
                                                <tr>
                                                    <th width="10%">Sr. No.</th>
                                                    <th>Hospitals Name</th>
                                                    <th>Names of Division</th>
                                                    <th>Name of Principal Doctor speciality</th>
                                                    <th>Address</th>
                                                    <th>Phone No.</th>
                                                    <th>Mobile No.</th>
                                                    <th>No. of Beds</th>
                                                    <th>Facilities Provided in Hospital</th>
                                                    <th width="20%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {hospitals.map((hospital, index) => (
                                                    <tr key={hospital.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{hospital.hospital_name}</td>
                                                        <td>{hospital.division}</td>
                                                        <td>{hospital.principal_doctor}</td>
                                                        <td>{hospital.address}</td>
                                                        <td>{hospital.phone_no}</td>
                                                        <td>{hospital.mobile_no}</td>
                                                        <td>{hospital.beds}</td>
                                                        <td>{hospital.facility}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-success btn-sm m-t-10"
                                                                onClick={() => handleEditModalOpen(hospital)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                className="btn btn-danger btn-sm m-t-10"
                                                                onClick={() => handleDeleteModalOpen(hospital)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4">
                                        <ul className="pagination">
                                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                                            </li>
                                            {Array.from({ length: Math.ceil(hospitals.length / itemsPerPage) }, (_, i) => (
                                                <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                                    <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                                                </li>
                                            ))}
                                            <li className={`page-item ${currentPage === Math.ceil(hospitals.length / itemsPerPage) ? 'disabled' : ''}`}>
                                                <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Delete Modal */}
                    <div id="deleteModal" className="modal fade" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="deleteModalLabel">Delete Hospital</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => handleCloseModal('deleteModal')}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Are you sure you want to delete this hospital?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => handleCloseModal('deleteModal')}>Cancel</button>
                                    <button type="button" className="btn btn-sm btn-danger" onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Modal */}
                    <div id="editModal" className="modal fade" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true" style={{ overflowY: 'auto', maxHeight: '100vh', scrollbarWidth: 'none' }}>
                        <div className="modal-dialog" style={{ marginTop: '5vh' }}> {/* Optional: center modal vertically if needed */}
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="editModalLabel">Edit Hospital</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => handleCloseModal('editModal')}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Hospital Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.name}
                                                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Division</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.division}
                                                onChange={(e) => setEditData({ ...editData, division: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Principal Doctor Specialty</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.specialty}
                                                onChange={(e) => setEditData({ ...editData, specialty: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.address}
                                                onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.phone}
                                                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Mobile Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.mobile}
                                                onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Number of Beds</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={editData.beds}
                                                onChange={(e) => setEditData({ ...editData, beds: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Facilities</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={editData.facilities}
                                                onChange={(e) => setEditData({ ...editData, facilities: e.target.value })}
                                            />
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-sm btn-primary" onClick={handleEditSubmit}>Save changes</button>
                                    <button type="button" className="btn btn-sm btn-secondary" onClick={() => handleCloseModal('editModal')}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default PrivateHospital;
