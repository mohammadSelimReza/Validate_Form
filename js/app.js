// displaying Error massage::
const displayError = (errId, errorMsg) => document.getElementById(errId).innerText = errorMsg;
// values of client::
const valueId = Id => document.getElementById(Id).value;
// define a function to validate form::
document.getElementById('btn').addEventListener('click', function() {
    const nameValue = valueId('name');
    const emailValue = valueId('email');
    const numValue = valueId('num');
    const countryName = valueId('country');
    const genderValue = valueId('gender');
    console.log(genderValue, countryName);
    const hobbies = [];
});