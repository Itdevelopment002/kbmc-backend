import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Ensure you have react-bootstrap installed

const Home_video = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const videos = [
        { id: 1, description: 'Description One', publishDate: '10 May 2024', video: 'assets/videos/video1.mp4' },
        { id: 2, description: 'Description Two', publishDate: '10 May 2024', video: 'assets/videos/video2.mp4' },
        { id: 3, description: 'Description Three', publishDate: '10 May 2024', video: 'assets/videos/video3.mp4' }
    ];

    const handleDelete = (video) => {
        setSelectedVideo(video);
        setShowDeleteModal(true);
    };

    const handleEdit = (video) => {
        setSelectedVideo(video);
        setShowEditModal(true);
    };

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setSelectedVideo(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedVideo(null);
        setSelectedFile(null); // Reset selected file when closing the modal
    };

    const handleSaveEdit = () => {
        // Handle save edit logic here
        setShowEditModal(false);
        // Add logic to save the edited video
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        // Optionally update the video URL preview
        if (e.target.files[0]) {
            const videoUrl = URL.createObjectURL(e.target.files[0]);
            setSelectedVideo({ ...selectedVideo, video: videoUrl });
        }
    };

    return (
        <>
            <div className="page-wrapper">
                <div className="content">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/index">Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Home Video
                            </li>
                        </ol>
                    </nav>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Home Video</h4>
                                        </div>
                                        <div className="col-sm-8 col-9 text-end mb-3">
                                            <Link
                                                to="/add_homvideo"
                                                className="btn btn-primary btn-rounded float-right"
                                                style={{ borderRadius: '100px' }}
                                            >
                                                <i className="fa fa-plus"></i>+ Add Video
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-bordered m-b-0">
                                            <thead>
                                                <tr>
                                                    <th width="10%">Sr. No.</th>
                                                    <th>Video Description</th>
                                                    <th>Publish Date</th>
                                                    <th>Video</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {videos.map((video, index) => (
                                                    <tr key={video.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{video.description}</td>
                                                        <td>{video.publishDate}</td>
                                                        <td>
                                                            <video width="100px" controls>
                                                                <source src={video.video} type="video/mp4" />
                                                                Your browser does not support the video tag.
                                                            </video>
                                                        </td>
                                                        <td>
                                                            <button
                                                                type="button"
                                                                className="btn btn-danger btn-sm m-t-10"
                                                                onClick={() => handleDelete(video)}
                                                            >
                                                                Delete
                                                            </button>{' '}
                                                            <button
                                                                type="button"
                                                                className="btn btn-success btn-sm m-t-10"
                                                                onClick={() => handleEdit(video)}
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

                    <div>
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#" tabIndex="-1">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    2 <span className="sr-only"></span>
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Delete Modal */}
                    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                        <Modal.Body>
                            <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete {selectedVideo?.description}?</h4>
                        </Modal.Body>
                        <Modal.Footer style={{ justifyContent: 'center' }}>
                            <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
                            <Button variant="danger" onClick={() => {
                                // Add delete logic here
                                handleCloseDeleteModal(); 
                            }}>Delete</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Edit Modal */}
                    {selectedVideo && (
                        <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                            <Modal.Header>
                                <h5 className="modal-title">Edit Video</h5>
                                <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                            </Modal.Header>
                            <Modal.Body>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Video Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedVideo.description}
                                            onChange={(e) =>
                                                setSelectedVideo({ ...selectedVideo, description: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Publish Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={selectedVideo.publishDate}
                                            onChange={(e) =>
                                                setSelectedVideo({ ...selectedVideo, publishDate: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Video File</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={selectedVideo.video}
                                            onChange={(e) =>
                                                setSelectedVideo({ ...selectedVideo, video: e.target.value })
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Upload New Video</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            accept="video/*"
                                            onChange={handleFileChange}
                                        />
                                        {selectedFile && (
                                            <div className="mt-2">
                                                <video width="200" controls>
                                                    <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                                                    Your browser does not support the video tag.
                                                </video>
                                            </div>
                                        )}
                                    </div>
                                </form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleCloseEditModal}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSaveEdit}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home_video;
