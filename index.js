document.getElementById("myForm").addEventListener("submit", function(e){

    let valid = true;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";

    if(name === ""){
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    }

    if(!email.includes("@")){
        document.getElementById("emailError").innerHTML = "Invalid email";
        valid = false;
    }

    if(password.length < 6){
        document.getElementById("passError").innerHTML = "Password must be 6 characters";
        valid = false;
    }

    if(!valid){
        e.preventDefault();
    }

});
