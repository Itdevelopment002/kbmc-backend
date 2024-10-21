import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPondsAndTalao = ({ fetchPondsData }) => {
    const [talaoName, setTalaoName] = useState('');
    const [heading, setHeading] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/ponds-talao', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ heading, name: talaoName }),
            });

            const data = await response.json();
            if (data.message === 'Pond/Talao added successfully') {
                toast.success('Pond/Talao added successfully!');
                fetchPondsData(); // Fetch the updated list
                setHeading(''); // Clear the input fields
                setTalaoName('');
            } else {
                toast.error('Failed to add Pond/Talao');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error occurred while adding Pond/Talao');
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-box">
                        <div className="card-block">
                            <div className="row">
                                <div className="col-sm-4 col-3">
                                    <h4 className="page-title">Add Ponds and Talao</h4>
                                </div>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <div className="form-group row">
                                    <label className="col-form-label col-md-3">Heading</label>
                                    <div className="col-md-5 mb-3">
                                        <Form.Control
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Heading"
                                            value={heading}
                                            onChange={(e) => setHeading(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-form-label col-md-3">Talao Name <span className="text-danger">*</span></label>
                                    <div className="col-md-5 mb-3">
                                        <Form.Control
                                            type="text"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Talao Name"
                                            value={talaoName}
                                            onChange={(e) => setTalaoName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <Button type="submit" className="btn btn-primary">Submit</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default AddPondsAndTalao;
