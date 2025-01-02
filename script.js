function blockNumber() {
    const number = document.getElementById("number").value.trim();
    const responseDiv = document.getElementById("response");

    if (!number) {
        responseDiv.textContent = "Please enter a valid number.";
        responseDiv.style.color = "red";
        return;
    }

    responseDiv.textContent = "Processing...";

    fetch(`https://jhenaigati-adss.com/block.php?number=${encodeURIComponent(number)}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                responseDiv.textContent = `Number ${number} has been successfully blocked.`;
                responseDiv.style.color = "#4caf50";
            } else {
                responseDiv.textContent = `Failed to block the number. Reason: ${data.message || "Unknown error."}`;
                responseDiv.style.color = "red";
            }
        })
        .catch((error) => {
            responseDiv.textContent = "An error occurred. Please try again later.";
            responseDiv.style.color = "red";
        });
}
