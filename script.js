
const submit = document.getElementById("submit");
const noteList = document.querySelector(".notelist");

submit.addEventListener("click", () => {
    const text = document.getElementById("task").value;

    if (text.trim() !== "") {
        const noteElement = document.createElement("div");
        const notesList = document.createElement("p");
        noteElement.textContent = text;

        const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                // Remove the parent element (the entire note) when the delete button is clicked
                notesList.removeChild(noteElement);
            });

        
        noteList.appendChild(noteElement);
        noteList.appendChild(deleteButton);
        
        document.getElementById("task").value = "";
    }
    
});