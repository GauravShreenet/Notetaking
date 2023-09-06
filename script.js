
const submit = document.getElementById("submit");
const noteList = document.querySelector(".notelist");

submit.addEventListener("click", () => {
    // document.write(text);
    const text = document.getElementById("task").value;

    if (text.trim() !== "") {
        const noteElement = document.createElement("p");
        noteElement.textContent = text;
        noteList.appendChild(noteElement);
        document.getElementById("task").value = "";
    }
    // document.querySelector(".notes-input").innerHTML = text;
});