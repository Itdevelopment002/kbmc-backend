import React, { useState } from "react";
import { Link } from "react-router-dom";
const MunicipalProperties = () => {
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "Ruhi Sabhagruha",
      type: "Cultural Hall",
      address: "Yadava Nagar, Shirgaon, Badlapur East.",
    },
    {
      id: 2,
      name: "Ekdant 6 Shops",
      type: "Shops",
      address: "Katrap, Badlapur East.",
    },
    {
      id: 3,
      name: "Shreeji Sabhagruha",
      type: "Cultural Hall / Women Welfare Centre",
      address: "Katrap, Badlapur East.",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setProperties(properties.filter((property) => property.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert(`Edit functionality for property ID: ${id}`);
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
              Municipal Properties
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-lg-12">
            <div className="card-box">
              <div className="card-block">
                <div className="row">
                  <div className="col-sm-4 col-3">
                    <h4 className="page-title">Municipal Properties</h4>
                  </div>
                  <div className=" text-end mb-3">
                    <Link
                      to="/add-municipal"
                      className="btn btn-primary btn-rounded float-right"
                      style={{ borderRadius: '100px' }}
                    >
                      <i className="fa fa-plus"></i>+ Add Municipal Property 
                    </Link>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-bordered m-b-0">
                    <thead>
                      <tr>
                        <th width="10%">Sr. No.</th>
                        <th>Name</th>
                        <th>Shops / Sabhagruha / Community Hall / Gymnasium / Library</th>
                        <th>Address</th>
                        <th width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.map((property, index) => (
                        <tr key={property.id}>
                          <td>{index + 1}</td>
                          <td>{property.name}</td>
                          <td>{property.type}</td>
                          <td>{property.address}</td>
                          <td>
                            <button
                              className="btn btn-danger btn-sm m-t-10"
                              onClick={() => handleDelete(property.id)}
                              style={{ marginRight: "10px" }}
                            >
                              Delete
                            </button>
                            <button
                              className="btn btn-success btn-sm m-t-10"
                              onClick={() => handleEdit(property.id)}
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
              <a className="page-link" href="#" tabIndex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only"></span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MunicipalProperties;
