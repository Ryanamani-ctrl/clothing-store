// Select the form
const form = document.getElementById("checkoutForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page reload

    // Get form values
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelectorAll('input[type="text"]')[1].value;
    const city = form.querySelectorAll('input[type="text"]')[2].value;
    const payment = form.querySelector("select").value;

    // Simple validation
    if (name === "" || email === "" || phone === "" || address === "" || city === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Success message
    alert(
        "Order placed successfully!\n\n" +
        "Name: " + name + "\n" +
        "Payment Method: " + payment + "\n\n" +
        "Thank you for shopping with URBAN EDGE!"
    );

    // Reset form after submission
    form.reset();
});