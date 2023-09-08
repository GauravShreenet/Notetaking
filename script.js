
const submit = document.getElementById("submit");
const noteList = document.querySelector(".notelist");

submit.addEventListener("click", () => {
    const text = document.getElementById("task").value;

    if (text.trim() !== "") {
        const noteElement = document.createElement("div");
        noteElement.className = "flex"
        const notesList = document.createElement("p");
        noteElement.textContent = text;

        const deleteButton = document.createElement("button");
            deleteButton.textContent = "X";
            deleteButton.className = "flex"
            deleteButton.addEventListener("click", () => {
                // Remove the parent element (the entire note) when the delete button is clicked
                noteList.removeChild(noteElement);
            });
            
            noteElement.appendChild(notesList);
            noteElement.appendChild(deleteButton);
        
            noteList.appendChild(noteElement);       
            document.getElementById("task").value = "";
        }
    
});