const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");
const submit = document.getElementById("submit");



function updatePaymentResult() {
    if (visabtn.checked) {
        paymentresult.textContent = 'You selected Visa.';
    } else if (mastercard.checked) {
        paymentresult.textContent = 'You selected Mastercard.';
    } else if (paypal.checked) {
        paymentresult.textContent = 'You selected PayPal.';
    } else {
        paymentresult.textContent = 'Please select a payment method.';
    }
}

// Event listener for submit button
submit.onclick = function () {
    if (mycheckbox.checked) {
        subresult.textContent = 'You are subscribed!';
    } else {
        subresult.textContent = 'You are not subscribed - hurry up and subscribe now!';
    }
    updatePaymentResult(); // Call the function to update payment result
};
