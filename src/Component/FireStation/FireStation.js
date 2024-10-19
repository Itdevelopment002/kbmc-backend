
import React, { useState } from 'react';
import { Modal, Button, Form, Table } from 'react-bootstrap';
// Import any other necessary components or styles here
import { Link } from 'react-router-dom';

const FireStation = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedStation, setSelectedStation] = useState(null);
    const [fireStations, setFireStations] = useState([
        {
            id: 1,
            heading: 'Kulgaon Badlapur Municipal Council',
            address: 'Fire Station, Shirgaon MIDC, Badlapur East',
            phone: '0251 2690890',
            image: 'assets/img/user.jpg',
        },
        {
            id: 2,
            heading: 'Kulgaon Badlapur Municipal Council',
            address: 'Fire Station, Shaswat Park, Manjarli, Badlapur West',
            phone: '0251 2990890',
            image: 'assets/img/user.jpg',
        },
    ]);
    const [editData, setEditData] = useState({ heading: '', address: '', phone: '', image: '' });

    const handleDeleteModalOpen = (station) => {
        setSelectedStation(station);
        setShowDeleteModal(true);
    };

    const handleEditModalOpen = (station) => {
        setEditData(station);
        setShowEditModal(true);
    };

    const handleDelete = () => {
        setFireStations(fireStations.filter(station => station.id !== selectedStation.id));
        setShowDeleteModal(false);
        setSelectedStation(null);
    };

    const handleEditSubmit = () => {
        setFireStations(fireStations.map(station => 
            station.id === editData.id ? editData : station
        ));
        setShowEditModal(false);
    };

    const handleCloseDeleteModal = () => setShowDeleteModal(false);
    const handleCloseEditModal = () => setShowEditModal(false);

    return (
        <>
           
            <div className="page-wrapper">
                <div className="content">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#.">City Profile</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Fire Station</li>
                        </ol>
                    </nav>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Fire Station</h4>
                                        </div>
                                        <div className="text-end mb-3" >
        <Link to="/add-fire">
          <button className="btn btn-primary" style={{borderRadius:"100px"}}>+ Add Fire Station</button>
        </Link>
      </div>
                                    </div>
                                    <div className="table-responsive m-t-10">
                                        <Table bordered>
                                            <thead>
                                                <tr>
                                                    <th width="10%">Sr. No.</th>
                                                    <th>Heading</th>
                                                    <th>Address</th>
                                                    <th>Phone No.</th>
                                                    <th>Image</th>
                                                    <th width="15%">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {fireStations.map((station, index) => (
                                                    <tr key={station.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{station.heading}</td>
                                                        <td>{station.address}</td>
                                                        <td>{station.phone}</td>
                                                        <td><img width="50px" src={station.image} alt={`fire-station-img${station.id}`} /></td>
                                                        <td>
                                                            <Button 
                                                                variant="danger" 
                                                                size="sm" 
                                                                className="m-t-10" 
                                                                onClick={() => handleDeleteModalOpen(station)}
                                                            >
                                                                Delete
                                                            </Button>
                                                            <Button 
                                                                variant="success" 
                                                                size="sm" 
                                                                className="m-t-10" 
                                                                style={{ marginLeft: '5px' }} 
                                                                onClick={() => handleEditModalOpen(station)}
                                                            >
                                                                Edit
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

                    {/* Delete Modal */}
                    <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
                        <Modal.Body>
                            <h4>Are you sure you want to delete this item?</h4>
                        </Modal.Body>
                        <Modal.Footer className="text-center">
                            <Button variant="primary" onClick={handleCloseDeleteModal}>Close</Button>
                            <Button variant="danger" onClick={handleDelete}>Delete</Button>
                        </Modal.Footer>
                    </Modal>

                    {/* Edit Modal */}
                    <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Fire Station</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formHeading">
                                    <Form.Label>Heading</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editData.heading}
                                        onChange={(e) => setEditData({ ...editData, heading: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editData.address}
                                        onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhone">
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editData.phone}
                                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formImage">
                                    <Form.Label>Image URL</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={editData.image}
                                        onChange={(e) => setEditData({ ...editData, image: e.target.value })}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseEditModal}>Close</Button>
                            <Button variant="primary" onClick={handleEditSubmit}>Save Changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
          
        </>
    );
};

export default FireStation;
