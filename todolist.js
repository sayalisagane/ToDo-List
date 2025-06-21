// function addTask(){
// let input=document.getElementById("content")
// let content=input.value

// if(content !==""){
//     let li=document.createElement("li")
//     document.getElementById("list").appendChild(li)
//     li.textContent=content
//     li.addEventListener("click",()=>{
//         li.remove()
//     })
// }
// else{
//     alert("please enter a task")
// }
// input.value=""
// let li = document.createElement("li");
// let span = document.createElement("span");
// span.textContent = content;
// li.appendChild(span);

// // Update Button
// let updateBtn = document.createElement("button");
// updateBtn.textContent = "Update";
// updateBtn.addEventListener("click", () => {
//     let newText = prompt("Update the task:", span.textContent);
//     if (newText !== null && newText.trim() !== "") {
//         span.textContent = newText.trim();
//     }
// });
// li.appendChild(updateBtn);

// // Delete Button
// let deleteBtn = document.createElement("button");
// deleteBtn.textContent = "Delete";
// deleteBtn.addEventListener("click", () => li.remove());
// li.appendChild(deleteBtn);

// // Append to list
// document.getElementById("list").appendChild(li);


// }
function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(span);

  // Toggle completed
  li.addEventListener("click", function (e) {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  // Update Button
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.className = "update-btn";
  updateBtn.onclick = function () {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  };

  li.appendChild(updateBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = "";
}


