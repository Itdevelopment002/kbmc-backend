import React from 'react';
import { Link } from 'react-router-dom';

const AddTreeCensus = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="index">City Profile</Link></li>
                    <li className="breadcrumb-item"><Link to="tree-census">Tree Census</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Tree Census</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Tree Census</h4>
                                    </div>
                                </div>
                                <form action="#">
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3 mb-3">Heading <span className="text-danger"></span></label>
                                        <div className="col-md-5">
                                            <input type="text" className="form-control form-control-lg" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3 mb-3">Description <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <input type="text" className="form-control form-control-lg" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3 mb-3">Total <span className="text-danger">*</span></label>
                                        <div className="col-md-5">
                                            <input type="text" className="form-control form-control-lg" placeholder="" />
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary mt-2" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTreeCensus;
