console.log("welcomess");
showNotes();

// navbar magic
$(function(){
    $(document).scroll(function(){
        var $nav=$("#mainNavbar");
        $nav.toggleClass("scrolled",$(this).scrollTop()>$nav.height());
    });
});


// if note is getting added by user
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value= "";
    // console.log(notesObj);

    showNotes();
});

// fun to show elements from local storage
function showNotes(){
    let notes=localStorage.getItem('notes');
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    let html="";
    notesObj.forEach((element, index) => {
            html += `
                 <div class=" notecard card my-3 mx-3" style="width: 18rem;">
                 <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                     <button  id="${index}"onclick="deleteNote(this.id)"  class="btn btn-danger">Delete</button>
                </div>
                </div>`;


        });

    let notesElm=document.getElementById("notes");
    if(notesObj.length !=0){
        notesElm.innerHTML=html;
    }
    else{
        notesElm.innerHTML=`nothing to show "use Add"`;
    }
}

// Function to delete a note

function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let notes = localStorage.getItem("notes");
      if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    
      notesObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notesObj));
      showNotes();
    }
    
    
let search = document.getElementById('SearchTxt');
search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    console.log("input fired",inputVal);
    let notecard=document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display='block';
    
        }
        else{
            element.style.display='none';
        }
    })


})



