import React from 'react';


const AddPrivateHospital = () => {
  return (
    <div className="page-wrapper">
     
      <div className="content">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <a href="/private-hospital">Private Hospital</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Private Hospital
          </li>
        </ol>
        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row mb-4">
                  <div className="col">
                    <h4 className="page-title">Add Private Hospital</h4>
                  </div>
                </div>
                <form action="#">
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <div className="form-group">
                        <label>Hospital Name</label>
                        <input type="text" className="form-control" placeholder="Enter hospital name" />
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="form-group">
                        <label>Division</label>
                        <select className="form-control">
                          <option>West</option>
                          <option>East</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-5 mb-3">
                      <div className="form-group">
                        <label>Principal Doctor's Specialty</label>
                        <input type="text" className="form-control" placeholder="Enter specialty" />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Enter address" />
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="form-group">
                        <label>Phone No.</label>
                        <input type="text" className="form-control" placeholder="Enter phone number" />
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="form-group">
                        <label>Mobile No.</label>
                        <input type="text" className="form-control" placeholder="Enter mobile number" />
                      </div>
                    </div>
                    <div className="col-md-2 mb-3">
                      <div className="form-group">
                        <label>No. of Beds</label>
                        <input type="text" className="form-control" placeholder="Enter number of beds" />
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="form-group">
                        <label>Facilities Provided</label>
                        <input type="text" className="form-control" placeholder="Enter facilities" />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Delete Modal */}
        <div className="modal delete_modal fade text-center" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h4>Are you sure you want to delete this item?</h4>
              </div>
              <div className="modal-footer text-center">
                <button type="button" className="btn btn-primary btn-lg" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger btn-lg">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPrivateHospital;
