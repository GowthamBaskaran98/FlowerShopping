function isValidNumber() {
    var number = document.getElementById("CardNumber").value;
    var regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var j = regex.test(number);
    if (!j) {
        document.getElementById('validNumber').style.display = "block";
        document.getElementById('validNumberSpace').style.display = "block";
    }
    else
    {
        document.getElementById('validNumber').style.display = "none";
        document.getElementById('validNumberSpace').style.display = "none";
    }
}
function isValidSecurityCode() {
    var x = document.getElementById("SecurityCode");
    var regex = /^\d{3}$/;
    if (!x.value.match(regex)) {
        document.getElementById('validCode').style.display = "block";
        document.getElementById('validCodeSpace').style.display = "block";
    }
    else {
        document.getElementById('validCode').style.display = "none";
        document.getElementById('validCodeSpace').style.display = "none";
    }
}
function isValidName() {
    var x = document.getElementById("Name");
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!x.value.match(regex)) {
        document.getElementById('validName').style.display = "block";
        document.getElementById('validNameSpace').style.display = "block";
    }
    else {
        document.getElementById('validName').style.display = "none";
        document.getElementById('validNameSpace').style.display = "none";
    }
}
function isValidateFirstAddress() {
    var x = document.getElementById("FirstAddress");
    var regex = /^[a-zA-Z0-9\s,'-]*$/;  
    if (!x.value.match(regex)) {
        document.getElementById('validAddress').style.display = "block";
        document.getElementById('validAddressSpace').style.display = "block";
    }
    else {
        document.getElementById('validAddress').style.display = "none";
        document.getElementById('validAddressSpace').style.display = "none";
    }
}
function isValidPlace() {
    var x = document.getElementById("Place");
    var regex = /^[A-Za-z]+$/;
    if (!x.value.match(regex)) {
        document.getElementById('validPlace').style.display = "block";
        document.getElementById('validPlaceSpace').style.display = "block";
    }
    else {
        document.getElementById('validPlace').style.display = "none";
        document.getElementById('validPlaceSpace').style.display = "none";
    }
}
function isValidRegion() {
    var x = document.getElementById("Region");
    var regexs = /^[A-Za-z]+$/;
    if (!x.value.match(regexs)) {
        document.getElementById('validRegion').style.display = "block";
        document.getElementById('validRegionSpace').style.display = "block";
    }
    else {
        document.getElementById('validRegion').style.display = "none";
        document.getElementById('validRegionSpace').style.display = "none";
    }
}
function isValidZipCode() {
    var x = document.getElementById("Code");
    var regexs = /^\d{5}$/; 
    if (!x.value.match(regexs)) {
        document.getElementById('validZip').style.display = "block";
        document.getElementById('validZipSpace').style.display = "block";
    }
    else {
        document.getElementById('validZip').style.display = "none";
        document.getElementById('validZipSpace').style.display = "none";
    }
}
function isValidPhoneNumber() {
    var x = document.getElementById("PhoneNumber");
    var regex = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (!x.value.match(regex)) {
        document.getElementById('validTelephone').style.display = "block";
        document.getElementById('validTelephoneSpace').style.display = "block";
    }
    else {
        document.getElementById('validTelephone').style.display = "none";
        document.getElementById('validTelephoneSpace').style.display = "none";
    }
}
function isValidFax() {
    var x = document.getElementById("Fax");
    var regex = /^\+?[0-9]{6,}$/;
    if (!x.value.match(regex)) {
        document.getElementById('validFax').style.display = "block";
        document.getElementById('validFaxSpace').style.display = "block";
    }
    else {
        document.getElementById('validFax').style.display = "none";
        document.getElementById('validFaxSpace').style.display = "none";
    }
}
function isValidEmail() {
    var x = document.getElementById("Email");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!x.value.match(regex)) {
        document.getElementById('validEmail').style.display = "block";
        document.getElementById('validEmailSpace').style.display = "block";
    }
    else {
        document.getElementById('validEmail').style.display = "none";
        document.getElementById('validEmailSpace').style.display = "none";
    }
}
function isValidCountry() {
    var x = document.getElementById("country").selectedIndex;
    if (!x.value.match(regex)) {
        document.getElementById('validCountry').style.display = "block";
        document.getElementById('validCountrySpace').style.display = "block";
    }
    else {
        document.getElementById('validCountry').style.display = "none";
        document.getElementById('validCountrySpace').style.display = "none";
    }
}
function FormValidation() {
    var CardNumber = document.getElementById('CardNumber').value;
    var SecurityCode = document.getElementById('SecurityCode').value;
    var Month = document.getElementById('month').value;
    var Year = document.getElementById('year').value;
    var Name = document.getElementById('Name').value;
    var Address = document.getElementById('FirstAddress').value;
    var Place = document.getElementById('Place').value;
    var Region = document.getElementById('Region').value;
    var Zip = document.getElementById('Code').value;
    var Email = document.getElementById('Email').value;
    var isBool = true;
    if (CardNumber == "") {
        document.getElementById('CardNumber').style.borderColor = "red";
        document.getElementById('CardNumber').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('CardNumber').style.borderColor = "";
    }
    if (SecurityCode == "") {
        document.getElementById('SecurityCode').style.borderColor = "red";
        document.getElementById('SecurityCode').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('SecurityCode').style.borderColor = "";
    }
    if (Month == 0) {
        document.getElementById('month').style.borderColor = "red";
        isBool = false;
    }
    else {
        document.getElementById('month').style.borderColor = "";
    }
    if (Year == 0) {
        document.getElementById('year').style.borderColor = "red";
        isBool = false;
    }
    else {
        document.getElementById('year').style.borderColor = "";
    }
    if (Address == "") {
        document.getElementById('FirstAddress').style.borderColor = "red";
        document.getElementById('FirstAddress').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('FirstAddress').style.borderColor = "";
    }
    if (Name == "") {
        document.getElementById('Name').style.borderColor = "red";
        document.getElementById('Name').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('Name').style.borderColor = "";
    }
    if (Place == "") {
        document.getElementById('Place').style.borderColor = "red";
        document.getElementById('Place').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('Place').style.borderColor = "";
    }
    if (Zip == "") {
        document.getElementById('Code').style.borderColor = "red";
        document.getElementById('Code').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('Code').style.borderColor = "";
    }
    if (Email == "") {
        document.getElementById('Email').style.borderColor = "red";
        document.getElementById('Email').placeholder = "Field Required";
        isBool = false;
    }
    else {
        document.getElementById('Email').style.borderColor = "";
    }
    if(isBool)
    {
        window.location = "MakePayment.html";
    }
}
function CancelPage()
{
    window.location = "CancelPage.html";
}
function Restart()
{
    window.location = "PaymentPage.html";
}
