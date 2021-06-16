const express = require('express');
const router = express.Router();

const invoiceController = require('../controllers/invoice.controller');

// get all employees
router.get('/', invoiceController.getInvoiceList);

// get employee by ID
router.get('/:id',invoiceController.getInvoiceByID);

module.exports = router;