var dbConn  = require('../../config/db.config');

var Invoice = function(invoice){
    this.account_country = invoice.account_country
    this.account_name = invoice.account_name
    this.amount_paid = invoice.amount_paid
    this.amount_due = invoice.amount_due
    this.currency = invoice.currency
    this.customer = invoice.customer
    this.hours_of_work     =   invoice.hours_of_work;
    this.rate_per_hour      =   invoice.rate_per_hour;
    this.work_relate_expenses          =   invoice.work_relate_expenses;
    this.material          =   invoice.material;
    this.status         =   invoice.status ? invoice.status : 1;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}
// "account_country": "Ind",
// "account_name": "Rawshan",
// "amount_paid": "0.00",
// "amount_due": "100.00",
// "currency": "RS",
// "customer": "Microsoft",
// "hours_of_work": "1.00",
// "rate_per_hour": "5.00",
// "work_relate_expenses": "10.00",
// "material": "PC",
// "status": 0,
// "created_at": "2021-02-18T05:15:45.000Z",
// "updated_at": "2021-06-15T21:27:43.000Z"

// get all employees
Invoice.getAllInVoices = (result) =>{
    dbConn.query('SELECT * FROM invoicess', (err, res)=>{
        if(err){
            console.log('Error while fetching invoices', err);
            result(null,err);
        }else{
            console.log('Invoices fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
Invoice.getInvoiceByID = (id, result)=>{
    dbConn.query('SELECT * FROM invoicess WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching invoice by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}


//create new Invoice

Invoice.createInvoice=(invoiceRequestData, result) => {
  dbConn.query('INSERT INTO invoicess SET ? ', invoiceRequestData, (err, res) => {
    if(err) {
      console.log("Error while inserting data");
      result(null, err)
    } else {
      console.log("Invoice created successfully");
      result(null, res)
    }
  })
}

//update Invoice

Invoice.updateInvoice = (id, invoiceReqData, result) => {
    dbConn.query("UPDATE employees SET account_country=?,account_name=?,amount_paid=?,amount_due=?,currency=?,customer=?,hours_of_work=?,rate_per_hour=?,work_related_expenses=?,material=?,status=?, WHERE id = ?", [invoiceReqData.account_country,invoiceReqData.account_name,invoiceReqData.amount_paid,invoiceReqData.amount_due,invoiceReqData.currency,invoiceReqData.customer,invoiceReqData.hours_of_work,invoiceReqData.rate_per_hour,invoiceReqData.work_relate_expenses,invoiceReqData.material,invoiceReqData.status, id], (err, res)=>{
        if(err){
            console.log('Error while updating the invoice');
            result(null, err);
        }else{
            console.log("invoice updated successfully");
            result(null, res);
        }
    });
}



module.exports = Invoice;