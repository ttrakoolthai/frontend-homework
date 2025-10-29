// Add your code here

const input = document.getElementById("userInput");
const textBlock = document.getElementById("textBlock");
const originalText = textBlock.innerHTML;

function handleKeyDown(event) {
    if (event.key === "Enter") {
        const word = input.value.trim();

        // Reset if empty
        if (!word) {
            textBlock.innerHTML = originalText;
            return;
        }

        // Create case-insensitive regex for whole-word matches
        const regex = new RegExp(`\\b(${word})\\b`, "gi");

        // Replace matches with highlighted text
        textBlock.innerHTML = originalText.replace(regex, `<mark>$1</mark>`);
    }
}

input.addEventListener("keydown", handleKeyDown);
