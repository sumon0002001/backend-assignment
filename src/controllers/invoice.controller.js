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

// create new invoice

exports.createNewInvoice = (req, res) => {
    console.log("req data", req.body);
    const invoiceReqData = new InvoiceModel(req.body);
    console.log('invoiceReqData', invoiceReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log("valid data");
        InvoiceModel.createInvoice(invoiceReqData, (err, invoice)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Invoice Created Successfully', data: invoice.insertId})
        })
    }
}

exports.updateInvoice = (req, res) => {
    const invoiceReqData = new InvoiceModel(req.body);
    console.log('invoiceReqData update', invoiceReqData);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        console.log("valid data");
        InvoiceModel.updateInvoice(req.params.id, invoiceReqData, (err, invoice)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Invoice Updated Successfully', data: invoice.insertId})
        })
    }
  
}