function validateForm() {
    var fullName = document.forms["dataForm"]["Full Name"].value;
    var age = document.forms["dataForm"]["Age"].value;
    var nickname = document.forms["dataForm"]["Nickname"].value;
    var emailAddress = document.forms["dataForm"]["Email Address"].value;
    var phoneNumber = document.forms["dataForm"]["Phone Number"].value;
    var birthDate = document.forms["dataForm"]["Birth Date"].value;
    var address = document.forms["dataForm"]["Address"].value;
    var country = document.forms["dataForm"]["country"].value;
    var city = document.forms["dataForm"]["City"].value;
    var region = document.forms["dataForm"]["Region"].value;
    var postalCode = document.forms["dataForm"]["Postal Code"].value;

    if (fullName === "" || age === "" || nickname === "" || emailAddress === "" || phoneNumber === "" || birthDate === "" || address === "" || country === "" || city === "" || region === "" || postalCode === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    var radios = document.getElementsByName('Gender');
    var checkedCount = 0;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount !== 1) {
        alert('Please select one gender.');
        return false;
    }

    return true;
}

function submitForm() {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyJWPlFhHQ1xgj3rEdFYwomH40txfE_qS677LO38ahNwizzoccxY5fb-h_mJUnEMMQ5ug/exec";
    const form = document.forms["dataForm"];

    if (!validateForm()) {
        return false;
    }

    const formData = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Your form is submitted successfully.");
        window.location.reload();
    })
    .catch(error => {
        console.error('Error!', error.message);
        alert("There was an error submitting the form.");
    });

    return false; 
}
