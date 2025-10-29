const input = document.getElementById("userInput");
const textBlock = document.getElementById("textBlock");
const originalText = textBlock.innerHTML;

function handleKeyDown(event) {
    if (event.key === "Enter") {
        const word = input.value.trim();

        // Reset if input is empty
        if (!word) {
            textBlock.innerHTML = originalText;
            return;
        }

        // Split text into words, highlight matches, and rejoin
        const words = originalText.split(/\b/); // split keeping punctuation
        const highlighted = words
            .map((w) =>
                w.toLowerCase() === word.toLowerCase() ? `<mark>${w}</mark>` : w
            )
            .join("");

        textBlock.innerHTML = highlighted;
    }
}

input.addEventListener("keydown", handleKeyDown);
