
const submit = document.getElementById("submit");
const noteList = document.querySelector(".notelist");
const taskInput = document.getElementById("task");
let editMode = false;
let editeNote = null;

submit.addEventListener("click", () => {
    const text = taskInput.value;  

    if (text.trim() !== "") {
        if(editMode && editeNote){
            editeNote.querySelector("p").textContent = text;
            editMode = false;
            editeNote = null;
            taskInput.value = "";            
        }else{
            const noteElement = document.createElement("div");
            noteElement.className = "flex";
            noteElement.classList.add("note");
            
            const notesList = document.createElement("p");
            notesList.textContent = text;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => {
                editMode = true;
                editNote = noteElement;
                taskInput.value = notesList.textContent;
            });

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
            
    }
    
});