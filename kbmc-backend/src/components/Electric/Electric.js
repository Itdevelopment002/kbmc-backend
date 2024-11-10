import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const Electric = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [editData, setEditData] = useState({
        id: "",
        description: "",
        mobileNo: "",
        vendorName: "",
    });
    const [electricItems, setElectricItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Fetch electric items from the API
    useEffect(() => {
        const fetchElectricItems = async () => {
            try {
                const response = await api.get("/electric"); // Make sure the URL matches your backend API
                setElectricItems(response.data);
            } catch (error) {
                console.error("Error fetching electric items:", error);
            }
        };

        fetchElectricItems();
    }, []);

    const handleDeleteModalOpen = (itemId) => {
        setSelectedItem(itemId);
        setShowDeleteModal(true);
    };

    const handleEditModalOpen = (item) => {
        setEditData(item);
        setShowEditModal(true);
    };

    const handleDelete = async () => {
        try {
            await api.delete(`/electric/${selectedItem}`);
            setElectricItems(electricItems.filter((item) => item.id !== selectedItem));
            setShowDeleteModal(false);
            setSelectedItem(null);
        } catch (error) {
            console.error("Error deleting electric item:", error);
        }
    };

    const handleEditSubmit = async () => {
        try {
            await api.put(`/electric/${editData.id}`, editData);
            setElectricItems(
                electricItems.map((item) => (item.id === editData.id ? editData : item))
            );
            setShowEditModal(false);
        } catch (error) {
            console.error("Error updating electric item:", error);
        }
    };

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleCloseEditModal = () => setShowEditModal(false);

    const currentPageData = electricItems.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(electricItems.length / itemsPerPage);

    const changePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/electric">City Profile</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Electric
                        </li>
                    </ol>
                </nav>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Electric</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-right m-b-20">
                                        <Link to="/add-electric" className="btn btn-primary btn-rounded float-right">
                                            <i className="fa fa-plus"></i> Add Electric
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>Description</th>
                                                <th>Mobile No.</th>
                                                <th>Vendor Name</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentPageData.length > 0 ? (
                                                currentPageData.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                                        <td>{item.description}</td>
                                                        <td>{item.mobileNo}</td>
                                                        <td>{item.vendorName}</td>
                                                        <td>
                                                            <button
                                                                className="btn btn-sm btn-danger btn-sm "
                                                                onClick={() => handleDeleteModalOpen(item.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                            <button
                                                                className="btn btn-sm btn-success btn-sm "
                                                                onClick={() => handleEditModalOpen(item)}
                                                            >
                                                                Edit
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" style={{ textAlign: "center" }}>
                                                        No electric available
                                                    </td>
                                                </tr>
                                            )}
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
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <a className="page-link" href="#" onClick={() => changePage(currentPage - 1)}>
                                Previous
                            </a>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                <a className="page-link" href="#" onClick={() => changePage(index + 1)}>
                                    {index + 1}
                                </a>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                            <a className="page-link" href="#" onClick={() => changePage(currentPage + 1)}>
                                Next
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Delete Modal */}
                <div
                    className={`modal fade ${showDeleteModal ? "show" : ""}`}
                    id="deleteModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden={!showDeleteModal}
                    style={{ display: showDeleteModal ? "block" : "none" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h4>Are you sure you want to delete this item?</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-primary" data-dismiss="modal" onClick={handleCloseDeleteModal}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-sm btn-danger" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit Modal */}
                <div
                    className={`modal fade ${showEditModal ? "show" : ""}`}
                    id="editModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden={!showEditModal}
                    style={{ display: showEditModal ? "block" : "none" }}
                >
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Electric Item</h5>
                                {/* Cross button to close the modal */}
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleCloseEditModal} // Close the modal when clicked
                                >
                                    <span aria-hidden="true">&times;</span> {/* The cross icon */}
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            value={editData.description}
                                            onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNo">Mobile No.</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="mobileNo"
                                            value={editData.mobileNo}
                                            onChange={(e) => setEditData({ ...editData, mobileNo: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="vendorName">Vendor Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="vendorName"
                                            value={editData.vendorName}
                                            onChange={(e) => setEditData({ ...editData, vendorName: e.target.value })}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-sm btn-secondary" onClick={handleCloseEditModal}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-sm btn-primary" onClick={handleEditSubmit}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Electric;
