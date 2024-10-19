import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PrivateHospital = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [editData, setEditData] = useState({
    id: '',
    name: '',
    division: '',
    specialty: '',
    address: '',
    phone: '',
    mobile: '',
    beds: '',
    facilities: ''
  });

  const hospitals = [
    {
      id: 1,
      name: 'K. B. S. Dube Hospital, KBMC',
      division: 'East',
      specialty: 'Dr. Rajesh Ankur, MBBS.',
      address: 'Near Adharsh Vidhyamandhir, Station Road, Kulgaon Badlapur.',
      phone: '0251-2690920',
      mobile: '8380007056',
      beds: '05',
      facilities: 'Outpatient, leprosy, Tuberculosis treatment, blood test, vaccination. hosp.kbmc@gmail.com'
    },
    {
      id: 2,
      name: 'Primary Health Center Badlapur Village (PHC)',
      division: 'West',
      specialty: 'Dr. Prashant Kanojiya / Dr. Ashwini Kodilkar',
      address: 'Badlapur Village',
      phone: '0251-2665915',
      mobile: '9822740508',
      beds: '06',
      facilities: 'Outpatient department, maternity facility, family planning surgery facility'
    }
  ];

  const handleDeleteModalOpen = (hospital) => {
    console.log('Opening delete modal for:', hospital);
    setSelectedHospital(hospital);
    setShowDeleteModal(true);
  };

  const handleEditModalOpen = (hospital) => {
    console.log('Opening edit modal for:', hospital);
    setEditData(hospital);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    console.log(`Hospital ${selectedHospital.name} deleted.`);
    // Here you would usually remove the hospital from the list
    setShowDeleteModal(false);
    setSelectedHospital(null);
  };

  const handleEditSubmit = () => {
    console.log(`Hospital ${editData.name} updated with:`, editData);
    // Here you would typically update the hospital's data in your list
    setShowEditModal(false);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    console.log('Closed delete modal');
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    console.log('Closed edit modal');
  };

  return (
    <div className="container-wrapper">
      <div className="main-content">
        <div className="page-wrapper">
          <div className="content">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Private Hospital</li>
            </ol>
            <div className="row">
              <div className="col-lg-12">
                <div className="card-box">
                  <div className="card-block">
                    <div className="row">
                      <div className="col-sm-4 col-3">
                        <h4 className="page-title">Private Hospital</h4>
                      </div>
                      <div className="col-sm-8 col-9 text-end">
                        <a href="/add-private-hospital" className="btn btn-primary btn-rounded float-right" style={{ borderRadius: "100px" }}>
                          <i className="fa fa-plus"></i> + Add Hospital
                        </a>
                      </div>
                    </div>
                    <div className="table-responsive mt-4">
                      <table className="table table-bordered m-b-0 text-top">
                        <thead>
                          <tr className='text-top'>
                            <th width="10%">Sr. No.</th>
                            <th>Hospitals Name</th>
                            <th>Names of Division</th>
                            <th>Name of Principal Doctor specialty</th>
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
                              <td>{hospital.name}</td>
                              <td>{hospital.division}</td>
                              <td>{hospital.specialty}</td>
                              <td>{hospital.address}</td>
                              <td>{hospital.phone}</td>
                              <td>{hospital.mobile}</td>
                              <td>{hospital.beds}</td>
                              <td>{hospital.facilities}</td>
                              <td>
                                <button className="btn btn-success btn-sm m-t-10" onClick={() => handleEditModalOpen(hospital)}>Edit</button>
                                <button className="btn btn-danger btn-sm m-t-10 mx-2" onClick={() => handleDeleteModalOpen(hospital)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4">
                      <ul className="pagination">
                        <li className="page-item disabled">
                          <a className="page-link" href="#" tabIndex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                          <a className="page-link" href="#">2 <span className="sr-only"></span></a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#">Next</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal */}
          <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
            <Modal.Body>
              <h4>Are you sure you want to delete {selectedHospital?.name}?</h4>
            </Modal.Body>
            <Modal.Footer className="text-center">
              <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
          </Modal>

          {/* Edit Modal */}
          <Modal show={showEditModal} onHide={handleCloseEditModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit Private Hospital</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formHospitalName">
                  <Form.Label>Hospital Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formDivision">
                  <Form.Label>Division</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.division}
                    onChange={(e) => setEditData({ ...editData, division: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formSpecialty">
                  <Form.Label>Principal Doctor's Specialty</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.specialty}
                    onChange={(e) => setEditData({ ...editData, specialty: e.target.value })}
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
                <Form.Group controlId="formMobile">
                  <Form.Label>Mobile No.</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.mobile}
                    onChange={(e) => setEditData({ ...editData, mobile: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formBeds">
                  <Form.Label>No. of Beds</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.beds}
                    onChange={(e) => setEditData({ ...editData, beds: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formFacilities">
                  <Form.Label>Facilities Provided</Form.Label>
                  <Form.Control
                    type="text"
                    value={editData.facilities}
                    onChange={(e) => setEditData({ ...editData, facilities: e.target.value })}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseEditModal}>Close</Button>
              <Button variant="primary " onClick={handleEditSubmit}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PrivateHospital;
