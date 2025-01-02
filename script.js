// Function for the Back Button to redirect to Google
function goBack() {
    window.location.href = "https://www.google.com";
}

// Function to simulate blocking API call (for your number block example)
function startBlocking() {
    const phoneNumber = document.getElementById('phone-number').value;
    if (phoneNumber) {
        // Call the API here (just a placeholder message)
        alert(`Blocking number: ${phoneNumber}`);
    } else {
        alert("Please enter a phone number.");
    }
}
