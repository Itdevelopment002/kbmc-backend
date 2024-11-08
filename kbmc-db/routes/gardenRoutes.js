const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const db = require('../config/db.js');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// POST route to handle garden addition
router.post('/gardens', upload.array('images'), (req, res) => {
    const { heading } = req.body;

    if (!heading) {
        return res.status(400).json({ message: 'Heading is required' });
    }

    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No images uploaded' });
    }

    // Get image file paths
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`); // Store file paths

    // Insert garden data into the database
    const query = 'INSERT INTO gardens (heading, images) VALUES (?, ?)';
    db.query(query, [heading, JSON.stringify(imagePaths)], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error adding garden', error: err });
        }
        res.status(201).json({ message: 'Garden added successfully', gardenId: result.insertId, images: imagePaths });
    });
});

// API to get all gardens
router.get('/gardens', (req, res) => {
    const sql = 'SELECT * FROM gardens';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
});

// API to get garden images by heading
router.get('/gardens/heading/:heading', (req, res) => {
    const { heading } = req.params;

    const sql = 'SELECT * FROM gardens WHERE heading = ?';
    db.query(sql, [heading], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Garden not found' });
        }

        const garden = result[0];
        res.status(200).json({
            id: garden.id,
            heading: garden.heading,
            images: JSON.parse(garden.images),
        });
    });
});

// API to delete a garden by ID
router.delete('/gardens/:id', (req, res) => {
    const { id } = req.params;

    // First, get the images of the garden
    const selectSql = 'SELECT images FROM gardens WHERE id = ?';
    db.query(selectSql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'Garden not found' });
        }

        const images = JSON.parse(result[0].images);

        // Delete the garden from the database
        const deleteSql = 'DELETE FROM gardens WHERE id = ?';
        db.query(deleteSql, [id], (err, deleteResult) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            // Delete the images from the uploads directory
            images.forEach(image => {
                const filePath = path.join(__dirname, '..', image); // Get the full path
                fs.unlink(filePath, fsErr => {
                    if (fsErr) {
                        console.error('Error deleting image:', fsErr);
                    }
                });
            });

            res.status(200).json({ message: 'Garden deleted successfully' });
        });
    });
});

// API to update a garden by ID (heading and optional images)
router.put('/gardens/:id', upload.array('images'), (req, res) => {
    const { id } = req.params;
    const { heading } = req.body;

    // Prepare the SQL update statement
    let updateSql = 'UPDATE gardens SET';
    const updateParams = [];

    if (heading) {
        updateSql += ' heading = ?';
        updateParams.push(heading);
    }

    // Handle new images if provided
    if (req.files && req.files.length > 0) {
        const newImagePaths = req.files.map(file => `/uploads/${file.filename}`);
        updateSql += updateParams.length > 0 ? ', images = ?' : ' images = ?'; // Properly handle commas
        updateParams.push(JSON.stringify(newImagePaths));
    }

    // If neither heading nor images were provided, return an error
    if (updateParams.length === 0) {
        return res.status(400).json({ message: 'No fields to update' });
    }

    updateSql += ' WHERE id = ?';
    updateParams.push(id);

    // Update the garden details in the database
    db.query(updateSql, updateParams, (err, updateResult) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Garden updated successfully' });
    });
});

// Export the router
module.exports = router;
