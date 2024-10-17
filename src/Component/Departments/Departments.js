import React, { useState } from 'react';
import { Modal, Button, Table, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Departments = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedHod, setEditedHod] = useState('');

  const departments = [
    { id: 1, name: 'General Admin Department', hod: 'HOD Name' },
    { id: 2, name: 'Audit Department', hod: 'HOD Name' },
    { id: 3, name: 'Tax Department', hod: 'HOD Name' },
  ];

  const handleDelete = (id) => {
    setSelectedDepartment(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    console.log(`Deleted department with ID: ${selectedDepartment}`);
    setShowDeleteModal(false);
  };

  const handleEdit = (department) => {
    setSelectedDepartment(department.id);
    setEditedName(department.name);
    setEditedHod(department.hod);
    setShowEditModal(true);
  };

  const confirmEdit = () => {
    console.log(`Edited department with ID: ${selectedDepartment}`);
    console.log(`New Name: ${editedName}, New HOD: ${editedHod}`);
    setShowEditModal(false);
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#/">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Departments</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Departments</h4>
                    </div>
                    <div className="text-end mb-3" style={{borderRadius:"100px"}}>
                      <Link to="/adddep">
                        <button className="btn btn-primary">+ Add departments</button>
                      </Link>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Departments Name</th>
                          <th>Name of HOD</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departments.map((department, index) => (
                          <tr key={department.id}>
                            <td>{index + 1}</td>
                            <td>{department.name}</td>
                            <td>{department.hod}</td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                className="me-2" // Bootstrap class to add margin end
                                onClick={() => handleDelete(department.id)}
                              >
                                Delete
                              </Button>
                              <Button 
                                variant="success" 
                                size="sm" 
                                onClick={() => handleEdit(department)}
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

          {/* Pagination */}
          <Pagination>
            <Pagination.Prev disabled />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

          {/* Delete Modal */}
          <Modal
            show={showDeleteModal}
            onHide={() => setShowDeleteModal(false)}
            centered
          >
            <Modal.Body>
              <h4>Are you sure you want to delete this item?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                Close
              </Button>
              <Button variant="danger" onClick={confirmDelete}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Edit Modal */}
          <Modal
            show={showEditModal}
            onHide={() => setShowEditModal(false)}
            centered
          >
            <Modal.Body>
              <h4>Edit Department</h4>
              <div className="mb-3">
                <label htmlFor="departmentName" className="form-label">Department Name</label>
                <input
                  type="text"
                  id="departmentName"
                  className="form-control"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="hodName" className="form-label">HOD Name</label>
                <input
                  type="text"
                  id="hodName"
                  className="form-control"
                  value={editedHod}
                  onChange={(e) => setEditedHod(e.target.value)}
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                Close
              </Button>
              <Button variant="success" onClick={confirmEdit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Departments;
