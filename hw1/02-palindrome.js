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
        return;
    }

    // Checks for non-negative numbers
    if (Number(value) < 0) {
        resultDiv.textContent = "Non-negative numbers only!";
        return;
    }

    // Palindrome check
    resultDiv.textContent = isPalindrome(value) ? "Yes!" : "No 😭";
};

// Event listener for live input checking
inputElem.addEventListener("input", handleInput);
