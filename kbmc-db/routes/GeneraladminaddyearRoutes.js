const express = require('express');
const router = express.Router();
const db = require('../config/db.js'); // Ensure you have your database connection setup
const multer = require('multer');
const path = require('path');

// Set up storage for PDF uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Ensure this directory exists
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        // Unique filename with timestamp
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Initialize multer
const upload = multer({ storage: storage });

// API to add a new entry with PDF
router.post('/generaladminaddyear', upload.single('pdf'), (req, res) => {
    const { year, meetingtype, pdfheading } = req.body; // Ensure these names match your client-side form
    const pdfPath = req.file ? req.file.path : null; // Path to the uploaded PDF

    // Check if required fields are provided
    if (!year || !meetingtype || !pdfheading || !pdfPath) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const sql = 'INSERT INTO generaladminaddyear (year, meetingtype, pdfheading, pdf) VALUES (?, ?, ?, ?)';
    db.query(sql, [year, meetingtype, pdfheading, pdfPath], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Entry added successfully', entryId: result.insertId });
    });
});

// API to get all entries
router.get('/generaladminaddyear', (req, res) => {
    const sql = 'SELECT * FROM generaladminaddyear';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
});

// API to get an entry by ID
router.get('/generaladminaddyear/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM generaladminaddyear WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.status(200).json(result[0]);
    });
});

// API to update an entry by ID
router.put('/generaladminaddyear/:id', upload.single('pdf'), (req, res) => {
    const { id } = req.params;
    const { year, meetingtype, pdfheading } = req.body;
    const pdfPath = req.file ? req.file.path : null; // Check if a new PDF is uploaded

    // Check if required fields are provided
    if (!year || !meetingtype || !pdfheading) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Prepare the SQL query
    let sql = 'UPDATE generaladminaddyear SET year = ?, meetingtype = ?, pdfheading = ?';
    const params = [year, meetingtype, pdfheading];

    // If a new PDF is uploaded, include it in the query
    if (pdfPath) {
        sql += ', pdf = ?';
        params.push(pdfPath);
    }
    sql += ' WHERE id = ?';
    params.push(id);

    db.query(sql, params, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.status(200).json({ message: 'Entry updated successfully' });
    });
});

// API to delete an entry by ID
router.delete('/generaladminaddyear/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM generaladminaddyear WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Entry not found' });
        }
        res.status(200).json({ message: 'Entry deleted successfully' });
    });
});

module.exports = router;
