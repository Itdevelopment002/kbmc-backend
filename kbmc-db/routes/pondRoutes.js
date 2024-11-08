const express = require('express');
const router = express.Router();
const db = require('../config/db.js'); // Ensure you have your database connection setup

// API to add a news update
router.post('/ponds-talao', (req, res) => {
    const { name } = req.body;

    // Check if description is provided
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    const sql = 'INSERT INTO ponds_table (name) VALUES (?)';
    db.query(sql, [name], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Ponds/Talao added successfully', pondsId: result.insertId });
    });
});

// API to get all news updates
router.get('/ponds-talao', (req, res) => {
    const sql = 'SELECT * FROM ponds_table';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json(results);
    });
});

// API to get a news update by ID
router.get('/ponds-talao/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM ponds_table WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Ponds/Talao not found' });
        }
        res.status(200).json(result[0]);
    });
});

// API to update a news update by ID
router.put('/ponds-talao/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    // Check if description is provided
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    const sql = 'UPDATE ponds_table SET name = ? WHERE id = ?';
    db.query(sql, [name, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ponds/Talao not found' });
        }
        res.status(200).json({ message: 'POnds/Talao updated successfully' });
    });
});

// API to delete a news update by ID
router.delete('/ponds-talao/:id', (req, res) => {
    const { id } = req.params;

    const sql = 'DELETE FROM ponds_table WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Ponds/Talao not found' });
        }
        res.status(200).json({ message: 'Ponds/Talao deleted successfully' });
    });
});

module.exports = router;
