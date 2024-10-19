import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddPondsAndTalao = () => {
    const [heading, setHeading] = useState('');
    const [talaoName, setTalaoName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission (e.g., API call)
        console.log('Heading:', heading);
        console.log('Talao Name:', talaoName);
    };

    return (
        <>
          
            <div className="page-wrapper">
                <div className="content">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/index">City Profile</Link></li>
                        <li className="breadcrumb-item"><Link to="/ponds-talao">Ponds and Talao</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Ponds and Talao</li>
                    </ol>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-box">
                                <div className="card-block">
                                    <div className="row">
                                        <div className="col-sm-4 col-3">
                                            <h4 className="page-title">Add Tree Ponds and Talao</h4>
                                        </div>
                                    </div>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-3">Heading</label>
                                            <div className="col-md-5 mb-3">
                                                <Form.Control
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder=""
                                                    value={heading}
                                                    onChange={(e) => setHeading(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label className="col-form-label col-md-3">Talao Name <span className="text-danger">*</span></label>
                                            <div className="col-md-5 ">
                                                <Form.Control
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder=""
                                                    value={talaoName}
                                                    onChange={(e) => setTalaoName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <Button type="submit" className="btn btn-primary">Submit</Button>
                                    </Form>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
          
        </>
    );
};

export default AddPondsAndTalao;
