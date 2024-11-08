const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

// Get all property holders
router.get('/muncipal', (req, res) => {
  db.query('SELECT * FROM muncipal', (err, results) => {
    if (err) {
      console.error('Error fetching property holders:', err);
      return res.status(500).json({ error: 'Server Error' });
    }
    res.json(results);
  });
});

// Add a new property holder
router.post('/muncipal', (req, res) => {
  const { heading, name, propertyType, address } = req.body; // Updated to match your form fields
  if (!heading || !name || !propertyType || !address) {
    return res.status(400).json({ error: 'Heading, name, property Type, and address are required' });
  }

  const sql = 'INSERT INTO muncipal (heading, name, propertyType, address) VALUES (?, ?, ?, ?)'; // Ensure the column names in your database match
  db.query(sql, [heading, name, propertyType, address], (err, result) => {
    if (err) {
      console.error('Error adding property holder:', err);
      return res.status(500).json({ error: 'Server Error' });
    }
    res.status(201).json({ id: result.insertId, heading, name, propertyType, address }); // Updated response
  });
});

// Update a property holder
router.put('/muncipal/:id', (req, res) => {
  const { id } = req.params;
  const { heading, name, propertyType, address } = req.body; // Updated to match your form fields

  const sql = 'UPDATE muncipal SET heading = ?, name = ?, propertyType = ?, address = ? WHERE id = ?'; // Ensure the column names in your database match
  db.query(sql, [heading, name, propertyType, address, id], (err, result) => {
    if (err) {
      console.error('Error updating property holder:', err);
      return res.status(500).json({ error: 'Server Error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Property holder not found' });
    }
    res.json({ message: 'Property holder updated successfully' });
  });
});

// Delete a property holder
router.delete('/muncipal/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM muncipal WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting property holder:', err);
      return res.status(500).json({ error: 'Server Error' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Property holder not found' });
    }
    res.status(204).send();
  });
});

module.exports = router;
