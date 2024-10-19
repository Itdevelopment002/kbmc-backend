import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRoads = () => {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [length, setLength] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here, such as making an API call
        console.log('Heading:', heading);
        console.log('Description:', description);
        console.log('Length:', length);
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">City Profile</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/roads">Roads</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Add Roads</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <h4 className="page-title">Add Roads</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3">Heading</label>
                                        <div className="col-md-5 mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Heading"
                                                value={heading}
                                                onChange={(e) => setHeading(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3">Description <span className="text-danger">*</span></label>
                                        <div className="col-md-5 mb-3">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Description"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3">Length <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Length"
                                                value={length}
                                                onChange={(e) => setLength(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddRoads;
