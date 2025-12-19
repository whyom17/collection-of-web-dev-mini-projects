function addNote() {
    
    const text = document.getElementById("noteText").value.trim();
    const color = document.getElementById("noteColor").value;
    if (!text) return;

    // const note = document.createElement("div");
    // note.className = "note " + color;

    // note.innerHTML = `
    //     <button class="delete-btn" onclick="deleteNote(this)">✕</button>
    //     ${text}
    // `;

    // document.getElementById("notesContainer").appendChild(note);
    // document.getElementById("noteText").value = "";
}

function deleteNote(btn) {
    const note = btn.parentElement;
    note.remove();
}