import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([
    {
      id: 1,
      heading: 'Public Disclosure',
      icon: 'assets/img/services/public_disclosure.png',
    },
    {
      id: 2,
      heading: 'Citizen Charter',
      icon: 'assets/img/services/citizen_charter.png',
    },
    {
      id: 3,
      heading: 'Right to Service',
      icon: 'assets/img/services/right_to_service.png',
    },
  ]);

  const handleDeleteModalOpen = (service) => {
    setSelectedService(service);
    setShowDeleteModal(true);
  };

  const handleEditModalOpen = (service) => {
    setSelectedService(service);
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setServices(services.filter(service => service.id !== selectedService.id));
    setShowDeleteModal(false);
    setSelectedService(null);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedService(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedService(null);
  };

  const handleSaveEdit = () => {
    setServices(services.map(service =>
      service.id === selectedService.id ? selectedService : service
    ));
    setShowEditModal(false);
    setSelectedService(null);
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedService((prevService) => ({
          ...prevService,
          [field]: reader.result, // set the file data as a URL
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#.">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Services</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Services</h4>
                  </div>
                  <div className="col-sm-8 col-9 text-end mb-3">
                    <Link
                      to="/Add_services"
                      className="btn btn-primary btn-rounded float-right"
                      style={{ borderRadius: '100px' }}
                    >
                      <i className="fa fa-plus"></i>+ Add Service
                    </Link>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Service Heading</th>
                        <th>Service Icon</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service, index) => (
                        <tr key={service.id}>
                          <td>{index + 1}</td>
                          <td>{service.heading}</td>
                          <td><img width="35px" src={service.icon} alt={service.heading} /></td>
                          <td>
                            <button className="btn btn-danger btn-sm m-t-10" onClick={() => handleDeleteModalOpen(service)}>Delete</button>
                            <button className="btn btn-success btn-sm m-t-10 mx-1" onClick={() => handleEditModalOpen(service)}>Edit</button>
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
        <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
          <Modal.Body>
            <h4 style={{ textAlign: 'center' }}>Are you sure you want to delete this item?</h4>
          </Modal.Body>
          <Modal.Footer style={{ justifyContent: 'center' }}>
            <Button variant="secondary" onClick={handleCloseDeleteModal}>Close</Button>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Modal */}
        {selectedService && (
          <div className={`modal fade ${showEditModal ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Service</h5>
                  <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Service Heading</label>
                      <input
                        type="text"
                        className="form-control"
                        value={selectedService.heading}
                        onChange={(e) =>
                          setSelectedService({ ...selectedService, heading: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Service Icon (Main Icon)</label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => handleFileChange(e, 'icon')}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseEditModal}>
                    Close
                  </button>
                  <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
