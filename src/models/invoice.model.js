var dbConn  = require('../../config/db.config');

var Invoice = function(invoice){
    this.hours_of_work     =   invoice.hours_of_work;
    this.rate_per_hour      =   invoice.rate_per_hour;
    this.work_relate_expenses          =   invoice.work_relate_expenses;
    this.material          =   invoice.material;
    this.status         =   invoice.status ? invoice.status : 1;
    this.is_paid         =   invoice.is_paid ? invoice.is_paid : 0;
    this.created_at     =   new Date();
    this.updated_at     =   new Date();
}

// get all employees
Invoice.getAllInVoices = (result) =>{
    dbConn.query('SELECT * FROM invoice', (err, res)=>{
        if(err){
            console.log('Error while fetching invoices', err);
            result(null,err);
        }else{
            console.log('Invoices fetched successfully');
            result(null,res);
        }
    })
}

module.exports = Invoice;