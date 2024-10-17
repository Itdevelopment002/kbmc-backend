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
            description: 'There are 16 primary and 4 secondary schools under the jurisdiction of Kulgaon Badlapur Municipal Council and students and parents are getting overwhelming response for admission in these schools in the new academic year 2024-25. In line with the new National Education Policy, the Kulgaon Badlapur Municipal Council administration has been striving for the quality of the schools along with the physical facilities of the schools for the past few years and that is why in the year 2024, all the four secondary schools Kulgaon, Kulgaon Urdu, Eranjad and Belawli have achieved good results in the 10th school examination. Success has been achieved.',
        },
        {
            id: 3,
            description: 'List of candidates who have received applications for part time / full time medical officer and other posts.',
        },
    ];

    const handleDelete = (id) => {
        setDeleteId(id);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        // Handle delete logic here
        console.log(`Deleted news with ID: ${deleteId}`);
        setShowDeleteModal(false);
    };

    return (
        <div className="page-wrapper">
            <div className="d-flex">
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
                                                            <button onClick={() => handleDelete(news.id)} className="btn btn-danger btn-sm m-t-10">
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
                                <Link className="page-link" to="#">2 <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link" to="#">Next</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Delete Modal */}
                    {showDeleteModal && (
                        <div className="modal delete_modal fade text-center show" style={{ display: 'block' }}>
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
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default News;
