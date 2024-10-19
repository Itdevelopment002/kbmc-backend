import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Add_PhotoGallery = () => {
    const [galleryName, setGalleryName] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Photo Gallery Name:', galleryName);
        console.log('Uploaded File:', file);
        // Here, you would typically send the data to your server
    };

    return (
        <div className="page-wrapper">
            <div className="content">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/photo-gallery">Photo Gallery</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Photo Gallery</li>
                </ol>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-box">
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-sm-4 col-3">
                                        <h4 className="page-title">Add Photo Gallery</h4>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-3">Photo Gallery Name <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder=""
                                                value={galleryName}
                                                onChange={(e) => setGalleryName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mt-3">
                                        <label className="col-form-label col-lg-3">Upload Photo Gallery <span className="text-danger">*</span></label>
                                        <div className="col-md-4">
                                            <div className="input-group mb-3">
                                                <input
                                                    type="file"
                                                    id="userfile"
                                                    name="userfile"
                                                    className="form-control"
                                                    onChange={(e) => setFile(e.target.files[0])}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value="Upload" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add_PhotoGallery;
