import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api, { baseURL } from '../api';
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });
    return () => lightbox.destroy();
  }, [services]);

  const fetchServices = async () => {
    try {
      const response = await api.get("/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleDeleteModalOpen = (service) => {
    setSelectedService(service);
    setShowDeleteModal(true);
  };

  const handleEditModalOpen = async (serviceId) => {
    try {
      const response = await api.get(`/services/${serviceId}`);
      setSelectedService(response.data);
      setShowEditModal(true);
    } catch (error) {
      console.error("Error fetching service:", error);
      toast.error('Failed to fetch service details');
    }
  };

  const handleDelete = async () => {
    try {
      await api.delete(`/services/${selectedService.id}`);
      setServices(services.filter(service => service.id !== selectedService.id));
      setShowDeleteModal(false);
      toast.success('Service deleted successfully');
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error('Failed to delete service');
    }
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedService(null);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedService(null);
  };

  const handleSaveEdit = async () => {
    const formData = new FormData();
    if (selectedService.service_heading) formData.append('serviceHeading', selectedService.service_heading);
    if (selectedService.service_link) formData.append('serviceLink', selectedService.service_link);
    if (selectedService.mainIcon) formData.append('mainIcon', selectedService.mainIcon);
    if (selectedService.hoverIcon) formData.append('hoverIcon', selectedService.hoverIcon);

    try {
      await api.put(`/services/${selectedService.id}`, formData);
      fetchServices();
      setShowEditModal(false);
      toast.success('Service updated successfully');
    } catch (error) {
      console.error("Error updating service:", error);
      toast.error('Failed to update service');
    }
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedService((prevService) => ({ ...prevService, [field]: file }));
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                    <div className="col-sm-8 col-9 text-right m-b-20">
                      <Link to="/add-services" className="btn btn-primary btn-rounded float-right"><i className="fa fa-plus"></i> Add Service</Link>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Service Heading</th>
                          <th>Service Link</th>
                          <th>Service Icon</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((service, index) => (
                          <tr key={service.id}>
                            <td>{index + 1}</td>
                            <td>{service.service_heading}</td>
                            <td>{service.service_link}</td>
                            <td>
                              <Link to={`${baseURL}/${service.main_icon_path}`} className="glightbox" data-gallery="slider-images">
                                <img width="35px" src={`${baseURL}/${service.main_icon_path}`} alt={service.service_heading} />
                              </Link>
                            </td>
                            <td>
                              <button className="btn btn-danger btn-sm m-t-10" onClick={() => handleDeleteModalOpen(service)}>Delete</button>
                              <button className="btn btn-success btn-sm m-t-10 mx-1" onClick={() => handleEditModalOpen(service.id)}>Edit</button>
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

          {/* Edit Modal */}
          <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true" style={{ display: showEditModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="editModalLabel">Edit Service</h5>
                  <button type="button" className="close" onClick={handleCloseEditModal}>&times;</button>
                </div>
                <div className="modal-body">
                  <input type="text" className="form-control mb-2" placeholder="Service Heading" value={selectedService?.service_heading || ''} onChange={(e) => setSelectedService({ ...selectedService, service_heading: e.target.value })} />
                  <input type="text" className="form-control mb-2" placeholder="Service Link" value={selectedService?.service_link || ''} onChange={(e) => setSelectedService({ ...selectedService, service_link: e.target.value })} />
                  <input type="file" className="form-control mb-2" onChange={(e) => handleFileChange(e, 'mainIcon')} />
                  <input type="file" className="form-control mb-2" onChange={(e) => handleFileChange(e, 'hoverIcon')} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseEditModal}>Close</button>
                  <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>Save changes</button>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal */}
          <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true" style={{ display: showDeleteModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <h4>Are you sure you want to delete this service?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleCloseDeleteModal}>Close</button>
                  <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
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

export default Services;
