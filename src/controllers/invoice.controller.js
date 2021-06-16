const InvoiceModel = require('../models/invoice.model');

// get all invoice list
exports.getInvoiceList = (req, res)=> {
    //console.log('here all invoices list');
    InvoiceModel.getAllInVoices((err, employees) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('Employees', employees);
        res.send(employees)
    })
}

// get employee by ID
exports.getInvoiceByID = (req, res)=>{
    console.log('get inv by id');
    InvoiceModel.getInvoiceByID(req.params.id, (err, invoice)=>{
        if(err)
        res.send(err);
        console.log('single employee data',invoice);
        res.send(invoice);
    })
}