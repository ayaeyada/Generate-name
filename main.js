// Function to create a name tag and append it to the tags container
function createTag(name) {
    const tagsContainer = document.getElementById("tags-container");
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.style.backgroundColor = getRandomColor();
    tag.innerHTML = `${name}<span class="delete-icon" onclick="deleteTag(this)">X</span>`;
    tagsContainer.appendChild(tag);
}

// Function to generate a random background color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to generate a name tag when the Generate button is clicked
function generateName() {
    const nameInput = document.getElementById("name-input");
    const name = nameInput.value.trim();
    if (name !== "") {
        createTag(name);
        nameInput.value = ""; // Clear the input field
    }
}

// Function to delete a tag when the delete icon is clicked
function deleteTag(node) {
    const tag = node.parentNode;
    const tagsContainer = document.getElementById("tags-container");
    tagsContainer.removeChild(tag);
}

// Event listeners
document.getElementById("generate-button").addEventListener("click", generateName);
document.getElementById("clear-button").addEventListener("click", function () {
    document.getElementById("tags-container").innerHTML = "";
});
