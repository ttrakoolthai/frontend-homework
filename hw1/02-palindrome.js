const inputElem = document.querySelector("input");
const resultDiv = document.getElementById("palindrome-result");

// Helper function to check if a string is a palindrome
const isPalindrome = (str) => str === str.split("").reverse().join("");

// Named function for handling input events
const handleInput = () => {
    const value = inputElem.value;

    // Empty input
    if (value === "") {
        resultDiv.textContent = "";
        resultDiv.className = "";
        return;
    }

    // Checks for non-negative numbers
    if (value < 0) {
        resultDiv.textContent = "Non-negative numbers only!";
        resultDiv.className = "text-warning";
        return;
    }

    // Palindrome check
    if (isPalindrome(value)) {
        resultDiv.textContent = "Yes!";
        resultDiv.className = "text-success";
    } else {
        resultDiv.textContent = "No 😭";
        resultDiv.className = "text-danger";
    }
};

// Event listener for live input checking
inputElem.addEventListener("input", handleInput);
