// Sample data for the family tree
const familyData = {
    "Ashar": ["Descendant1", "Descendant2", "Descendant3"],
    "Descendant1": ["Descendant4", "Descendant5"],
    // Add more relationships as needed
};

// Function to generate the family tree
function generateFamilyTree() {
    // Top row for Ashar
    const rowAshar = document.getElementById("rowAshar");
    const crown = document.createElement("div");
    crown.id = "crown";
    crown.classList.add("character");
    crown.textContent = "Ashars Ilse";
    rowAshar.appendChild(crown);

    // Bottom row for descendants
    const rowDescendants = document.getElementById("rowDescendants");

    // Iterate through descendants and create elements
    familyData["Ashar"].forEach(descendant => {
        const descendantElement = document.createElement("div");
        descendantElement.classList.add("character");
        descendantElement.textContent = descendant;
        descendantElement.addEventListener("click", () => displayInfo(descendant));
        rowDescendants.appendChild(descendantElement);
    });
}

// Display information about the character (for now, it's a simple alert)
function displayInfo(character) {
    alert(`Information about ${character}`);
}

// Call the function to generate the family tree
generateFamilyTree();
