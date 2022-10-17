function validateForm() {
    
    document.getElementById("fName-error").innerHTML = "";
    document.getElementById( "lastName-error" ).innerHTML = "";
    document.getElementById( "eMail-error" ).innerHTML = "";
    document.getElementById( "checkBox-error" ).innerHTML = "";

    var fName = document.getElementById('fName')
    var lastName = document.getElementById('lastName')
    var inputEmail = document.getElementById('inputEmail')
    var checkBox = document.getElementById('checkBox').checked
    
    if (fName.value == null || fName.value == "") {
        document.getElementById( "fName-error" ).innerHTML = "Please fill out this field";
        return false;
    }
    else if (lastName.value == null || lastName.value == "") {
        document.getElementById( "lastName-error" ).innerHTML = "Please fill out this field";
        return false;
    }
    else if (inputEmail.value == null || inputEmail.value == "") {
        document.getElementById( "eMail-error" ).innerHTML = "Please fill out this field";
        return false;
    }
    else if (checkBox == false ) {
        document.getElementById( "checkBox-error" ).innerHTML = "Please Check this box";
        return false;
    }
    else {
        document.getElementById('submit').style.display = "block";
       // document.getElementById("myForm").reset();
       fName.value=''
            return true;
    }

    }