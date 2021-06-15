const express = require('express');
const router = express.Router();

const invoiceController = require('../controllers/invoice.controller');

// get all employees
router.get('/', invoiceController.getInvoiceList);

module.exports = router;