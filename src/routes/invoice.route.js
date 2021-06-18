const express = require('express');
const router = express.Router();

const invoiceController = require('../controllers/invoice.controller');

// get all invoices
router.get('/', invoiceController.getInvoiceList);

// get invoice by ID
router.get('/:id',invoiceController.getInvoiceByID);

// create new invoice
router.post('/', invoiceController.createNewInvoice)

//update invoice
router.put('/:id', invoiceController.updateInvoice)

module.exports = router;