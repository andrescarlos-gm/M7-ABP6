const testConnection = require('./orm/testConnection');
testConnection();

const Client = require('./orm/client');
const Invoice = require('./orm/invoice');
const Payment_details = require('./orm/payment-details');
const Product = require('./orm/product');
const Cartdetails = require('./orm/shopping-Cart-Details');
const Shopping_Cart = require('./orm/shopping-Cart');
const Supplier = require('./orm/supplier');

const createClientTable = async () => {
    const result = await Client.sync({ force: true });
    console.log('createClientTable', result);
};
const createInvoiceTable = async () => {
    const result = await Invoice.sync({ force: true });
    console.log('createInvoiceTable', result);
};
const createPayment_detailsTable = async () => {
    const result = await Payment_details.sync({ force: true });
    console.log('createPayment_detailsTable', result);
};
const createProductTable = async () => {
    const result = await Product.sync({ force: true });
    console.log('createProductTable', result);
};
const createCartDetailsTable = async () => {
    const result = await Cartdetails.sync({ force: true });
    console.log('createCartDetailsTable', result);
};
const createShopping_CartTable = async () => {
    const result = await Shopping_Cart.sync({ force: true });
    console.log('createCartDetailsTable', result);
};
const createSupplierTable = async () => {
    const result = await Supplier.sync({ force: true });
    console.log('createCartDetailsTable', result);
};