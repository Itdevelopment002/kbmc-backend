import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';


const AddElectric = () => {
    return (
        <div className="page-wrapper">
           

            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/index">City Profile</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="/electric">Electric</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Add Electric
                    </li>
                </ol>
                
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Electric</h4>
                                    </div>
                                </div>

                                <Form action="#">
                                    <Form.Group className="row">
                                        <Form.Label className="col-form-label col-md-3">
                                            Heading <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-5">
                                            <Form.Control type="text" className="form-control-lg" placeholder="" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="row">
                                        <Form.Label className="col-form-label col-md-3">
                                            Description <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-5">
                                            <Form.Control type="text" className="form-control-lg" placeholder="" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="row">
                                        <Form.Label className="col-form-label col-md-3">
                                            Mobile No. <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-5">
                                            <Form.Control type="text" className="form-control-lg" placeholder="" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group className="row">
                                        <Form.Label className="col-form-label col-md-3">
                                            Vendor Name <span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="col-md-5">
                                            <Form.Control type="text" className="form-control-lg" placeholder="" />
                                        </div>
                                    </Form.Group>

                                    <Button type="submit" className="btn btn-primary">
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddElectric;
