//Use RegEx to validate form
function validate()
{
    // Names
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    // Regex for only letters, but with international support
    var nameVal = /^[a-zA-ZàáâäãåąæčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    var firstNameResult = nameVal.test(firstName);
    var lastNameResult = nameVal.test(lastName);

    // Phone Number
    var phoneNumber = document.getElementById('phone-number').value;
    // Regex for numbers only, has to be 8 in length (norwegian phone-number)
    var phoneVal = /^\d{8,8}$/;
    var phoneResult = phoneVal.test(phoneNumber);

    // Email
    var emailAddress = document.getElementById('email-address').value;
    // Regex for email. name@name.name accepted
    var emailVal = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailResult = emailVal.test(emailAddress);

    // Validation feedback
    if (!firstNameResult) {
        alert('Illegal characters in first name')
    } else if (!lastNameResult) {
        alert('Illegal characters in last name')
    } else if (!phoneResult) {
        alert('Invalid phone-number. Use only digits, 8 in length')
    } else if (!emailResult) {
        alert('Email format invalid, use the following format: email@domain.com')
    } else if (firstNameResult && lastNameResult && phoneResult && emailResult) {
        alert('All inputs correctly validated')
    } else {
        alert('A dog ate the server and something has gone horribly wrong')
    }
}