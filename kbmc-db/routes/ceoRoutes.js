const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const db = require('../config/db.js'); // Assuming db is configured

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory to store the images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique name
    },
});

// Increase the limit for file uploads
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
});

// POST API to add a new CEO
router.post('/ceos', upload.single('coImage'), (req, res) => {
    const { coName, designation, email } = req.body;

    if (!coName || !designation || !email) {
        return res.status(400).json({ message: 'Name, designation, and email are required' });
    }

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const sql = 'INSERT INTO ceos (coName, designation, email, image_path) VALUES (?, ?, ?, ?)';
    db.query(sql, [coName, designation, email, imagePath], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'CEO added successfully', ceoId: result.insertId });
    });
});

// GET API to fetch all CEOs
router.get('/ceos', (req, res) => {
    const sql = 'SELECT * FROM ceos';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
});

// GET API to fetch CEO by ID
router.get('/ceos/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM ceos WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'CEO not found' });
        }
        res.status(200).json(result[0]);
    });
});

// PUT API to update a CEO by ID (with optional image update)
router.put('/ceos/:id', upload.single('coImage'), (req, res) => {
    const { id } = req.params;
    const { coName, designation, email } = req.body;

    let updateSql = 'UPDATE ceos SET';
    const updateParams = [];

    if (coName) {
        updateSql += ' coName = ?';
        updateParams.push(coName);
    }
    if (designation) {
        updateSql += updateParams.length > 0 ? ', designation = ?' : ' designation = ?';
        updateParams.push(designation);
    }
    if (email) {
        updateSql += updateParams.length > 0 ? ', email = ?' : ' email = ?';
        updateParams.push(email);
    }

    let imagePath;
    if (req.file) {
        imagePath = `/uploads/${req.file.filename}`;
        updateSql += updateParams.length > 0 ? ', image_path = ?' : ' image_path = ?';
        updateParams.push(imagePath);
    }

    if (updateParams.length === 0) {
        return res.status(400).json({ message: 'No fields to update' });
    }

    updateSql += ' WHERE id = ?';
    updateParams.push(id);

    const selectSql = 'SELECT image_path FROM ceos WHERE id = ?';
    db.query(selectSql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'CEO not found' });
        }

        const oldImagePath = result[0].image_path;

        db.query(updateSql, updateParams, (err, updateResult) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            // Delete the old image if a new one was uploaded
            if (req.file && oldImagePath) {
                const fullPath = path.join(__dirname, '..', oldImagePath.replace(/^\//, ''));
                fs.unlink(fullPath, (fsErr) => {
                    if (fsErr) {
                        console.error('Error deleting old image:', fsErr);
                    }
                });
            }

            res.status(200).json({ message: 'CEO updated successfully' });
        });
    });
});

// DELETE API to delete a CEO by ID
router.delete('/ceos/:id', (req, res) => {
    const { id } = req.params;

    const selectSql = 'SELECT image_path FROM ceos WHERE id = ?';
    db.query(selectSql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'CEO not found' });
        }

        const imagePath = result[0].image_path;

        const deleteSql = 'DELETE FROM ceos WHERE id = ?';
        db.query(deleteSql, [id], (err, deleteResult) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            // Delete the image from the filesystem if it exists
            if (imagePath) {
                fs.unlink(path.join(__dirname, '..', imagePath), (fsErr) => {
                    if (fsErr) {
                        console.error('Error deleting image:', fsErr);
                    }
                });
            }

            res.status(200).json({ message: 'CEO deleted successfully' });
        });
    });
});

module.exports = router;
