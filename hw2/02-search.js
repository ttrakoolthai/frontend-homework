const userInput = document.getElementById("userInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

searchButton.addEventListener("click", () => {
    const searchTerm = userInput.value.trim();

    // Clear previous results
    results.innerHTML = "";

    if (!searchTerm) return;

    // Search characters in 02-data.js
    const matchedCharacters = characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedCharacters.length === 0) {
        results.innerHTML = `<p>No matches found.</p>`;
        return;
    }

    // Highlight search term
    matchedCharacters.forEach((character) => {
        const nameLower = character.name.toLowerCase();
        const termLower = searchTerm.toLowerCase();
        let highlightedName = "";
        let startIndex = 0;

        while (true) {
            const index = nameLower.indexOf(termLower, startIndex);
            if (index === -1) {
                highlightedName += character.name.slice(startIndex);
                break;
            }
            // Add part before match
            highlightedName += character.name.slice(startIndex, index);
            // Add highlighted match
            highlightedName += `<span style="background-color: yellow;">${character.name.slice(
                index,
                index + searchTerm.length
            )}</span>`;
            startIndex = index + searchTerm.length;
        }

        const card = document.createElement("div");
        card.className = "card";
        card.style.width = "13rem";
        card.style.height = "8rem";

        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${highlightedName}</h5>
                <p class="card-text">Birth Year: ${character.birth_year}</p>
            </div>
        `;

        results.appendChild(card);
    });
});
