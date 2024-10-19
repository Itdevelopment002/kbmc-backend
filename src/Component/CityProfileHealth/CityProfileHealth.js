import React, { useState } from "react"; // Import useState
import { Modal } from "react-bootstrap"; // If you're using Bootstrap modals
import { Link } from "react-router-dom";

const CityProfileHealth = () => {
  const [showAddNewModal, setShowAddNewModal] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  const handleShow = (section) => {
    setCurrentSection(section);
    setShowAddNewModal(true);
  };
  const [showModal, setShowModal] = useState(false);

  const handleAddNewClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleClose = () => setShowAddNewModal(false);

  const handleSaveChanges = () => {
    // Implement your save functionality here
    console.log(`Saved changes for ${currentSection}`);
    handleClose(); // Close the modal after saving
  };

  return (
    <div className="page-wrapper">
      <div className="content">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#.">City Profile</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Health
            </li>
          </ol>
        </nav>

        {/* Health Department Section */}
        <div className="row mt-4">
          <div className="col-lg-12 mt-4">
            <div className="card-box">
              <div className="card-block">
                <div className="row align-items-center mb-4">
                  <div className="col-sm-6 col-4">
                    <h4 className="page-title">Works under Health Department</h4>
                  </div>
                  <div className="text-end mb-3">
                    <Link
                      to="#"
                      onClick={() => handleShow("Health Department")}
                      className="btn btn-primary btn-rounded float-right"
                      style={{ borderRadius: "100px" }}
                    >
                      <i className="fa fa-plus"></i> + Add New
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Description</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          srNo: "01",
                          description:
                            "Ward no. From 1 to 47, the work of road cleaning and door to door collection and transportation of wet and dry waste is done through the department.",
                        },
                        {
                          srNo: "02",
                          description:
                            "Zone no.1 to 6 is sprayed ward wise with mosquito repellent fume by fogging machine.",
                        },
                        {
                          srNo: "03",
                          description:
                            "Daily cleaning of public and community toilets in zone no.1 to 6 Maintenance and minor repairs are carried out.",
                        },
                      ].map((item) => (
                        <tr key={item.srNo}>
                          <td>{item.srNo}</td>
                          <td>{item.description}</td>
                          <td>
                            <button className="btn btn-danger btn-sm m-t-10">
                              Delete
                            </button>
                            <button className="btn btn-success btn-sm m-t-10 mx-2">
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

        {/* Zone Wise Names of Sanitation Inspectors Section */}
        <div className="row mt-4">
          <div className="col-lg-12 mt-4">
            <div className="card-box">
              <div className="card-block">
                <div className="row align-items-center mb-4">
                  <div className="col-sm-6 col-8">
                    <h4 className="page-title">Zone Wise Names of Sanitation Inspectors</h4>
                  </div>
                  <div className="col-sm-6 col-4 text-end">
                    <button
                      style={{ borderRadius: "100px" }}
                      className="btn btn-primary btn-rounded float-end"
                      onClick={() => handleShow("Sanitation Inspectors")}
                    >
                      <i className="fa fa-plus"></i> + Add New
                    </button>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Zone No.</th>
                        <th>Names of Sanitary Inspectors</th>
                        <th>Mobile No.</th>
                        <th colSpan="4">Ward No.</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1/2</td>
                        <td>Mr. Akash Mhatre</td>
                        <td>7666505666</td>
                        <td colSpan="1">1,2,3</td>
                        <td colSpan="1">3,20,21,22</td>
                        <td colSpan="1">18,19</td>
                        <td colSpan="1">23,24</td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Mr. Ashish Jadhav</td>
                        <td>8380007027</td>
                        <td colSpan="1">4,5,16,17</td>
                        <td colSpan="1">6,7,13,14</td>
                        <td colSpan="1">8,10</td>
                        <td></td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
 {/* Treatment Facility Section */}
 <div className="row mt-4">
          <div className="col-lg-12 mt-4">
            <div className="card-box">
              <div className="card-block">
                <div className="row align-items-center mb-4">
                  <div className="col-sm-6 col-8">
                    <h4 className="page-title">Treatment Facility</h4>
                  </div>
                  <div className="text-end mb-3">
                    <Link
                      to="#"
                      onClick={() => handleShow("Treatment Facility")}
                      className="btn btn-primary btn-rounded float-right"
                      style={{ borderRadius: "100px" }}
                    >
                      <i className="fa fa-plus"></i> + Add New
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Name of the Plant</th>
                        <th>Location of the Plant</th>
                        <th>Designed Plant Capacity (MTD)</th>
                        <th>Present waste Intake (MTD)</th>
                        <th>Output of plant</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td>Biogas Plant, Vadavali</td>
                        <td>S.No. 178, Vadvali Smashan Bhoomi, Vadvali Gaon, Badlapur (W)</td>
                        <td>5</td>
                        <td>5</td>
                        <td>Electricity</td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>Decentralized Pit Composting Plant, Manjarli</td>
                        <td>S.No. 55, Manjarli Vidyapeeth Road, Manjarli, Badlapur (W)</td>
                        <td>1</td>
                        <td>1</td>
                        <td>Compost</td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Name of Ward Wise Litigations Section */}
        <div className="row mt-4">
          <div className="col-lg-12 mt-4">
            <div className="card-box">
              <div className="card-block">
                <div className="row align-items-center mb-4">
                  <div className="col-sm-6 col-8">
                    <h4 className="page-title">Name of Ward Wise Litigations</h4>
                  </div>
                  <div className="text-end mb-3">
                    <Link
                      to="#"
                      onClick={() => handleShow("Ward Wise Litigations")}
                      className="btn btn-primary btn-rounded float-right"
                      style={{ borderRadius: "100px" }}
                    >
                      <i className="fa fa-plus"></i> + Add New
                    </Link>
                  </div>
                </div>

                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Name of the Party</th>
                        <th>Details of Litigation</th>
                        <th>Date of Filing</th>
                        <th>Current Status</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01</td>
                        <td>Vijay Gohil</td>
                        <td>Against the new toll tax for the road</td>
                        <td>22/05/2022</td>
                        <td>Pending</td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>Shiv Kumar</td>
                        <td>Against the construction of a new bus station</td>
                        <td>15/08/2022</td>
                        <td>Settled</td>
                        <td>
                          <button className="btn btn-danger btn-sm m-t-10">Delete</button>
                          <button className="btn btn-success btn-sm m-t-10 mx-2">Edit</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
      <div className="col-lg-12 mt-4">
        <div className="card-box">
          <div className="card-block">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Photo Gallery</h4>
              </div>
              <div className="text-end mb-3">
                <button
                  onClick={handleAddNewClick}
                  className="btn btn-primary btn-rounded float-right"
                  style={{ borderRadius: '100px' }}
                >
                  <i className="fa fa-plus"></i> + Add New
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered m-b-0">
                <thead>
                  <tr>
                    <th width="10%">Sr. No.</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01</td>
                    <td>Bio Gas Plant, Vadavali</td>
                    <td>
                      <img
                        src="img/photos/1.jpg"
                        alt="Bio Gas Plant"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td>
                      <a href="#." data-toggle="modal" data-target="#deleteModal" className="btn btn-danger btn-sm m-t-10">Delete</a>
                      <a href="#." data-toggle="modal" data-target="#editModal" className="btn btn-success btn-sm m-t-10 mx-2">Edit</a>
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Decentralized Pit Composting Plant, Manjarli</td>
                    <td>
                      <img
                        src="img/photos/2.jpg"
                        alt="Decentralized Pit Composting Plant"
                        style={{ width: '100px', height: '100px' }}
                      />
                    </td>
                    <td>
                      <a href="#." data-toggle="modal" data-target="#deleteModal" className="btn btn-danger btn-sm m-t-10">Delete</a>
                      <a href="#." data-toggle="modal" data-target="#editModal" className="btn btn-success btn-sm m-t-10 mx-2">Edit</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Adding New Photo */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} onClick={handleCloseModal}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Photo</h5>
                
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter title" />
                  </div>
                  <div className="form-group">
                    <label>Upload Image</label>
                    <input type="file" className="form-control" />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

      {/* Modal for adding new entries */}
      <Modal show={showAddNewModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New {currentSection}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your form for adding new entries here */}
          <form>
            <div className="mb-3">
              <label htmlFor="entryDescription" className="form-label">
                Description
              </label>
              <input type="text" className="form-control" id="entryDescription" />
            </div>
            {/* Add more fields as necessary */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CityProfileHealth;
