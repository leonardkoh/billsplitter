function splitBill() {
    let amount = $("#numPersons").val() / $("#totalCost").val();

    if($("#numPersons").val() !== '' && $("#totalCost").val() !== '') {
        $("#costPP").val(`$ ${Math.ceil(amount * 100)/100} per person`);
    }
}
function addEmail() {
    $("#emailAddresses").append('<input id="email" class="u-half-width ctr" type="email" placeholder="Enter email">');
}
function removeEmail() {
    $("#emailAddresses #email").last().remove();
}
function getEmails() {
    // $("#emailAddresses").each(() => console.log($(this).val())); 
    $("#emailAddresses").each(function(x,y) { 
        // console.log($(this).val());
        console.log("x: " + x + "y: " +y); 
        console.log(y);
    });
}
function requestPayment() {
    // if(document.getElementById("result").value === undefined)
    //     document.getElementById("result").innerHTML = '';

    // document.getElementById("loader").innerHTML = '<div class="loader"></div>';
    // setTimeout(() => { document.getElementById("result").innerHTML = 'Payment request sent'; }, 2000);
    // setTimeout(() => { document.getElementById("loader").innerHTML = ''; }, 2000);
    
    $("#result").append("<div>Payment request sent</div>");
}
function submit() {
    $("#result").append("<div>Payment request sent</div>");

    // setTimeout(() => { $("#result").append("<div>Payment request submitted </div>"); }, 2000);
    console.log('submit');
}