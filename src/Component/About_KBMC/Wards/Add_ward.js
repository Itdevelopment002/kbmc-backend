import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddWard = () => {
    const [wardNo, setWardNo] = useState('');
    const [wardName, setWardName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add the logic to handle the form submission here,
        // such as sending the data to an API or updating the state
        console.log('Ward No:', wardNo);
        console.log('Ward Name:', wardName);
        // Reset form
        setWardNo('');
        setWardName('');
    };

    return (
        <div className="page-wrapper">
            
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="index.php">About KBMC</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="ward.php">Ward</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Add Ward
                    </li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Ward</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">
                                            Ward No. <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder=""
                                                value={wardNo}
                                                onChange={(e) => setWardNo(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-md-2">
                                            Ward Name <span className="text-danger">*</span>
                                        </label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder=""
                                                value={wardName}
                                                onChange={(e) => setWardName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <div className="col-md-4 md-2">
                                            <input type="submit" className="btn btn-primary" value="Submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default AddWard;
