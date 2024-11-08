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

router.post('/award-images', upload.single('awardImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Image file is required' });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    const sql = 'INSERT INTO award_images (image_path) VALUES (?)';
    db.query(sql, [imagePath], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Image added successfully', imageId: result.insertId });
    });
});

router.get('/award-images', (req, res) => {
    const sql = 'SELECT * FROM award_images';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
});

// GET API to fetch an image by ID
router.get('/award-images/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM award_images WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }
        res.status(200).json(result[0]);
    });
});

router.put('/award-images/:id', upload.single('awardImage'), (req, res) => {
    const { id } = req.params;

    if (!req.file) {
        return res.status(400).json({ message: 'No image file provided for update' });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    const sql = 'UPDATE award_images SET image_path = ? WHERE id = ?';

    const selectSql = 'SELECT image_path FROM award_images WHERE id = ?';
    db.query(selectSql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }

        const oldImagePath = result[0].image_path;

        db.query(sql, [imagePath, id], (err, updateResult) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            // Delete the old image if a new one was uploaded
            const fullPath = path.join(__dirname, '..', oldImagePath.replace(/^\//, ''));
            fs.unlink(fullPath, (fsErr) => {
                if (fsErr) {
                    console.error('Error deleting old image:', fsErr);
                }
            });

            res.status(200).json({ message: 'Image updated successfully' });
        });
    });
});

router.delete('/award-images/:id', (req, res) => {
    const { id } = req.params;

    const selectSql = 'SELECT image_path FROM award_images WHERE id = ?';
    db.query(selectSql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Image not found' });
        }

        const imagePath = result[0].image_path;

        const deleteSql = 'DELETE FROM award_images WHERE id = ?';
        db.query(deleteSql, [id], (err, deleteResult) => {
            if (err) {
                return res.status(500).json({ message: 'Database error', error: err });
            }

            // Delete the image from the filesystem if it exists
            fs.unlink(path.join(__dirname, '..', imagePath), (fsErr) => {
                if (fsErr) {
                    console.error('Error deleting image:', fsErr);
                }
            });

            res.status(200).json({ message: 'Image deleted successfully' });
        });
    });
});

module.exports = router;
