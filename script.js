//add button
var input = document.getElementById("text");
input.addEventListener("keyup", function (event) {
   if (event.keyCode === 13) {
      addList();
   }
});
var click = document.getElementById("addBtn").addEventListener("click", addList);
function addList() {
   var li = document.createElement("li");
   li.className = "myli";
   var text = document.getElementById("text").value;
   var t = document.createTextNode(text);
   li.appendChild(t);
   if (text === "") {
   } else {
      document.getElementById("myul").appendChild(li).style.display = "block";
      document.getElementsByClassName("progress-bar")[0].style.display = "block";
   }
   document.getElementById("text").value = "";
   //edit + save button
   var editbtn = document.createElement("SPAN");
   var editext = document.createTextNode("edit");
   editbtn.className = "editbtn";
   editbtn.appendChild(editext);
   li.appendChild(editbtn);
   editbtn.addEventListener("click", edit);
   function edit(event) {
      const button = event.target;
      if (button.textContent === "edit") {
         var text = li.firstChild;
         var inputext = document.createElement("input");
         inputext.type = "text";
         inputext.value = text.textContent;
         li.insertBefore(inputext, text);
         li.removeChild(text);
         editext.textContent = "save";
      } else if (event.target.textContent === "save") {
         var input = li.firstChild;
         var span = document.createElement("span");
         span.textContent = input.value;
         if (span.textContent !== "") {
            li.insertBefore(span, input);
            li.removeChild(input);
            editext.textContent = "edit";
         } else if (span.textContent == "") {
            this.parentElement.style.display = "none";
            this.parentElement.classList = "";
         }
      }
   }
   //delete button
   var closebtn = document.createElement("SPAN");
   var closebtn_text = document.createTextNode("delete");
   closebtn.className = "closebtn";
   closebtn.appendChild(closebtn_text);
   li.appendChild(closebtn);
   closebtn.addEventListener("click", close);
   function close() {
      this.parentElement.style.display = "none";
      this.parentElement.classList = "";
   }
   progressbar_interaction();
   // console.log(taskNum);
}
//check and uncheck
var list = document.querySelector("ul");
list.addEventListener("click", function (event) {
   if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
   }
   progressbar_interaction();
});
//progressbar
function progressbar_interaction() {
   var taskCompleted = document.getElementsByClassName("checked").length;
   var taskNum = document.getElementsByClassName("myli").length;
   function percentageTaskcompleted() {
      if (taskNum == 0) {
         document.getElementsByClassName("progress-bar")[0].style.display = "none";
         return 0;
      } else {
         return Math.round((taskCompleted / taskNum) * 100);
      }
   }
   document.getElementsByClassName("progression")[0].innerHTML = `${percentageTaskcompleted()}%`;
   document.getElementsByClassName("progression")[0].style.width = `${percentageTaskcompleted()}%`;
}
