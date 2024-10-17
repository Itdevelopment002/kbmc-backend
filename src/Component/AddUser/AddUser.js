import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddUser = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    department: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('User added:', formData);
  };

  const handleDelete = () => {
    console.log('User deleted.');
    setShowDeleteModal(false);
  };

  const handleEdit = () => {
    console.log('User edited:', formData);
    setShowEditModal(false);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href="#/user">User</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add User</li>
          </ol>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Add User</h4>
                    </div>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-4">
                        <Form.Group>
                          <Form.Label>User Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group style={{ position: 'relative' }}>
                          <Form.Label>Type of Department</Form.Label>
                          <Form.Control
                            as="select"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            required
                            style={{ paddingRight: '35px' }} // Create space for icon
                          >
                            <option value="">Select Department</option>
                            <option>Account Department</option>
                            <option>Tax Department</option>
                          </Form.Control>
                          <i
                            className="fa fa-chevron-down"
                            style={{
                              position: 'absolute',
                              top: '50%',
                              right: '10px',
                              transform: 'translateY(-50%)',
                              pointerEvents: 'none',
                              color: '#555',
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <Button type="submit" className="btn btn-primary mt-3">Submit</Button> {/* Bootstrap margin-top */}
                  </Form>
                </div>
              </div>
            </div>
          </div>

          {/* Delete Modal */}
          <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
            <Modal.Body>
              <h4>Are you sure you want to delete this item?</h4>
            </Modal.Body>
            <Modal.Footer className="text-center">
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>Close</Button>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </Modal.Footer>
          </Modal>

          {/* Edit Modal */}
          <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Type of Department</Form.Label>
                  <Form.Control
                    as="select"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option>Account Department</option>
                    <option>Tax Department</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
              <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AddUser;

