function checkEligibility() {
    var age = document.getElementById("age").value;
    var membership = document.getElementById("membership").checked;

    if (age >= 65 || (age >= 18 && membership)) {
        document.getElementById("result").textContent = "You are eligible for a discount!";
    } else {
        document.getElementById("result").textContent = "You are not eligible for a discount.";
    }
}
