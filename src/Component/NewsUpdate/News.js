import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const News = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const newsList = [
        {
            id: 1,
            description: 'Police and Fire Brigade KBMC flood rescue operations mock drill @ Barrage dam today.',
        },
        {
            id: 2,
            description: 'There are 16 primary and 4 secondary schools under the jurisdiction of Kulgaon Badlapur Municipal Council...',
        },
        {
            id: 3,
            description: 'List of candidates who have received applications for part-time / full-time medical officer...',
        },
    ];

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        console.log(`Deleted news with ID: ${deleteId}`);
        setShowDeleteModal(false);
    };

    return (
        <div className="page-wrapper d-flex">
            

            <div className="content flex-fill">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">News Update</li>
                    </ol>
                </nav>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">News Update</h4>
                                    </div>
                                    <div className="col-sm-8 col-9 text-end mb-3">
                                        <Link
                                            to="/add_news"
                                            className="btn btn-primary btn-rounded float-end"
                                            style={{ borderRadius: '100px' }}
                                        >
                                            <i className="fa fa-plus"></i> + Add News
                                        </Link>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-b-0">
                                        <thead>
                                            <tr>
                                                <th width="10%">Sr. No.</th>
                                                <th>News Description</th>
                                                <th width="15%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {newsList.map((news, index) => (
                                                <tr key={news.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{news.description}</td>
                                                    <td>
                                                        <button onClick={() => handleDelete(news.id)} className="btn btn-danger btn-sm m-t-10 mx-1">
                                                            Delete
                                                        </button>
                                                        <Link to={`edit_news/${news.id}`} className="btn btn-success btn-sm m-t-10">
                                                            Edit
                                                        </Link>
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
                            <Link className="page-link" to="#" tabIndex="-1">Previous</Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item active">
                            <Link className="page-link" to="#">2 <span className="sr-only"></span></Link>
                        </li>
                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                        <li className="page-item">
                            <Link className="page-link" to="#">Next</Link>
                        </li>
                    </ul>
                </div>

                {/* Delete Modal */}
                {showDeleteModal && (
                    <div className="modal delete_modal fade text-center show" style={{ display: 'block', zIndex: 1050 }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h4>Are you sure you want to delete this item?</h4>
                                </div>
                                <div className="modal-footer text-center">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={() => setShowDeleteModal(false)}>Close</button>
                                    <button type="button" className="btn btn-danger btn-lg" onClick={confirmDelete}>Delete</button>
                                </div>
                            </div>
                        </div> 
                        {/* Modal background - ensure it covers the entire viewport */}
                        <div className="modal-backdrop fade show"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default News;
