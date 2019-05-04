function splitBill() {
    let amount = document.getElementById("numPersons").value / document.getElementById("totalCost").value;

    if(document.getElementById("numPersons").value !== '' && document.getElementById("totalCost").value !== '') {
        document.getElementById("costPP").value = `$ ${Math.ceil(amount * 100)/100} per person`;
    }
}
function addEmail() {
    console.log('email added');
}
function removeEmail() {
    console.log('email removed');
}
function requestPayment() {
    document.getElementById("result").innerHTML = 'Payment request sent';
}