import React, { useState } from 'react';

const PublicDis = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'General Admin Department' },
    { id: 2, name: 'Audit Department' },
    { id: 3, name: 'Tax Department' },
  ]);

  const [newDepartment, setNewDepartment] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (newDepartment) {
      const newId = departments.length ? departments[departments.length - 1].id + 1 : 1;
      setDepartments([...departments, { id: newId, name: newDepartment }]);
      setNewDepartment('');
    }
  };

  const handleEditDepartment = (e) => {
    e.preventDefault();
    if (selectedDepartment) {
      const updatedDepartments = departments.map(department =>
        department.id === selectedDepartment.id
          ? { ...department, name: selectedDepartment.name }
          : department
      );
      setDepartments(updatedDepartments);
      setIsEditModalOpen(false);
      setSelectedDepartment(null);
    }
  };

  const handleDeleteDepartment = () => {
    setDepartments(departments.filter(department => department.id !== selectedDepartment.id));
    setIsDeleteModalOpen(false);
    setSelectedDepartment(null);
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.php">Home</a></li>
              <li className="breadcrumb-item active" aria-current="page">Public Disclosure</li>
            </ol>
          </nav>
          <div className="row">
            <div className="col-lg-12">
              <div className="card-box">
                <div className="card-block">
                  <div className="row">
                    <div className="col-sm-4 col-3">
                      <h4 className="page-title">Public Disclosure</h4>
                    </div>
                    <div className="col-sm-8 col-9 text-right">
                      <button className="btn btn-primary btn-rounded float-right" onClick={() => setIsEditModalOpen(true)}>
                        <i className="fa fa-plus"></i> Add Public Disclosure
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="card-block">
                    <form onSubmit={handleAddDepartment}>
                      <div className="form-group row">
                        <label className="col-form-label col-md-2">Department Name <span className="text-danger">*</span></label>
                        <div className="col-md-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            value={newDepartment}
                            onChange={(e) => setNewDepartment(e.target.value)}
                          />
                        </div>
                        <div className="col-md-2">
                          <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-bordered m-b-0">
                      <thead>
                        <tr>
                          <th width="10%">Sr. No.</th>
                          <th>Departments Name</th>
                          <th width="20%">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {departments.map((department, index) => (
                          <tr key={department.id}>
                            <td>{index + 1}</td>
                            <td>{department.name}</td>
                            <td>
                              <button className="btn btn-success btn-sm m-t-10" onClick={() => { setSelectedDepartment(department); setIsEditModalOpen(true); }}>Edit</button>
                              <button className="btn btn-danger btn-sm m-t-10" onClick={() => { setSelectedDepartment(department); setIsDeleteModalOpen(true); }}>Delete</button>
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
          {isDeleteModalOpen && (
            <div className="modal delete_modal fade text-center" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <h4>Are you sure you want to delete {selectedDepartment?.name}?</h4>
                  </div>
                  <div className="modal-footer text-center">
                    <button type="button" className="btn btn-primary btn-lg" onClick={() => setIsDeleteModalOpen(false)}>Close</button>
                    <button type="button" className="btn btn-danger btn-lg" onClick={handleDeleteDepartment}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Edit Modal */}
          {isEditModalOpen && (
            <div className="modal delete_modal fade text-center" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-body text-left">
                    <h4>Edit Department</h4>
                    <form onSubmit={handleEditDepartment}>
                      <div className="form-group row">
                        <label className="col-form-label col-md-12">Department Name</label>
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            value={selectedDepartment?.name || ''}
                            onChange={(e) => setSelectedDepartment({ ...selectedDepartment, name: e.target.value })}
                          />
                        </div>
                        <div className="col-md-2 m-t-10">
                          <input type="submit" className="btn btn-primary" value="Submit" />
                        </div>
                        <div className="col-md-2 m-t-10">
                          <button type="button" className="btn btn-danger" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
                        </div>
                      </div>
                    </form>
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

export default PublicDis;
