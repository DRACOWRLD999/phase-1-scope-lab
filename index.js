// Write your solution in this file!

window.customerName = 'bob';
window.bestCustomer = undefined;

function upperCaseCustomerName() {
  window.customerName = window.customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  window.bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}
