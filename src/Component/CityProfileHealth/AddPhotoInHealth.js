import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const AddPhotoInHealth = ({ showModal, handleClose, handleAddPhoto }) => {
  const [photoTitle, setPhotoTitle] = useState("");
  const [photoImage, setPhotoImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photoTitle && photoImage) {
      handleAddPhoto({ title: photoTitle, image: photoImage });
      setPhotoTitle("");
      setPhotoImage("");
      handleClose(); // Close the modal after submission
    } else {
      alert("Please provide both title and image URL.");
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Photo for Health Section</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="photoTitle" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="photoTitle"
              value={photoTitle}
              onChange={(e) => setPhotoTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="photoImage" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="photoImage"
              value={photoImage}
              onChange={(e) => setPhotoImage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Photo
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPhotoInHealth;
