console.log("hello china");  // Call -1
showNotes();  // Call-2  function call
//if user adds a note, add it to the localStorage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
//function to S how element in localstorage
function showNotes()
 {
    let notes = localStorage.getItem("notes");  // chrome mai local data base , aaj kaal sabhi browser mai local database aata hai 
    // It will return in String format
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);  // NotesObj  is an Array  ["irshad", "", "my name is irshad ...", "irshad khan"]
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        console.log(element);
        console.log(index);
        html += `
       <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class="card-text">${element}</p>
           <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
       </div>
   </div> `;

    });
    let notesElm = document.getElementById('notes'); // HTML page pe id
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;   // rakhne ka tariotesid pe 
    }
    else{
        notesElm.innerHTML=`Nothing is show! "Add a Note" section above to add notes.`;
    }
    
}
//function to delete a note
function deleteNote(index){
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    }

    let search = document.getElementById('searchTxt');
    search.addEventListener('input',function(){
        console.log('input event fired!');
        let inputVal = search.value.toLowerCase();
    console.log('Input event fired!',inputVal);
    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";   
        }
        // console.log(cardTxt)

    })
    })
    
